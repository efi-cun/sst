-- =========================================================================
-- SCHEMA DE BASE DE DATOS PARA CURSO REINDUCCIÓN SST - CUN (SUPABASE / POSTGRESQL)
-- =========================================================================
-- Este archivo contiene las instrucciones SQL para crear las tablas necesarias
-- en Supabase para registrar los datos del usuario, el tiempo y su progreso.
--
-- Para ejecutarlo:
-- 1. Ve a tu consola de Supabase (https://supabase.com).
-- 2. Selecciona tu proyecto.
-- 3. Entra a "SQL Editor" en el menú lateral izquierdo.
-- 4. Haz clic en "New query" (Nueva consulta).
-- 5. Pega este código completo y haz clic en "Run" (Ejecutar).
-- =========================================================================

-- ==========================================
-- 1. CREACIÓN DE TABLAS
-- ==========================================

-- Tabla de Usuarios
CREATE TABLE IF NOT EXISTS usuarios (
    cedula VARCHAR(50) PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL, -- Almacena la contraseña (Base64)
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de Progreso General y Módulos
CREATE TABLE IF NOT EXISTS progreso (
    user_id VARCHAR(50) PRIMARY KEY REFERENCES usuarios(cedula) ON DELETE CASCADE,
    nombre VARCHAR(255) NOT NULL,
    correo VARCHAR(255) NOT NULL,
    fecha_inicio DATE NOT NULL DEFAULT CURRENT_DATE,
    fecha_fin DATE,
    progreso_general INTEGER DEFAULT 0,
    tiempo_total_segundos INTEGER DEFAULT 0,
    curso_completado BOOLEAN DEFAULT FALSE,
    certificado_generado BOOLEAN DEFAULT FALSE,
    
    -- Progreso detallado por módulos
    modulo1_completado BOOLEAN DEFAULT FALSE,
    modulo1_puntaje INTEGER DEFAULT 0,
    modulo1_fecha DATE,
    
    modulo2_completado BOOLEAN DEFAULT FALSE,
    modulo2_puntaje INTEGER DEFAULT 0,
    modulo2_fecha DATE,
    
    modulo3_completado BOOLEAN DEFAULT FALSE,
    modulo3_puntaje INTEGER DEFAULT 0,
    modulo3_fecha DATE,
    
    modulo4_completado BOOLEAN DEFAULT FALSE,
    modulo4_puntaje INTEGER DEFAULT 0,
    modulo4_fecha DATE,
    
    modulo5_completado BOOLEAN DEFAULT FALSE,
    modulo5_puntaje INTEGER DEFAULT 0,
    modulo5_fecha DATE,
    
    modulo6_completado BOOLEAN DEFAULT FALSE,
    modulo6_puntaje INTEGER DEFAULT 0,
    modulo6_fecha DATE,
    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de Notas (Apuntes tomados por el usuario)
CREATE TABLE IF NOT EXISTS notas (
    id VARCHAR(100) PRIMARY KEY,
    user_id VARCHAR(50) REFERENCES usuarios(cedula) ON DELETE CASCADE,
    modulo VARCHAR(50) NOT NULL,
    texto TEXT NOT NULL,
    fecha VARCHAR(100) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Trigger para actualizar "updated_at" automáticamente al modificar registros
CREATE OR REPLACE FUNCTION trigger_set_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE TRIGGER set_timestamp_usuarios
BEFORE UPDATE ON usuarios
FOR EACH ROW
EXECUTE FUNCTION trigger_set_timestamp();

CREATE OR REPLACE TRIGGER set_timestamp_progreso
BEFORE UPDATE ON progreso
FOR EACH ROW
EXECUTE FUNCTION trigger_set_timestamp();

CREATE OR REPLACE TRIGGER set_timestamp_notas
BEFORE UPDATE ON notas
FOR EACH ROW
EXECUTE FUNCTION trigger_set_timestamp();


-- ==========================================
-- 2. SEGURIDAD Y POLÍTICAS (RLS)
-- ==========================================
-- Por defecto, Supabase protege las tablas con Row Level Security (RLS).
-- Habilitamos RLS y creamos políticas de acceso. Dado que esta es una
-- aplicación frontend pura y consume las tablas usando la Anon Key,
-- definiremos políticas que permitan operaciones de lectura, inserción y
-- actualización sin requerir tokens JWT de Supabase Auth (es decir, usando el flujo personalizado).

ALTER TABLE usuarios ENABLE ROW LEVEL SECURITY;
ALTER TABLE progreso ENABLE ROW LEVEL SECURITY;
ALTER TABLE notas ENABLE ROW LEVEL SECURITY;

-- Políticas para la tabla 'usuarios'
CREATE POLICY "Acceso público de lectura a usuarios" ON usuarios FOR SELECT USING (true);
CREATE POLICY "Acceso público de inserción a usuarios" ON usuarios FOR INSERT WITH CHECK (true);
CREATE POLICY "Acceso público de actualización a usuarios" ON usuarios FOR UPDATE USING (true);

-- Políticas para la tabla 'progreso'
CREATE POLICY "Acceso público de lectura a progreso" ON progreso FOR SELECT USING (true);
CREATE POLICY "Acceso público de inserción a progreso" ON progreso FOR INSERT WITH CHECK (true);
CREATE POLICY "Acceso público de actualización a progreso" ON progreso FOR UPDATE USING (true);

-- Políticas para la tabla 'notas'
CREATE POLICY "Acceso público de lectura a notas" ON notas FOR SELECT USING (true);
CREATE POLICY "Acceso público de inserción a notas" ON notas FOR INSERT WITH CHECK (true);
CREATE POLICY "Acceso público de actualización a notas" ON notas FOR UPDATE USING (true);
CREATE POLICY "Acceso público de borrado a notas" ON notas FOR DELETE USING (true);

-- =========================================================================
-- ¡Listo! Una vez ejecutado este script en Supabase, las tablas estarán creadas
-- y configuradas correctamente.
-- =========================================================================
