/* =========================================================================
   Supabase Database Client & Sync Manager
   ========================================================================= */

const SupabaseDB = (() => {
    let client = null;

    // Inicializar el cliente de Supabase si están configuradas las credenciales
    function init() {
        if (typeof supabase !== 'undefined' && SUPABASE_CONFIG.URL && SUPABASE_CONFIG.ANON_KEY) {
            try {
                client = supabase.createClient(SUPABASE_CONFIG.URL, SUPABASE_CONFIG.ANON_KEY);
                console.log('✓ Conectado a Supabase correctamente.');
            } catch (e) {
                console.error('Error al inicializar el cliente de Supabase:', e);
            }
        } else {
            console.log('⚠️ Supabase no está configurado o no cargó la librería. Usando localStorage como persistencia local.');
        }
    }

    function isConnected() {
        return client !== null;
    }

    // ==========================================
    // MÉTODOS DE USUARIOS (AUTENTICACIÓN)
    // ==========================================

    // Registrar un usuario en Supabase
    async function registerUser(cedula, nombre, email, password) {
        if (!isConnected()) return { success: false, fallback: true };
        
        try {
            // Verificar si el usuario ya existe en Supabase
            const { data: existingUser, error: checkError } = await client
                .from('usuarios')
                .select('cedula, email')
                .or(`cedula.eq.${cedula},email.eq.${email.toLowerCase()}`)
                .maybeSingle();

            if (checkError) throw checkError;

            if (existingUser) {
                if (existingUser.email === email.toLowerCase()) {
                    return { success: false, message: 'Ya existe una cuenta con este correo' };
                }
                if (existingUser.cedula === cedula) {
                    return { success: false, message: 'Ya existe una cuenta con esta cédula' };
                }
            }

            // Insertar usuario
            const { error: insertUserError } = await client
                .from('usuarios')
                .insert([{
                    cedula,
                    nombre,
                    email: email.toLowerCase(),
                    password: btoa(password) // Mismo encoding original
                }]);

            if (insertUserError) throw insertUserError;

            // Inicializar progreso del usuario
            const fechaInicioStr = new Date().toISOString().split('T')[0];
            const { error: insertProgressError } = await client
                .from('progreso')
                .insert([{
                    user_id: cedula,
                    nombre: nombre,
                    correo: email.toLowerCase(),
                    fecha_inicio: fechaInicioStr,
                    progreso_general: 0,
                    tiempo_total_segundos: 0,
                    curso_completado: false,
                    certificado_generado: false
                }]);

            if (insertProgressError) throw insertProgressError;

            return { success: true };
        } catch (e) {
            console.error('Error en Supabase registerUser:', e);
            return { success: false, message: 'Error de servidor en base de datos: ' + e.message };
        }
    }

    // Verificar si un usuario existe por cédula en Supabase
    async function checkUserExists(cedula) {
        if (!isConnected()) return false;
        try {
            const { data, error } = await client
                .from('usuarios')
                .select('cedula')
                .eq('cedula', cedula)
                .maybeSingle();

            if (error) return false;
            return data !== null;
        } catch (e) {
            return false;
        }
    }

    // Iniciar sesión con Supabase
    async function loginUser(email, password) {
        if (!isConnected()) return { success: false, fallback: true };

        try {
            const encodedPassword = btoa(password);
            const { data: user, error } = await client
                .from('usuarios')
                .select('*')
                .eq('email', email.toLowerCase())
                .eq('password', encodedPassword)
                .maybeSingle();

            if (error) throw error;

            if (!user) {
                return { success: false, message: 'Correo o contraseña incorrectos', fallback: true };
            }

            // Obtener progreso del usuario
            const { data: progress, error: progressError } = await client
                .from('progreso')
                .select('*')
                .eq('user_id', user.cedula)
                .maybeSingle();

            if (progressError) throw progressError;

            // Obtener notas del usuario para sincronización
            const { data: notes, error: notesError } = await client
                .from('notas')
                .select('*')
                .eq('user_id', user.cedula);

            return { 
                success: true, 
                user, 
                progress: progress ? mapSupabaseProgressToLocal(progress) : null,
                notes: notes || []
            };
        } catch (e) {
            console.error('Error en Supabase loginUser:', e);
            return { success: false, message: 'Error de conexión con la base de datos: ' + e.message };
        }
    }

    // ==========================================
    // MÉTODOS DE PROGRESO
    // ==========================================

    // Guardar progreso completo
    async function saveProgress(userId, progressData) {
        if (!isConnected()) return false;

        try {
            const mapped = mapLocalProgressToSupabase(progressData);
            const { error } = await client
                .from('progreso')
                .upsert(mapped, { onConflict: 'user_id' });

            if (error) throw error;
            return true;
        } catch (e) {
            console.error('Error al guardar progreso en Supabase:', e);
            return false;
        }
    }

    // Actualizar campos individuales del progreso
    async function updateProgressFields(userId, fields) {
        if (!isConnected()) return false;

        try {
            const { error } = await client
                .from('progreso')
                .update(fields)
                .eq('user_id', userId);

            if (error) throw error;
            return true;
        } catch (e) {
            console.error('Error al actualizar progreso parcial en Supabase:', e);
            return false;
        }
    }

    // ==========================================
    // MÉTODOS DE NOTAS
    // ==========================================

    // Sincronizar todas las notas
    async function saveNote(userId, note) {
        if (!isConnected()) return false;

        try {
            const { error } = await client
                .from('notas')
                .upsert({
                    id: note.id,
                    user_id: userId,
                    modulo: note.modulo,
                    texto: note.texto,
                    fecha: note.fecha
                }, { onConflict: 'id' });

            if (error) throw error;
            return true;
        } catch (e) {
            console.error('Error al guardar nota en Supabase:', e);
            return false;
        }
    }

    // Eliminar nota de Supabase
    async function deleteNote(noteId) {
        if (!isConnected()) return false;

        try {
            const { error } = await client
                .from('notas')
                .delete()
                .eq('id', noteId);

            if (error) throw error;
            return true;
        } catch (e) {
            console.error('Error al eliminar nota en Supabase:', e);
            return false;
        }
    }


    // ==========================================
    // MAPEO DE DATOS (Local <-> Supabase)
    // ==========================================

    function mapSupabaseProgressToLocal(dbProgress) {
        return {
            userId: dbProgress.user_id,
            nombre: dbProgress.nombre,
            correo: dbProgress.correo,
            fechaInicio: dbProgress.fecha_inicio,
            fechaFin: dbProgress.fecha_fin,
            progresoGeneral: dbProgress.progreso_general,
            tiempoTotalSegundos: dbProgress.tiempo_total_segundos || 0,
            cursoCompletado: dbProgress.curso_completado || false,
            certificadoGenerado: dbProgress.certificado_generado || false,
            modulos: {
                modulo1: { 
                    completado: dbProgress.modulo1_completado, 
                    puntaje: dbProgress.modulo1_puntaje, 
                    fechaCompletado: dbProgress.modulo1_fecha 
                },
                modulo2: { 
                    completado: dbProgress.modulo2_completado, 
                    puntaje: dbProgress.modulo2_puntaje, 
                    fechaCompletado: dbProgress.modulo2_fecha 
                },
                modulo3: { 
                    completado: dbProgress.modulo3_completado, 
                    puntaje: dbProgress.modulo3_puntaje, 
                    fechaCompletado: dbProgress.modulo3_fecha 
                },
                modulo4: { 
                    completado: dbProgress.modulo4_completado, 
                    puntaje: dbProgress.modulo4_puntaje, 
                    fechaCompletado: dbProgress.modulo4_fecha 
                },
                modulo5: { 
                    completado: dbProgress.modulo5_completado, 
                    puntaje: dbProgress.modulo5_puntaje, 
                    fechaCompletado: dbProgress.modulo5_fecha 
                },
                modulo6: { 
                    completado: dbProgress.modulo6_completado, 
                    puntaje: dbProgress.modulo6_puntaje, 
                    fechaCompletado: dbProgress.modulo6_fecha 
                }
            }
        };
    }

    function mapLocalProgressToSupabase(localProgress) {
        return {
            user_id: localProgress.userId,
            nombre: localProgress.nombre,
            correo: localProgress.correo,
            fecha_inicio: localProgress.fechaInicio,
            fecha_fin: localProgress.fechaFin,
            progreso_general: localProgress.progresoGeneral,
            tiempo_total_segundos: localProgress.tiempoTotalSegundos || 0,
            curso_completado: localProgress.cursoCompletado || (localProgress.progresoGeneral === 100),
            certificado_generado: localProgress.certificadoGenerado || false,
            
            modulo1_completado: localProgress.modulos.modulo1.completado,
            modulo1_puntaje: localProgress.modulos.modulo1.puntaje,
            modulo1_fecha: localProgress.modulos.modulo1.fechaCompletado,

            modulo2_completado: localProgress.modulos.modulo2.completado,
            modulo2_puntaje: localProgress.modulos.modulo2.puntaje,
            modulo2_fecha: localProgress.modulos.modulo2.fechaCompletado,

            modulo3_completado: localProgress.modulos.modulo3.completado,
            modulo3_puntaje: localProgress.modulos.modulo3.puntaje,
            modulo3_fecha: localProgress.modulos.modulo3.fechaCompletado,

            modulo4_completado: localProgress.modulos.modulo4.completado,
            modulo4_puntaje: localProgress.modulos.modulo4.puntaje,
            modulo4_fecha: localProgress.modulos.modulo4.fechaCompletado,

            modulo5_completado: localProgress.modulos.modulo5.completado,
            modulo5_puntaje: localProgress.modulos.modulo5.puntaje,
            modulo5_fecha: localProgress.modulos.modulo5.fechaCompletado,

            modulo6_completado: localProgress.modulos.modulo6.completado,
            modulo6_puntaje: localProgress.modulos.modulo6.puntaje,
            modulo6_fecha: localProgress.modulos.modulo6.fechaCompletado
        };
    }

    return {
        init,
        isConnected,
        checkUserExists,
        registerUser,
        loginUser,
        saveProgress,
        updateProgressFields,
        saveNote,
        deleteNote
    };
})();

// Inicializar al cargar
document.addEventListener('DOMContentLoaded', SupabaseDB.init);
