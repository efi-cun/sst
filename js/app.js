/* ========================================
   App Controller — Main Application Logic
   ======================================== */
const App = (() => {
    const modules = { 1: Modulo1, 2: Modulo2, 3: Modulo3, 4: Modulo4, 5: Modulo5, 6: Modulo6 };
    let currentModule = null;
    let currentSection = 0;
    let timerInterval = null;

    // ============ INITIALIZATION ============
    function init() {
        // Load saved theme
        initTheme();

        // Animate loading percent dynamically (0% to 100%)
        const percentEl = document.getElementById('load-percent');
        if (percentEl) {
            let current = 0;
            const duration = 1400; // slightly shorter than 1500ms timeout
            const stepTime = 100;
            const steps = duration / stepTime;
            const increment = 100 / steps;

            const interval = setInterval(() => {
                current += increment + (Math.random() * 8 - 4); // add slight randomness
                if (current >= 100) {
                    current = 100;
                    clearInterval(interval);
                }
                percentEl.textContent = `${Math.round(current)}%`;
            }, stepTime);
        }

        setTimeout(() => {
            const loadingScreen = document.getElementById('loading-screen');
            if (loadingScreen) {
                loadingScreen.classList.add('fade-out');
                document.getElementById('app').classList.remove('hidden');
                setTimeout(() => loadingScreen.remove(), 500);
            }

            if (AuthManager.isLoggedIn()) {
                const user = AuthManager.getCurrentUser();
                if (user) {
                    ProgressManager.startTimeTracking(user.userId || user.cedula);
                }
                showDashboard();
            } else {
                showLanding();
            }
        }, 1500);

        setupEventListeners();
    }

    // ============ EVENT LISTENERS ============
    function setupEventListeners() {
        // Auth
        document.getElementById('btn-login').addEventListener('click', handleLogin);
        document.getElementById('btn-register').addEventListener('click', handleRegister);
        document.getElementById('show-register').addEventListener('click', e => { e.preventDefault(); toggleAuth('register'); });
        document.getElementById('show-login').addEventListener('click', e => { e.preventDefault(); toggleAuth('login'); });

        // Dashboard
        document.getElementById('btn-logout').addEventListener('click', handleLogout);
        document.getElementById('btn-links').addEventListener('click', () => toggleModal('modal-links', true));
        document.getElementById('close-links-modal').addEventListener('click', () => toggleModal('modal-links', false));
        document.querySelector('#modal-links .modal-overlay').addEventListener('click', () => toggleModal('modal-links', false));

        document.getElementById('close-info-modal').addEventListener('click', () => toggleModal('modal-info', false));
        document.querySelector('#modal-info .modal-overlay').addEventListener('click', () => toggleModal('modal-info', false));

        // Module navigation
        document.getElementById('btn-back-dashboard').addEventListener('click', showDashboard);
        document.getElementById('btn-prev-section').addEventListener('click', () => navigateSection(-1));
        document.getElementById('btn-next-section').addEventListener('click', () => navigateSection(1));

        // Quiz
        document.getElementById('btn-back-module').addEventListener('click', () => showModule(currentModule));
        document.getElementById('btn-next-question').addEventListener('click', handleNextQuestion);
        document.getElementById('btn-retry-quiz').addEventListener('click', () => startQuiz(currentModule));
        document.getElementById('btn-go-dashboard').addEventListener('click', showDashboard);

        // Certificate
        document.getElementById('btn-certificate').addEventListener('click', showCertificate);
        document.getElementById('btn-back-from-cert').addEventListener('click', showDashboard);
        document.getElementById('btn-download-cert').addEventListener('click', downloadCertificate);

        // Enter key on inputs
        document.getElementById('login-password').addEventListener('keydown', e => { if (e.key === 'Enter') handleLogin(); });
        document.getElementById('reg-password').addEventListener('keydown', e => { if (e.key === 'Enter') handleRegister(); });

        // Theme toggle
        document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
        document.getElementById('theme-toggle-float').addEventListener('click', toggleTheme);
    }

    // ============ VIEW MANAGEMENT ============
    function showView(viewId) {
        document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
        const view = document.getElementById(`view-${viewId}`);
        if (view) view.classList.add('active');
        window.scrollTo(0, 0);
    }

    function showLanding() {
        showView('landing');
    }

    function showDashboard() {
        const user = AuthManager.getCurrentUser();
        if (!user) return showLanding();

        showView('dashboard');
        clearInterval(timerInterval);

        document.getElementById('user-greeting').textContent = `Hola, ${user.nombre.split(' ')[0]}`;
        document.getElementById('date-start').textContent = `Inicio: ${user.progress?.fechaInicio || '—'}`;

        updateProgress();
        updateModuleCards();
        updateCertificateSection();

        // Load notes for the logged in user
        if (typeof NotesManager !== 'undefined') {
            NotesManager.loadNotes();
            NotesManager.renderNotes();
        }
    }

    // ============ AUTH HANDLERS ============
    async function handleLogin() {
        console.log('Ingresar clicked. Reading values...');
        const emailEl = document.getElementById('login-email');
        const passEl = document.getElementById('login-password');
        
        if (!emailEl || !passEl) {
            console.error('Missing login elements in DOM!');
            alert('Error interno: Faltan elementos en el formulario de inicio de sesión.');
            return;
        }

        const email = emailEl.value.trim();
        const password = passEl.value;
        
        console.log('Login values read:', { email, password: '***' });

        const btnLogin = document.getElementById('btn-login');
        const originalText = btnLogin.textContent;
        btnLogin.textContent = 'Ingresando...';
        btnLogin.disabled = true;

        try {
            console.log('Calling AuthManager.login...');
            const result = await AuthManager.login(email, password);
            console.log('AuthManager.login result:', result);
            
            if (result.success) {
                showDashboard();
            } else {
                console.warn('Login failed:', result.message);
                showError('login-error', result.message);
            }
        } catch (e) {
            console.error('Exception in handleLogin:', e);
            showError('login-error', 'Error al conectar con la base de datos: ' + e.message);
            alert('Excepción en Inicio de Sesión: ' + e.message);
        } finally {
            btnLogin.textContent = originalText;
            btnLogin.disabled = false;
        }
    }

    async function handleRegister() {
        console.log('Crear cuenta clicked. Reading values...');
        const nameEl = document.getElementById('reg-name');
        const idEl = document.getElementById('reg-id');
        const emailEl = document.getElementById('reg-email');
        const passEl = document.getElementById('reg-password');
        
        if (!nameEl || !idEl || !emailEl || !passEl) {
            console.error('Missing register elements in DOM!');
            alert('Error interno: Faltan elementos en el formulario de registro.');
            return;
        }

        const name = nameEl.value.trim();
        const cedula = idEl.value.trim();
        const email = emailEl.value.trim();
        const password = passEl.value;
        
        console.log('Register values read:', { name, cedula, email, password: '***' });

        const btnRegister = document.getElementById('btn-register');
        const originalText = btnRegister.textContent;
        btnRegister.textContent = 'Registrando...';
        btnRegister.disabled = true;

        try {
            console.log('Calling AuthManager.register...');
            const result = await AuthManager.register(name, cedula, email, password);
            console.log('AuthManager.register result:', result);
            
            if (result.success) {
                console.log('Registration success. Auto-logging in...');
                const loginResult = await AuthManager.login(email, password);
                console.log('Auto-login result:', loginResult);
                if (loginResult.success) {
                    showDashboard();
                } else {
                    showError('register-error', loginResult.message);
                }
            } else {
                console.warn('Registration failed:', result.message);
                showError('register-error', result.message);
            }
        } catch (e) {
            console.error('Exception in handleRegister:', e);
            showError('register-error', 'Error al registrar el usuario: ' + e.message);
            alert('Excepción en Registro: ' + e.message);
        } finally {
            btnRegister.textContent = originalText;
            btnRegister.disabled = false;
        }
    }

    function handleLogout() {
        AuthManager.logout();
        clearInterval(timerInterval);
        showLanding();
        document.getElementById('login-email').value = '';
        document.getElementById('login-password').value = '';
        
        // Clear notes view on logout
        if (typeof NotesManager !== 'undefined') {
            NotesManager.loadNotes();
            NotesManager.renderNotes();
            NotesManager.closeDrawer();
        }
    }

    function toggleAuth(type) {
        document.getElementById('login-form').classList.toggle('active', type === 'login');
        document.getElementById('register-form').classList.toggle('active', type === 'register');
        hideError('login-error');
        hideError('register-error');
    }

    function showError(elementId, message) {
        const el = document.getElementById(elementId);
        el.textContent = message;
        el.classList.remove('hidden');
    }

    function hideError(elementId) {
        document.getElementById(elementId).classList.add('hidden');
    }

    // ============ PROGRESS ============
    function updateProgress() {
        const user = AuthManager.getCurrentUser();
        if (!user || !user.progress) return;

        const p = user.progress;
        document.getElementById('progress-percent').textContent = `${p.progresoGeneral}%`;
        document.getElementById('progress-fill').style.width = `${p.progresoGeneral}%`;

        const completed = Object.values(p.modulos).filter(m => m.completado).length;
        document.getElementById('modules-completed').textContent = `${completed} de 6 módulos completados`;

        // Game Theme Spaceship and Runway Update
        const spaceship = document.getElementById('spaceship-player');
        const runway = document.getElementById('space-runway');
        if (spaceship) {
            // Position the spaceship
            const position = p.progresoGeneral;
            spaceship.style.left = `${position}%`;
            
            // Reset class names to base speed and runway speed
            spaceship.className = 'spaceship-player';
            if (runway) runway.className = 'space-runway';

            // Add new speed class based on completed modules count (0 to 6)
            spaceship.classList.add(`speed-${completed}`);
            if (runway) runway.classList.add(`runway-speed-${completed}`);
        }
    }

    function updateModuleCards() {
        const user = AuthManager.getCurrentUser();
        if (!user) return;

        for (let i = 1; i <= 6; i++) {
            const card = document.getElementById(`card-modulo${i}`);
            const status = document.getElementById(`status-${i}`);
            const mprogress = document.getElementById(`mprogress-${i}`);
            const moduleStatus = ProgressManager.getModuleStatus(user.cedula || user.userId, i);

            card.classList.remove('locked', 'in-progress', 'completed');

            if (moduleStatus === 'completed') {
                card.classList.add('completed');
                status.textContent = '✅';
                mprogress.style.width = '100%';
            } else if (moduleStatus === 'available') {
                card.classList.add('in-progress');
                status.textContent = '🟡';
                mprogress.style.width = '0%';
            } else {
                card.classList.add('locked');
                status.textContent = '🔒';
                mprogress.style.width = '0%';
            }
        }

        // Click handlers
        document.querySelectorAll('.module-card').forEach(card => {
            card.onclick = () => {
                const modNum = parseInt(card.dataset.module);
                const userId = user.cedula || user.userId;
                if (ProgressManager.isModuleUnlocked(userId, modNum)) {
                    showModule(modNum);
                } else {
                    card.style.animation = 'shake 0.5s ease';
                    setTimeout(() => card.style.animation = '', 500);
                }
            };
        });
    }

    function updateCertificateSection() {
        const user = AuthManager.getCurrentUser();
        const section = document.getElementById('certificate-section');
        if (ProgressManager.isCourseComplete(user.cedula || user.userId)) {
            section.classList.remove('hidden');
        } else {
            section.classList.add('hidden');
        }
    }

    // ============ MODULE VIEW ============
    function showModule(moduleNum) {
        const mod = modules[moduleNum];
        if (!mod) return;

        currentModule = moduleNum;
        currentSection = 0;

        showView('module');

        document.getElementById('mod-header-num').textContent = `Módulo ${String(moduleNum).padStart(2, '0')}`;
        document.getElementById('mod-header-title').textContent = mod.titulo;

        startTimer(mod.tiempo);
        renderSection();
    }

    function renderSection() {
        const mod = modules[currentModule];
        const section = mod.secciones[currentSection];
        const content = document.getElementById('module-content');

        content.innerHTML = section.contenido();

        // Update dots
        const dots = document.getElementById('section-dots');
        dots.innerHTML = '';
        mod.secciones.forEach((_, i) => {
            const dot = document.createElement('span');
            dot.className = `section-dot ${i === currentSection ? 'active' : ''} ${i < currentSection ? 'completed' : ''}`;
            dot.onclick = () => { currentSection = i; renderSection(); };
            dots.appendChild(dot);
        });

        // Update nav buttons
        document.getElementById('btn-prev-section').disabled = currentSection === 0;
        const nextBtn = document.getElementById('btn-next-section');
        if (currentSection === mod.secciones.length - 1) {
            nextBtn.textContent = 'Finalizar ✓';
        } else {
            nextBtn.textContent = 'Siguiente →';
        }

        // Init drag & drop if needed
        if (currentModule === 4 && section.id === 'clasificar') {
            setTimeout(() => Modulo4.initDragDrop(), 100);
        }

        // Init module-specific scripts if they exist
        if (mod && typeof mod.initSection === 'function') {
            setTimeout(() => mod.initSection(section.id), 100);
        }

        // Init tabs
        initTabs();

        // Init scroll reveal
        initRevealAnimations();

        // Init mind map / concept map popups
        initMapPopups();
    }

    function navigateSection(direction) {
        const mod = modules[currentModule];
        const newSection = currentSection + direction;

        if (newSection < 0) return;
        if (newSection >= mod.secciones.length) {
            showDashboard();
            return;
        }

        currentSection = newSection;
        renderSection();
        window.scrollTo(0, 0);
    }

    // ============ TIMER ============
    function startTimer(minutes) {
        clearInterval(timerInterval);
        let remaining = minutes * 60;
        const timerEl = document.getElementById('mod-timer');

        timerInterval = setInterval(() => {
            const m = Math.floor(remaining / 60);
            const s = remaining % 60;
            timerEl.textContent = `⏱ ${m}:${String(s).padStart(2, '0')}`;

            if (remaining <= 0) {
                clearInterval(timerInterval);
                timerEl.textContent = '⏱ Tiempo estimado cumplido';
            }
            remaining--;
        }, 1000);
    }

    // ============ QUIZ ============
    async function startQuiz(moduleNum) {
        currentModule = moduleNum;
        const questions = await ActivitiesEngine.startActivities(moduleNum);

        if (!questions) {
            alert('Error al cargar las preguntas. Intenta de nuevo.');
            return;
        }

        ActivitiesEngine.setOnCompleteCallback((isCorrect, explanation) => {
            const feedback = document.getElementById('quiz-feedback');
            feedback.classList.remove('hidden', 'correct', 'incorrect');
            feedback.classList.add(isCorrect ? 'correct' : 'incorrect');
            document.getElementById('feedback-icon').textContent = isCorrect ? '✅' : '❌';
            document.getElementById('feedback-text').textContent = explanation || (isCorrect ? '¡Correcto!' : 'Incorrecto');

            const isLast = !ActivitiesEngine.nextItem();
            const nextBtn = document.getElementById('btn-next-question');
            nextBtn.textContent = isLast ? 'Ver Resultados' : 'Siguiente pregunta';
        });

        showView('quiz');
        document.getElementById('quiz-title').textContent = 'Evaluación';
        document.getElementById('quiz-subtitle').textContent = `Módulo ${String(moduleNum).padStart(2, '0')} — ${modules[moduleNum].titulo}`;

        renderQuestion();
    }

    function renderQuestion() {
        const question = ActivitiesEngine.getCurrentItem();
        if (!question) return showQuizResult();

        const progress = ActivitiesEngine.getProgress();
        document.getElementById('quiz-counter').textContent = `${progress.current}/${progress.total}`;
        document.getElementById('quiz-progress-fill').style.width = `${progress.percent}%`;

        const quizQuestion = document.querySelector('.quiz-question');
        quizQuestion.innerHTML = ActivitiesEngine.renderItem(question);

        document.getElementById('quiz-feedback').classList.add('hidden');
    }

    function handleNextQuestion() {
        const question = ActivitiesEngine.getCurrentItem();
        if (question) {
            renderQuestion();
        } else {
            showQuizResult();
        }
    }

    async function showQuizResult() {
        const results = ActivitiesEngine.getResults();
        showView('quiz-result');

        const icon = document.getElementById('result-icon');
        const title = document.getElementById('result-title');
        const message = document.getElementById('result-message');
        const scoreValue = document.getElementById('score-value');
        const scoreCircle = document.querySelector('.score-circle');

        scoreValue.textContent = results.percent;
        document.getElementById('correct-count').textContent = results.score;
        document.getElementById('incorrect-count').textContent = results.total - results.score;

        if (results.passed) {
            icon.textContent = '🎉';
            title.textContent = '¡Aprobado!';
            message.textContent = 'Excelente trabajo. Has superado la evaluación de este módulo.';
            scoreCircle.classList.remove('fail');
        } else {
            icon.textContent = '😔';
            title.textContent = 'No aprobado';
            message.textContent = `Necesitas un ${ActivitiesEngine.getPassScore()}% para aprobar. ¡Puedes intentarlo de nuevo!`;
            scoreCircle.classList.add('fail');
        }

        const dashBtn = document.getElementById('btn-go-dashboard');
        if (results.passed) {
            const user = AuthManager.getCurrentUser();
            await ProgressManager.completeModule(user.cedula || user.userId, currentModule, results.percent);
            dashBtn.classList.remove('hidden');

            if (results.percent === 100) {
                launchConfetti();
            }
        } else {
            dashBtn.classList.add('hidden');
        }
    }

    // ============ CERTIFICATE ============
    function showCertificate() {
        const user = AuthManager.getCurrentUser();
        if (!user) return;

        const progress = ProgressManager.getUserProgress(user.cedula || user.userId);
        const certData = CertificateGenerator.generateCertificate(user, progress);

        document.getElementById('cert-name').textContent = certData.name;
        document.getElementById('cert-id').textContent = certData.cedula;
        document.getElementById('cert-date').textContent = certData.date;
        document.getElementById('cert-code').textContent = certData.code;

        showView('certificate');
        launchConfetti();
    }

    function downloadCertificate() {
        const user = AuthManager.getCurrentUser();
        if (!user) return;

        const progress = ProgressManager.getUserProgress(user.cedula || user.userId);
        const certData = CertificateGenerator.generateCertificate(user, progress);
        CertificateGenerator.downloadPDF(certData);
    }

    // ============ MODAL ============
    function toggleModal(id, show) {
        const modal = document.getElementById(id);
        if (show) modal.classList.remove('hidden');
        else modal.classList.add('hidden');
    }

    // ============ TABS ============
    function initTabs() {
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const tabId = btn.dataset.tab;
                const container = btn.closest('.tabs-container');

                container.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                container.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
                const target = container.querySelector(`#tab-${tabId}`);
                if (target) target.classList.add('active');
            });
        });
    }

    // ============ SCROLL REVEAL ============
    function initRevealAnimations() {
        const reveals = document.querySelectorAll('.reveal');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        reveals.forEach(el => observer.observe(el));
    }

    // ============ CONFETTI ============
    function launchConfetti() {
        const canvas = document.getElementById('confetti-canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles = [];
        const colors = ['#1B3A5C', '#2E86AB', '#F18F01', '#2ECC71', '#E74C3C', '#8E44AD'];

        for (let i = 0; i < 150; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height - canvas.height,
                w: Math.random() * 10 + 5,
                h: Math.random() * 6 + 3,
                color: colors[Math.floor(Math.random() * colors.length)],
                vy: Math.random() * 3 + 2,
                vx: Math.random() * 2 - 1,
                rotation: Math.random() * 360,
                rotSpeed: Math.random() * 10 - 5
            });
        }

        let frame = 0;
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(p => {
                p.y += p.vy;
                p.x += p.vx;
                p.rotation += p.rotSpeed;

                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate(p.rotation * Math.PI / 180);
                ctx.fillStyle = p.color;
                ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
                ctx.restore();
            });

            frame++;
            if (frame < 180) {
                requestAnimationFrame(animate);
            } else {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            }
        }

        animate();
    }

    // ============ THEME MANAGEMENT ============
    function initTheme() {
        const saved = localStorage.getItem('sst_cun_theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const theme = saved || (prefersDark ? 'dark' : 'light');
        applyTheme(theme);
    }

    function toggleTheme() {
        const current = document.documentElement.getAttribute('data-theme') || 'light';
        const next = current === 'dark' ? 'light' : 'dark';
        applyTheme(next);
        localStorage.setItem('sst_cun_theme', next);
    }

    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        const icon = theme === 'dark' ? '🌙' : '☀️';
        const knob = document.getElementById('theme-knob');
        const floatIcon = document.getElementById('theme-icon-float');
        if (knob) knob.textContent = icon;
        if (floatIcon) floatIcon.textContent = icon;
    }

    // ============ MAP POPUPS ============
    function initMapPopups() {
        // Set up event delegation on document.body for all nodes with data-info
        if (!document.body.dataset.mapPopupListenerSet) {
            document.body.addEventListener('click', e => {
                const target = e.target.closest('.mm-node[data-info], .cm-box[data-info]');
                if (target) {
                    // Prevent double popups if element already has inline onclick
                    if (target.hasAttribute('onclick')) return;

                    const icon = target.getAttribute('data-icon') || '💡';
                    const title = target.getAttribute('data-title') || '';
                    const info = target.getAttribute('data-info') || '';

                    showInfoModal(title, info, icon);
                }
            });
            document.body.dataset.mapPopupListenerSet = 'true';
        }
    }

    // ============ VIDEO POPUP ============
    function openVideoPopup(title, videoSrc) {
        // Remove existing if any
        const existing = document.getElementById('video-popup-overlay');
        if (existing) existing.remove();

        const isYouTube = videoSrc.includes('youtube.com') || videoSrc.includes('youtu.be');
        let embedUrl = videoSrc;
        
        if (isYouTube) {
            const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
            const match = videoSrc.match(regExp);
            if (match && match[2].length === 11) {
                embedUrl = `https://www.youtube-nocookie.com/embed/${match[2]}`;
            }
        }

        const popup = document.createElement('div');
        popup.className = 'modal active';
        popup.id = 'video-popup-overlay';
        popup.innerHTML = `
            <div class="modal-overlay" onclick="this.parentElement.remove()"></div>
            <div class="modal-content" style="max-width:800px; padding:1rem;">
                <div class="modal-header" style="margin-bottom:1rem">
                    <h2 style="font-size:1.2rem">${title}</h2>
                    <button class="modal-close" onclick="this.closest('.modal').remove()">✕</button>
                </div>
                <div class="video-container">
                    ${isYouTube ? `
                        <iframe src="${embedUrl}" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe>
                    ` : `
                        <video controls autoplay style="position:absolute;top:0;left:0;width:100%;height:100%">
                            <source src="${videoSrc}" type="video/mp4">
                        </video>
                    `}
                </div>
            </div>
        `;
        document.body.appendChild(popup);
    }

    function showInfoModal(title, text, icon = 'ℹ️', url = null, btnText = '📂 Abrir Documento') {
        document.getElementById('modal-info-title').textContent = `${icon} ${title}`;
        
        // Remove existing pdf button if any
        const existingBtn = document.getElementById('modal-info-pdf-btn');
        if (existingBtn) existingBtn.remove();
        
        const textEl = document.getElementById('modal-info-text');
        textEl.innerHTML = text;
        
        if (url) {
            const btn = document.createElement('button');
            btn.id = 'modal-info-pdf-btn';
            btn.className = 'btn btn-primary';
            btn.style.marginTop = '1rem';
            btn.style.display = 'block';
            btn.innerHTML = btnText;
            btn.onclick = () => window.open(url, '_blank');
            textEl.appendChild(btn);
        }

        // Dynamically change mascot in the Info Modal based on current module
        const modalImg = document.querySelector('#modal-info img');
        if (modalImg) {
            if (currentModule === 2) {
                modalImg.src = 'assets/img/mascot_firefighter.jpg';
            } else if (currentModule === 3) {
                modalImg.src = 'assets/img/mascot_investigator.jpg';
            } else if (currentModule === 4) {
                modalImg.src = 'assets/img/mascot_warning.jpg';
            } else if (currentModule === 5) {
                modalImg.src = 'assets/img/mascot_stretching.jpg';
            } else if (currentModule === 6) {
                modalImg.src = 'assets/img/mascot_committee.jpg';
            } else {
                modalImg.src = 'assets/img/mascot_original.png';
            }
        }
        
        toggleModal('modal-info', true);
    }

    // ============ PUBLIC API ============
    return {
        init,
        showDashboard,
        startQuiz,
        showModule,
        openVideoPopup,
        showInfoModal,
        getCurrentModuleId: () => currentModule,
        launchConfetti
    };
})();

// ============ START ============
document.addEventListener('DOMContentLoaded', App.init);
