/* ========================================
   Notes Manager — Course-wide Note Taking
   ======================================== */
const NotesManager = (() => {
    let notes = [];
    let editingNoteId = null;

    // Module names mapping
    const moduleNames = {
        'general': 'General / Todo el Curso',
        '1': 'Módulo 1: Fundamentos de SST',
        '2': 'Módulo 2: Planes de Emergencia',
        '3': 'Módulo 3: Accidente, Incidente y Enf.',
        '4': 'Módulo 4: Actos y Condiciones Inseg.',
        '5': 'Módulo 5: Peligros, Autocuidado y Equipos',
        '6': 'Módulo 6: Comités de SST'
    };

    function init() {
        setupEventListeners();
        
        // Initial load if user is already logged in
        if (AuthManager.isLoggedIn()) {
            loadNotes();
            renderNotes();
        }
    }

    function setupEventListeners() {
        const toggleBtn = document.getElementById('notes-toggle-float');
        const closeBtn = document.getElementById('notes-drawer-close');
        const overlay = document.getElementById('notes-drawer-overlay');
        const saveBtn = document.getElementById('btn-save-note');
        
        if (toggleBtn) toggleBtn.addEventListener('click', toggleDrawer);
        if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
        if (overlay) overlay.addEventListener('click', closeDrawer);
        if (saveBtn) saveBtn.addEventListener('click', handleSaveNote);
    }

    function getStorageKey() {
        const user = AuthManager.getCurrentUser();
        if (!user) return null;
        const userId = user.userId || user.cedula || 'guest';
        return `sst_cun_notes_${userId}`;
    }

    function loadNotes() {
        const key = getStorageKey();
        if (!key) {
            notes = [];
            return;
        }
        try {
            const data = localStorage.getItem(key);
            notes = data ? JSON.parse(data) : [];
        } catch (e) {
            console.error('Error loading notes:', e);
            notes = [];
        }
    }

    function saveNotesToStorage() {
        const key = getStorageKey();
        if (!key) return;
        try {
            localStorage.setItem(key, JSON.stringify(notes));
        } catch (e) {
            console.error('Error saving notes to localStorage:', e);
        }
    }

    function toggleDrawer() {
        const user = AuthManager.getCurrentUser();
        if (!user) {
            alert('Por favor, inicia sesión para tomar y guardar notas en tu cuenta.');
            return;
        }

        const drawer = document.getElementById('notes-drawer');
        const overlay = document.getElementById('notes-drawer-overlay');
        
        if (drawer.classList.contains('open')) {
            closeDrawer();
        } else {
            // Auto-select current module if active in the course
            const currentModuleId = (typeof App !== 'undefined' && App.getCurrentModuleId) ? App.getCurrentModuleId() : null;
            const selectEl = document.getElementById('note-module-select');
            if (currentModuleId && selectEl) {
                selectEl.value = String(currentModuleId);
            } else if (selectEl) {
                selectEl.value = 'general';
            }

            // Reset editing state and form
            editingNoteId = null;
            document.getElementById('note-text').value = '';
            document.getElementById('btn-save-note').textContent = 'Guardar Nota';

            drawer.classList.add('open');
            overlay.classList.add('open');
            
            // Reload and render to ensure sync
            loadNotes();
            renderNotes();
        }
    }

    function closeDrawer() {
        const drawer = document.getElementById('notes-drawer');
        const overlay = document.getElementById('notes-drawer-overlay');
        if (drawer) drawer.classList.remove('open');
        if (overlay) overlay.classList.remove('open');
    }

    function handleSaveNote() {
        const user = AuthManager.getCurrentUser();
        if (!user) return;

        const selectEl = document.getElementById('note-module-select');
        const textEl = document.getElementById('note-text');
        
        const moduleVal = selectEl.value;
        const noteText = textEl.value.trim();

        if (!noteText) {
            textEl.focus();
            return;
        }

        if (editingNoteId) {
            // Update existing
            const noteIndex = notes.findIndex(n => n.id === editingNoteId);
            if (noteIndex !== -1) {
                notes[noteIndex].modulo = moduleVal;
                notes[noteIndex].texto = noteText;
                notes[noteIndex].fecha = new Date().toLocaleString('es-CO');
            }
            editingNoteId = null;
            document.getElementById('btn-save-note').textContent = 'Guardar Nota';
        } else {
            // Add new
            const newNote = {
                id: 'note_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
                modulo: moduleVal,
                texto: noteText,
                fecha: new Date().toLocaleString('es-CO')
            };
            notes.unshift(newNote); // Put newest notes at the top
        }

        saveNotesToStorage();
        textEl.value = '';
        renderNotes();
    }

    function deleteNote(id) {
        if (confirm('¿Estás seguro de que deseas eliminar esta nota?')) {
            notes = notes.filter(n => n.id !== id);
            saveNotesToStorage();
            renderNotes();
            if (editingNoteId === id) {
                editingNoteId = null;
                document.getElementById('note-text').value = '';
                document.getElementById('btn-save-note').textContent = 'Guardar Nota';
            }
        }
    }

    function editNote(id) {
        const note = notes.find(n => n.id === id);
        if (!note) return;

        document.getElementById('note-module-select').value = note.modulo;
        document.getElementById('note-text').value = note.texto;
        document.getElementById('note-text').focus();
        
        editingNoteId = id;
        document.getElementById('btn-save-note').textContent = 'Actualizar Nota';
    }

    function renderNotes() {
        const listEl = document.getElementById('notes-list');
        if (!listEl) return;

        if (notes.length === 0) {
            listEl.innerHTML = `<p style="text-align: center; color: var(--text-light); font-size: 0.85rem; margin-top: 1rem;">No tienes notas guardadas.</p>`;
            return;
        }

        listEl.innerHTML = notes.map(note => `
            <div class="note-item" id="${note.id}">
                <div class="note-item-header">
                    <span class="note-item-module">${moduleNames[note.modulo] || 'General'}</span>
                    <span class="note-item-date">${note.fecha.split(',')[0]}</span>
                    <div class="note-item-actions">
                        <button class="note-action-btn" onclick="NotesManager.editNote('${note.id}')" title="Editar nota">✏️</button>
                        <button class="note-action-btn" onclick="NotesManager.deleteNote('${note.id}')" title="Eliminar nota">🗑️</button>
                    </div>
                </div>
                <div class="note-item-text">${escapeHTML(note.texto)}</div>
            </div>
        `).join('');
    }

    function escapeHTML(str) {
        return str
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    return {
        init,
        loadNotes,
        renderNotes,
        editNote,
        deleteNote,
        toggleDrawer,
        closeDrawer
    };
})();

// Start notes manager
document.addEventListener('DOMContentLoaded', NotesManager.init);
