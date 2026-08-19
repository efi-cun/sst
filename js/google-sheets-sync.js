/* =========================================================================
   Google Sheets Database Client & Sync Manager
   ========================================================================= */

const GoogleSheetsSync = (() => {
    function isConfigured() {
        return typeof GOOGLE_SHEETS_CONFIG !== 'undefined' && 
               GOOGLE_SHEETS_CONFIG.WEB_APP_URL && 
               GOOGLE_SHEETS_CONFIG.WEB_APP_URL.trim() !== '';
    }

    async function sendRequest(action, data) {
        if (!isConfigured()) return { success: false, reason: 'Not configured' };

        try {
            // Utilizar fetch enviando el body JSON como texto plano para evitar bloqueos CORS preflight de Apps Script
            const response = await fetch(GOOGLE_SHEETS_CONFIG.WEB_APP_URL, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'text/plain;charset=utf-8'
                },
                body: JSON.stringify({ action, data })
            });

            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            return await response.json();
        } catch (e) {
            console.error('Error al sincronizar con Google Sheets:', e);
            return { success: false, error: e.message };
        }
    }

    async function registerUser(cedula, nombre, email, password) {
        return await sendRequest('registerUser', {
            cedula,
            nombre,
            email,
            password: btoa(password)
        });
    }

    async function saveProgress(userId, progressData) {
        return await sendRequest('saveProgress', progressData);
    }

    async function updateProgressFields(userId, fields) {
        return await sendRequest('updateProgressFields', {
            userId,
            fields
        });
    }

    async function saveNote(userId, note) {
        return await sendRequest('saveNote', {
            userId,
            note
        });
    }

    async function deleteNote(noteId) {
        return await sendRequest('deleteNote', {
            noteId
        });
    }

    return {
        isConfigured,
        registerUser,
        saveProgress,
        updateProgressFields,
        saveNote,
        deleteNote
    };
})();
