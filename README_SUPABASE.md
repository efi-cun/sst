# Guía de Integración con Supabase (Base de Datos SQL)

Esta guía te guiará paso a paso para configurar tu base de datos SQL en **Supabase** y conectar la aplicación web del **Curso de Reinducción SST - CUN** para que registre de forma permanente los datos de los usuarios, sus puntajes, el estado de finalización del curso y el tiempo de estudio acumulado.

---

## 📋 ¿Qué datos se registran en la Base de Datos?

La base de datos SQL en Postgres de Supabase utiliza tres tablas estructuradas:

1. **`usuarios`**: Registra la identificación única (`cedula`), `nombre`, `email` y `password` (codificada en Base64).
2. **`progreso`**:
   - `fecha_inicio` y `fecha_fin` del curso.
   - `progreso_general` (0% a 100%).
   - `tiempo_total_segundos` (acumula activamente los segundos reales que el usuario pasa en la aplicación).
   - `curso_completado` (booleano que indica si terminaron el curso al 100%).
   - Estado de completado, puntaje obtenido y fecha para cada uno de los 6 módulos.
3. **`notas`**: Respalda las notas o apuntes personales que los usuarios guardan durante el curso, vinculándolos a su cédula.

---

## 🚀 Paso 1: Crear tu proyecto en Supabase

1. Entra a [Supabase](https://supabase.com) e inicia sesión (puedes crear una cuenta gratuita con tu correo o perfil de GitHub).
2. Haz clic en **"New Project"** (Nuevo Proyecto).
3. Selecciona tu Organización y rellena los datos del proyecto:
   - **Name (Nombre)**: `curso-sst-cun` o el de tu preferencia.
   - **Database Password (Contraseña de Base de Datos)**: Genera una contraseña segura y **guárdala** (la necesitarás si accedes directamente a la base de datos por consola).
   - **Region**: Elige una cercana (por ejemplo, `South America (São Paulo)` o `East US`).
   - **Pricing Plan**: Selecciona el plan **Free** (Gratuito).
4. Haz clic en **"Create new project"** y espera un par de minutos a que el servidor termine de aprovisionarse.

---

## 🗄️ Paso 2: Crear las Tablas en SQL Editor

Para crear las tablas de forma automática, hemos creado el archivo `database_schema.sql` en el proyecto. 

Sigue estos pasos para ejecutarlo:
1. En el menú lateral izquierdo de Supabase, haz clic en el icono de **"SQL Editor"** (el icono de `SQL`).
2. Haz clic en el botón **"+ New query"** (Nueva consulta).
3. Abre el archivo `database_schema.sql` en tu editor, copia todo su contenido y pégalo en el recuadro del SQL Editor en Supabase.
4. Presiona el botón verde **"Run"** (Ejecutar) en la esquina inferior derecha.
5. Deberías ver un mensaje que dice `Success: Query returned 0 rows` o similar. Esto significa que las tablas (`usuarios`, `progreso` y `notas`), triggers y políticas de seguridad (RLS) se han creado correctamente.

---

## 🔑 Paso 3: Obtener tus Credenciales de Conexión

Una vez creadas las tablas, necesitas indicarle al código de la aplicación web dónde está tu base de datos:

1. En Supabase, ve a **"Project Settings"** (el icono de engranaje ⚙️ en el menú lateral inferior izquierdo).
2. Haz clic en **"API"** en el submenú de configuración.
3. En la sección **"Project API keys"**, copia el valor de:
   - **Project URL**: URL del proyecto (ej. `https://zydwygdkmqyxxxxxxx.supabase.co`).
   - **`anon` `public` key**: La clave pública anónima de tu base de datos.

---

## 📝 Paso 4: Configurar la Aplicación Web

Para habilitar la sincronización en la aplicación:
1. Abre el archivo `js/supabase-config.js` ubicado en la carpeta `js/`.
2. Pega las credenciales que copiaste en el paso anterior dentro de las comillas correspondientes:

   ```javascript
   const SUPABASE_CONFIG = {
       URL: 'TU_URL_DE_SUPABASE_AQUI', 
       ANON_KEY: 'TU_CLAVE_ANONIMA_DE_SUPABASE_AQUI'
   };
   ```

3. Guarda el archivo. ¡Eso es todo! La aplicación detectará automáticamente estas credenciales al iniciar, se conectará a Supabase y comenzará a guardar y sincronizar la información en la nube en tiempo real.

---

## 🛡️ Compatibilidad sin Internet / Desconectado (Fallback)

La aplicación está diseñada de forma inteligente para que **nunca deje de funcionar**:
- Si no configuras las credenciales de Supabase o no hay conexión de red, la aplicación continúa guardando la información en el navegador del usuario a través de `localStorage` de forma normal.
- Tan pronto configures las credenciales e inicies sesión con internet, los datos locales se sincronizarán y se respaldarán en la nube.
