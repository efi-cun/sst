/* ========================================
   Auth Manager - localStorage
   ======================================== */
const AuthManager = (() => {
    const USERS_KEY = 'sst_cun_users';
    const SESSION_KEY = 'sst_cun_session';
    const CUN_DOMAIN = '@cun.edu.co';

    function getUsers() {
        try {
            const data = localStorage.getItem(USERS_KEY);
            return data ? JSON.parse(data) : [];
        } catch {
            return [];
        }
    }

    function saveUsers(users) {
        localStorage.setItem(USERS_KEY, JSON.stringify(users));
    }

    function validateEmail(email) {
        return email.toLowerCase().endsWith(CUN_DOMAIN);
    }

    async function register(name, cedula, email, password) {
        if (!name || !cedula || !email || !password) {
            return { success: false, message: 'Todos los campos son obligatorios' };
        }

        if (!validateEmail(email)) {
            return { success: false, message: 'Debes usar un correo corporativo (@cun.edu.co)' };
        }

        if (password.length < 4) {
            return { success: false, message: 'La contraseña debe tener al menos 4 caracteres' };
        }

        // Check if user already exists in localStorage first
        const users = getUsers();
        if (users.find(u => u.email === email.toLowerCase())) {
            return { success: false, message: 'Ya existe una cuenta con este correo' };
        }
        if (users.find(u => u.cedula === cedula)) {
            return { success: false, message: 'Ya existe una cuenta con esta cédula' };
        }

        // --- Supabase Integration ---
        if (typeof SupabaseDB !== 'undefined' && SupabaseDB.isConnected()) {
            const dbResult = await SupabaseDB.registerUser(cedula, name, email, password);
            if (!dbResult.success) {
                return { success: false, message: dbResult.message };
            }
        }

        // Backup in localStorage
        const freshUsers = getUsers();
        if (!freshUsers.find(u => u.email === email.toLowerCase()) && !freshUsers.find(u => u.cedula === cedula)) {
            const user = {
                id: cedula,
                nombre: name,
                cedula,
                email: email.toLowerCase(),
                password: btoa(password),
                createdAt: new Date().toISOString()
            };
            freshUsers.push(user);
            saveUsers(freshUsers);
        }

        await ProgressManager.initUserProgress(cedula, name, email.toLowerCase());

        // --- Google Sheets Sincronización ---
        if (typeof GoogleSheetsSync !== 'undefined' && GoogleSheetsSync.isConfigured()) {
            GoogleSheetsSync.registerUser(cedula, name, email, password)
                .then(res => console.log('✓ Registro sincronizado con Google Sheets:', res))
                .catch(err => console.error('Error al sincronizar registro con Google Sheets:', err));
        }

        return { success: true };
    }

    async function login(email, password) {
        if (!email || !password) {
            return { success: false, message: 'Correo y contraseña son obligatorios' };
        }

        let user = null;
        let progress = null;
        let dbNotes = null;

        // --- Supabase Integration ---
        if (typeof SupabaseDB !== 'undefined' && SupabaseDB.isConnected()) {
            const dbResult = await SupabaseDB.loginUser(email, password);
            if (!dbResult.success && !dbResult.fallback) {
                return { success: false, message: dbResult.message };
            }
            if (dbResult.success) {
                user = {
                    id: dbResult.user.cedula,
                    nombre: dbResult.user.nombre,
                    cedula: dbResult.user.cedula,
                    email: dbResult.user.email,
                    password: dbResult.user.password,
                    createdAt: dbResult.user.created_at
                };
                progress = dbResult.progress;
                dbNotes = dbResult.notes;
            }
        }

        // Local Storage Fallback if Supabase not connected or query skipped
        if (!user) {
            const users = getUsers();
            const localUser = users.find(u => u.email === email.toLowerCase() && u.password === btoa(password));
            if (!localUser) {
                return { success: false, message: 'Correo o contraseña incorrectos' };
            }
            user = {
                id: localUser.cedula,
                nombre: localUser.nombre,
                cedula: localUser.cedula,
                email: localUser.email,
                password: localUser.password,
                createdAt: localUser.createdAt
            };

            // Proactive sync of local user and progress to Supabase if connected now
            if (typeof SupabaseDB !== 'undefined' && SupabaseDB.isConnected()) {
                try {
                    const regResult = await SupabaseDB.registerUser(user.cedula, user.nombre, user.email, password);
                    if (regResult.success) {
                        console.log('✓ Usuario local sincronizado con Supabase.');
                        const localProgress = ProgressManager.getUserProgress(user.cedula);
                        if (localProgress) {
                            await SupabaseDB.saveProgress(user.cedula, localProgress);
                            console.log('✓ Progreso local sincronizado con Supabase.');
                        }
                    }
                } catch (err) {
                    console.error('Error al auto-sincronizar usuario local con Supabase:', err);
                }
            }

            // Sincronización proactiva con Google Sheets
            if (typeof GoogleSheetsSync !== 'undefined' && GoogleSheetsSync.isConfigured()) {
                GoogleSheetsSync.registerUser(user.cedula, user.nombre, user.email, password)
                    .then(res => {
                        console.log('✓ Registro local sincronizado con Google Sheets:', res);
                        const localProgress = ProgressManager.getUserProgress(user.cedula);
                        if (localProgress) {
                            GoogleSheetsSync.saveProgress(user.cedula, localProgress);
                        }
                    })
                    .catch(err => console.error('Error al sincronizar local con Google Sheets:', err));
            }
        }

        const session = {
            userId: user.cedula,
            nombre: user.nombre,
            email: user.email,
            loginAt: new Date().toISOString()
        };

        sessionStorage.setItem(SESSION_KEY, JSON.stringify(session));

        // Sync pulled progress to local storage
        if (progress) {
            ProgressManager.saveUserProgressDirectly(user.cedula, progress);
        } else {
            await ProgressManager.initUserProgress(user.cedula, user.nombre, user.email);
        }

        // Sync pulled notes to local storage
        if (dbNotes && dbNotes.length > 0 && typeof NotesManager !== 'undefined') {
            const mappedNotes = dbNotes.map(n => ({
                id: n.id,
                modulo: n.modulo,
                texto: n.texto,
                fecha: n.fecha
            }));
            localStorage.setItem(`sst_cun_notes_${user.cedula}`, JSON.stringify(mappedNotes));
        }

        // Start session time tracking
        ProgressManager.startTimeTracking(user.cedula);

        return { success: true, user, session };
    }

    function getSession() {
        try {
            const data = sessionStorage.getItem(SESSION_KEY);
            return data ? JSON.parse(data) : null;
        } catch {
            return null;
        }
    }

    function isLoggedIn() {
        return getSession() !== null;
    }

    function getCurrentUser() {
        const session = getSession();
        if (!session) return null;
        return {
            ...session,
            progress: ProgressManager.getUserProgress(session.userId)
        };
    }

    function logout() {
        ProgressManager.stopTimeTracking();
        sessionStorage.removeItem(SESSION_KEY);
    }

    async function syncActiveSession() {
        const session = getSession();
        if (!session) return;
        
        // 1. Sincronización con Supabase
        if (typeof SupabaseDB !== 'undefined' && SupabaseDB.isConnected()) {
            try {
                const exists = await SupabaseDB.checkUserExists(session.userId);
                if (!exists) {
                    const users = getUsers();
                    const localUser = users.find(u => u.cedula === session.userId);
                    if (localUser) {
                        const rawPassword = atob(localUser.password);
                        const regResult = await SupabaseDB.registerUser(localUser.cedula, localUser.nombre, localUser.email, rawPassword);
                        if (regResult.success) {
                            console.log('✓ Usuario de sesión activa sincronizado con Supabase.');
                            const localProgress = ProgressManager.getUserProgress(localUser.cedula);
                            if (localProgress) {
                                await SupabaseDB.saveProgress(localUser.cedula, localProgress);
                                console.log('✓ Progreso de sesión activa sincronizado con Supabase.');
                            }
                        }
                    }
                } else {
                    const localProgress = ProgressManager.getUserProgress(session.userId);
                    if (localProgress) {
                        await SupabaseDB.saveProgress(session.userId, localProgress);
                    }
                }
            } catch (err) {
                console.error('Error al sincronizar sesión activa con Supabase:', err);
            }
        }

        // 2. Sincronización con Google Sheets
        if (typeof GoogleSheetsSync !== 'undefined' && GoogleSheetsSync.isConfigured()) {
            try {
                const users = getUsers();
                const localUser = users.find(u => u.cedula === session.userId);
                if (localUser) {
                    const rawPassword = atob(localUser.password);
                    GoogleSheetsSync.registerUser(localUser.cedula, localUser.nombre, localUser.email, rawPassword)
                        .then(res => {
                            console.log('✓ Sincronización de registro con Google Sheets:', res);
                            const localProgress = ProgressManager.getUserProgress(localUser.cedula);
                            if (localProgress) {
                                GoogleSheetsSync.saveProgress(localUser.cedula, localProgress);
                            }
                        })
                        .catch(err => console.error('Error al sincronizar registro con Google Sheets:', err));
                }
            } catch (err) {
                console.error('Error al iniciar sincronización activa con Google Sheets:', err);
            }
        }
    }

    async function resetPassword(email, cedula, newPassword) {
        if (!email || !cedula || !newPassword) {
            return { success: false, message: 'Todos los campos son obligatorios' };
        }

        if (!validateEmail(email)) {
            return { success: false, message: 'Debes usar un correo corporativo (@cun.edu.co)' };
        }

        if (newPassword.length < 4) {
            return { success: false, message: 'La contraseña debe tener al menos 4 caracteres' };
        }

        let dbSuccess = false;
        let localSuccess = false;

        // 1. Supabase reset
        if (typeof SupabaseDB !== 'undefined' && SupabaseDB.isConnected()) {
            const dbResult = await SupabaseDB.resetPassword(email, cedula, newPassword);
            if (!dbResult.success && !dbResult.fallback) {
                return { success: false, message: dbResult.message };
            }
            if (dbResult.success) {
                dbSuccess = true;
            }
        }

        // 2. LocalStorage reset
        const users = getUsers();
        const userIndex = users.findIndex(u => u.email === email.toLowerCase() && u.cedula === cedula);
        if (userIndex !== -1) {
            users[userIndex].password = btoa(newPassword);
            saveUsers(users);
            localSuccess = true;
        }

        if (dbSuccess || localSuccess) {
            // Sincronización con Google Sheets si está disponible
            if (typeof GoogleSheetsSync !== 'undefined' && GoogleSheetsSync.isConfigured()) {
                const updatedUser = users[userIndex] || { nombre: 'Usuario' };
                GoogleSheetsSync.registerUser(cedula, updatedUser.nombre, email, newPassword)
                    .catch(err => console.error('Error al sincronizar cambio de contraseña con Google Sheets:', err));
            }
            return { success: true };
        }

        return { success: false, message: 'Los datos ingresados no coinciden con ningún usuario registrado' };
    }

    return {
        register,
        login,
        resetPassword,
        getSession,
        isLoggedIn,
        getCurrentUser,
        logout,
        validateEmail,
        syncActiveSession
    };
})();
