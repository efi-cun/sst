/* ========================================
   Progress Manager - localStorage
   ======================================== */
const ProgressManager = (() => {
    const STORAGE_KEY = 'sst_cun_progress';

    function getAll() {
        try {
            const data = localStorage.getItem(STORAGE_KEY);
            return data ? JSON.parse(data) : {};
        } catch {
            return {};
        }
    }

    function save(data) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    }

    function getUserProgress(userId) {
        const all = getAll();
        return all[userId] || null;
    }

    function initUserProgress(userId, name, email) {
        const all = getAll();
        if (all[userId]) return all[userId];

        const progress = {
            userId,
            nombre: name,
            correo: email,
            fechaInicio: new Date().toISOString().split('T')[0],
            fechaFin: null,
            progresoGeneral: 0,
            modulos: {
                modulo1: { completado: false, puntaje: 0, fechaCompletado: null },
                modulo2: { completado: false, puntaje: 0, fechaCompletado: null },
                modulo3: { completado: false, puntaje: 0, fechaCompletado: null },
                modulo4: { completado: false, puntaje: 0, fechaCompletado: null },
                modulo5: { completado: false, puntaje: 0, fechaCompletado: null },
                modulo6: { completado: false, puntaje: 0, fechaCompletado: null }
            },
            certificadoGenerado: false
        };

        all[userId] = progress;
        save(all);
        return progress;
    }

    function completeModule(userId, moduleNum, score) {
        const all = getAll();
        if (!all[userId]) return null;

        const key = `modulo${moduleNum}`;
        all[userId].modulos[key] = {
            completado: true,
            puntaje: score,
            fechaCompletado: new Date().toISOString().split('T')[0]
        };

        const completed = Object.values(all[userId].modulos).filter(m => m.completado).length;
        all[userId].progresoGeneral = Math.round((completed / 6) * 100);

        if (completed === 6) {
            all[userId].fechaFin = new Date().toISOString().split('T')[0];
        }

        save(all);
        return all[userId];
    }

    function getModuleStatus(userId, moduleNum) {
        const progress = getUserProgress(userId);
        if (!progress) return 'locked';
        const key = `modulo${moduleNum}`;
        if (progress.modulos[key].completado) return 'completed';
        if (moduleNum === 1 || progress.modulos[`modulo${moduleNum - 1}`].completado) return 'available';
        return 'locked';
    }

    function isModuleUnlocked(userId, moduleNum) {
        if (moduleNum === 1) return true;
        const progress = getUserProgress(userId);
        if (!progress) return false;
        return progress.modulos[`modulo${moduleNum - 1}`].completado;
    }

    function isCourseComplete(userId) {
        const progress = getUserProgress(userId);
        if (!progress) return false;
        return progress.progresoGeneral === 100;
    }

    return {
        getAll,
        getUserProgress,
        initUserProgress,
        completeModule,
        getModuleStatus,
        isModuleUnlocked,
        isCourseComplete
    };
})();
