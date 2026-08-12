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

    function register(name, cedula, email, password) {
        if (!name || !cedula || !email || !password) {
            return { success: false, message: 'Todos los campos son obligatorios' };
        }

        if (!validateEmail(email)) {
            return { success: false, message: 'Debes usar un correo corporativo (@cun.edu.co)' };
        }

        if (password.length < 4) {
            return { success: false, message: 'La contraseña debe tener al menos 4 caracteres' };
        }

        const users = getUsers();
        if (users.find(u => u.email === email.toLowerCase())) {
            return { success: false, message: 'Ya existe una cuenta con este correo' };
        }

        if (users.find(u => u.cedula === cedula)) {
            return { success: false, message: 'Ya existe una cuenta con esta cédula' };
        }

        const user = {
            id: cedula,
            nombre: name,
            cedula,
            email: email.toLowerCase(),
            password: btoa(password),
            createdAt: new Date().toISOString()
        };

        users.push(user);
        saveUsers(users);

        ProgressManager.initUserProgress(cedula, name, email.toLowerCase());

        return { success: true, user };
    }

    function login(email, password) {
        if (!email || !password) {
            return { success: false, message: 'Correo y contraseña son obligatorios' };
        }

        const users = getUsers();
        const user = users.find(u => u.email === email.toLowerCase() && u.password === btoa(password));

        if (!user) {
            return { success: false, message: 'Correo o contraseña incorrectos' };
        }

        const session = {
            userId: user.cedula,
            nombre: user.nombre,
            email: user.email,
            loginAt: new Date().toISOString()
        };

        sessionStorage.setItem(SESSION_KEY, JSON.stringify(session));

        ProgressManager.initUserProgress(user.cedula, user.nombre, user.email);

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
        sessionStorage.removeItem(SESSION_KEY);
    }

    return {
        register,
        login,
        getSession,
        isLoggedIn,
        getCurrentUser,
        logout,
        validateEmail
    };
})();
