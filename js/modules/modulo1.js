/* ========================================
   Módulo 1: Fundamentos de SST, Política y Gestión Ambiental
   ======================================== */
const Modulo1 = {
    id: 1,
    titulo: 'Fundamentos de SST',
    subtitulo: 'Política y Gestión Ambiental',
    tiempo: 15,
    secciones: [
        {
            id: 'bienvenida',
            titulo: 'Introducción',
            contenido: () => `
                <div class="section-title">🎬 Bienvenida al Curso de Reinducción SST</div>
                <p class="section-subtitle">Conoce lo que aprenderás en este programa de formación</p>

                <div class="video-container">
                    <iframe src="https://www.youtube-nocookie.com/embed/qJFB96vTPwk" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe>
                </div>
                <p class="video-caption">📹 Introducción al curso de Reinducción SST</p>

                <div class="concept-card">
                    <h4>📋 ¿Qué aprenderás en este curso?</h4>
                    <p>Este programa de reinducción está diseñado para <strong>refrescar y fortalecer</strong> tu conocimiento en Seguridad y Salud en el Trabajo, cubriendo los siguientes temas:</p>
                </div>

                <div class="icon-stats">
                    <div class="icon-stat" style="animation-delay:0.1s">
                        <div class="icon-stat-icon">🛡️</div>
                        <div class="icon-stat-value">Módulo 1</div>
                        <div class="icon-stat-label">Fundamentos de SST</div>
                    </div>
                    <div class="icon-stat" style="animation-delay:0.15s">
                        <div class="icon-stat-icon">🚨</div>
                        <div class="icon-stat-value">Módulo 2</div>
                        <div class="icon-stat-label">Planes de Emergencia</div>
                    </div>
                    <div class="icon-stat" style="animation-delay:0.2s">
                        <div class="icon-stat-icon">⚡</div>
                        <div class="icon-stat-value">Módulo 3</div>
                        <div class="icon-stat-label">Accidente e Incidente</div>
                    </div>
                    <div class="icon-stat" style="animation-delay:0.25s">
                        <div class="icon-stat-icon">⚠️</div>
                        <div class="icon-stat-value">Módulo 4</div>
                        <div class="icon-stat-label">Actos y Condiciones</div>
                    </div>
                    <div class="icon-stat" style="animation-delay:0.3s">
                        <div class="icon-stat-icon">🔬</div>
                        <div class="icon-stat-value">Módulo 5</div>
                        <div class="icon-stat-label">Peligros y Autocuidado</div>
                    </div>
                    <div class="icon-stat" style="animation-delay:0.35s">
                        <div class="icon-stat-icon">👥</div>
                        <div class="icon-stat-value">Módulo 6</div>
                        <div class="icon-stat-label">Comités de SST</div>
                    </div>
                </div>

                <div class="info-box success">
                    <span class="info-box-icon">🎯</span>
                    <div class="info-box-content">
                        <strong>Objetivo:</strong> Al finalizar el curso estarás en capacidad de identificar peligros, prevenir accidentes y contribuir activamente a una cultura de prevención en la CUN.
                    </div>
                </div>
            `
        },
        {
            id: 'intro',
            titulo: '¿Qué es la SST?',
            contenido: () => `
                <div class="section-title">🛡️ ¿Qué es la SST?</div>
                <p class="section-subtitle">Comprender el Sistema de Gestión de Seguridad y Salud en el Trabajo</p>

                <div class="concept-card">
                    <h4>📋 Definición</h4>
                    <p>SST significa <strong>Seguridad y Salud en el Trabajo</strong>, un sistema diseñado para prevenir accidentes de trabajo (AT) y enfermedades laborales (EL), generando condiciones y ambientes seguros y saludables para todos los colaboradores.</p>
                </div>

                <div class="concept-card accent">
                    <h4>🎯 Objetivo del SG-SST</h4>
                    <p>Este sistema integral busca <strong>identificar, evaluar y controlar</strong> los riesgos laborales, promoviendo una cultura de prevención que protege tu integridad física y mental en cada momento de tu jornada laboral.</p>
                </div>

                <div class="info-box success" style="align-items: center;">
                    <img src="assets/img/mascot_original.png" alt="Mascota" style="width: 60px; height: 60px; object-fit: cover; border-radius: 50%; margin-right: 1rem; border: 2px solid #2ECC71;">
                    <div class="info-box-content">
                        <strong>Consejo CUNista:</strong> Nuestra ARL es <strong>AURORA Seguros de Vida</strong>. Es fundamental conocer a qué Administradora de Riesgos Laborales perteneces.
                    </div>
                </div>

                <div class="video-container">
                    <iframe src="https://www.youtube-nocookie.com/embed/vRXen2f_xPs" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe>
                </div>
                <p class="video-caption">📹 Fundamentos de SST — Política y Sistema de Gestión</p>
            `
        },
        {
            id: 'sistema-gestion',
            titulo: 'Sistema de Gestión SST',
            contenido: () => `
                <div class="section-title">🧠 Sistema de Gestión SST</div>
                <p class="section-subtitle">Mapa Mental y Componentes del Sistema</p>

                <div class="mind-map-container">
                    <div class="mind-map-title">🧠 Mapa Mental — Sistema de Gestión SST</div>
                    <svg viewBox="0 0 660 340" class="mind-map-svg" xmlns="http://www.w3.org/2000/svg">
                        <!-- Lines from center -->
                        <line class="mm-line" x1="330" y1="170" x2="110" y2="60" stroke="#2E86AB" stroke-width="2"/>
                        <line class="mm-line" x1="330" y1="170" x2="330" y2="45" stroke="#2E86AB" stroke-width="2"/>
                        <line class="mm-line" x1="330" y1="170" x2="550" y2="60" stroke="#2E86AB" stroke-width="2"/>
                        <line class="mm-line" x1="330" y1="170" x2="110" y2="280" stroke="#2E86AB" stroke-width="2"/>
                        <line class="mm-line" x1="330" y1="170" x2="330" y2="305" stroke="#2E86AB" stroke-width="2"/>
                        <line class="mm-line" x1="330" y1="170" x2="550" y2="280" stroke="#2E86AB" stroke-width="2"/>
                        <!-- Center node -->
                        <g class="mm-node">
                            <rect x="265" y="140" width="130" height="60" rx="30" fill="#1B3A5C" stroke="#F18F01" stroke-width="2"/>
                            <text x="330" y="176" text-anchor="middle" fill="white" font-size="13" font-weight="bold" font-family="Poppins">SG-SST</text>
                        </g>
                        <!-- Branch nodes -->
                        <g class="mm-node" style="cursor:pointer" onclick="App.showInfoModal(this.getAttribute('data-title'), this.getAttribute('data-info'), this.getAttribute('data-icon'))" data-icon="🛡️" data-title="Prevenir Accidentes de Trabajo" data-info="El SG-SST tiene como objetivo principal prevenir los accidentes de trabajo (AT), que son sucesos repentinos que pueden causar lesión orgánica, invalidez o muerte. La prevención incluye identificación de peligros, evaluación de riesgos e implementación de controles.">
                            <rect x="40" y="35" width="140" height="50" rx="10" fill="#2E86AB" stroke="#1B6E94" stroke-width="2"/>
                            <text x="110" y="65" text-anchor="middle" fill="white" font-size="11" font-weight="600" font-family="Inter">🛡️ Prevenir AT</text>
                        </g>
                        <g class="mm-node" style="cursor:pointer" onclick="App.showInfoModal(this.getAttribute('data-title'), this.getAttribute('data-info'), this.getAttribute('data-icon'))" data-icon="🏥" data-title="Prevenir Enfermedades Laborales" data-info="Las enfermedades laborales (EL) se contraen por exposición prolongada a factores de riesgo en el trabajo. El SG-SST busca controlar estos factores para proteger la salud a largo plazo de todos los colaboradores.">
                            <rect x="260" y="20" width="140" height="50" rx="10" fill="#2ECC71" stroke="#27AE60" stroke-width="2"/>
                            <text x="330" y="50" text-anchor="middle" fill="white" font-size="11" font-weight="600" font-family="Inter">🏥 Prevenir EL</text>
                        </g>
                        <g class="mm-node" style="cursor:pointer" onclick="App.showInfoModal(this.getAttribute('data-title'), this.getAttribute('data-info'), this.getAttribute('data-icon'))" data-icon="🔍" data-title="Identificar Riesgos" data-info="La identificación de peligros y valoración de riesgos es un proceso sistemático que permite detectar fuentes de daño, evaluar la probabilidad y severidad, y definir medidas de control antes de que ocurran eventos no deseados.">
                            <rect x="480" y="35" width="140" height="50" rx="10" fill="#F18F01" stroke="#E67E22" stroke-width="2"/>
                            <text x="550" y="65" text-anchor="middle" fill="white" font-size="11" font-weight="600" font-family="Inter">🔍 Identificar riesgos</text>
                        </g>
                        <g class="mm-node" style="cursor:pointer" onclick="App.showInfoModal(this.getAttribute('data-title'), this.getAttribute('data-info'), this.getAttribute('data-icon'))" data-icon="⚖️" data-title="Cumplir Normatividad" data-info="La CUN se compromete a cumplir con toda la normatividad legal vigente aplicable a Seguridad y Salud en el Trabajo, incluyendo la Ley 1562 de 2012, el Decreto 1072 de 2015 y la Resolución 0312 de 2019.">
                            <rect x="30" y="255" width="160" height="50" rx="10" fill="#E74C3C" stroke="#C0392B" stroke-width="2"/>
                            <text x="110" y="285" text-anchor="middle" fill="white" font-size="11" font-weight="600" font-family="Inter">⚖️ Cumplir normatividad</text>
                        </g>
                        <g class="mm-node" style="cursor:pointer" onclick="App.showInfoModal(this.getAttribute('data-title'), this.getAttribute('data-info'), this.getAttribute('data-icon'))" data-icon="💪" data-title="Cultura Segura" data-info="Fortalecer la cultura segura implica promover la participación activa de todos los colaboradores en la prevención, reporte oportuno de novedades y cumplimiento de protocolos. Es un compromiso compartido.">
                            <rect x="260" y="280" width="140" height="50" rx="10" fill="#8E44AD" stroke="#6C3483" stroke-width="2"/>
                            <text x="330" y="310" text-anchor="middle" fill="white" font-size="11" font-weight="600" font-family="Inter">💪 Cultura segura</text>
                        </g>
                        <g class="mm-node" style="cursor:pointer" onclick="App.showInfoModal(this.getAttribute('data-title'), this.getAttribute('data-info'), this.getAttribute('data-icon'))" data-icon="📊" data-title="Evaluar Desempeño" data-info="El SG-SST requiere evaluación continua del desempeño mediante indicadores, auditorías y seguimiento a planes de acción. Esto permite mejorar continuamente y garantizar la efectividad de las medidas implementadas.">
                            <rect x="470" y="255" width="160" height="50" rx="10" fill="#2E86AB" stroke="#1B6E94" stroke-width="2"/>
                            <text x="550" y="285" text-anchor="middle" fill="white" font-size="11" font-weight="600" font-family="Inter">📊 Evaluar desempeño</text>
                        </g>
                    </svg>
                </div>

                <div class="icon-stats">
                    <div class="icon-stat" style="animation-delay:0.1s">
                        <div class="icon-stat-icon">🛡️</div>
                        <div class="icon-stat-value">SG-SST</div>
                        <div class="icon-stat-label">Sistema de Gestión</div>
                    </div>
                    <div class="icon-stat anim-glow" style="animation-delay:0.2s; cursor:pointer;" onclick="App.openVideoPopup('AURORA Seguros de Vida — Nuestra ARL', 'https://www.youtube.com/watch?v=k2SZ-3F01Rk')">
                        <div class="icon-stat-icon">🏥</div>
                        <div class="icon-stat-value">AURORA</div>
                        <div class="icon-stat-label">Nuestra ARL</div>
                    </div>
                    <div class="icon-stat" style="animation-delay:0.3s">
                        <div class="icon-stat-icon">📋</div>
                        <div class="icon-stat-value">Prevención</div>
                        <div class="icon-stat-label">Cultura de cuidado</div>
                    </div>
                </div>

                <div class="concept-card">
                    <h4>🤝 Pilares de nuestra Política SST</h4>
                    <ul>
                        <li>Garantizar el cumplimiento estricto de la legislación aplicable.</li>
                        <li>Detectar peligros y evaluar riesgos de manera preventiva y constante.</li>
                        <li>Construir y fortalecer día a día una cultura de trabajo seguro.</li>
                        <li>Involucrar activamente a todos los colaboradores en la prevención.</li>
                        <li>Medir y mejorar continuamente la eficacia de nuestro Sistema de Gestión (SG-SST).</li>
                    </ul>
                </div>

                <div class="flip-cards-grid">
                    <div class="flip-card" onclick="this.classList.toggle('flipped')">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <span class="flip-icon">⚖️</span>
                                <h4>Normatividad</h4>
                                <span class="flip-hint">Toca para ver más</span>
                            </div>
                            <div class="flip-card-back">
                                <h4>Cumplimiento Legal</h4>
                                <p>Nos aseguramos de acatar estrictamente todas las leyes y normas vigentes en materia de Seguridad y Salud, garantizando así un entorno conforme a la ley.</p>
                            </div>
                        </div>
                    </div>
                    <div class="flip-card" onclick="this.classList.toggle('flipped')">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <span class="flip-icon">🔍</span>
                                <h4>Identificación</h4>
                                <span class="flip-hint">Toca para ver más</span>
                            </div>
                            <div class="flip-card-back">
                                <h4>Peligros y Riesgos</h4>
                                <p>Detectamos a tiempo cualquier peligro y evaluamos los riesgos asociados. Esto nos permite actuar de forma preventiva y establecer controles que protejan a todos.</p>
                            </div>
                        </div>
                    </div>
                    <div class="flip-card" onclick="this.classList.toggle('flipped')">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <span class="flip-icon">💪</span>
                                <h4>Cultura Segura</h4>
                                <span class="flip-hint">Toca para ver más</span>
                            </div>
                            <div class="flip-card-back">
                                <h4>Fortalecimiento</h4>
                                <p>Fomentamos un ambiente donde la prevención es tarea de todos, motivando a cada colaborador a ser un actor clave en su propio bienestar y el de sus compañeros.</p>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },
        {
            id: 'gestion-ambiental',
            titulo: 'Gestión Ambiental',
            contenido: () => `
                <div class="section-title">🌿 Gestión Ambiental</div>
                <p class="section-subtitle">Educación en la cultura sostenible para la reducción de impactos ambientales</p>

                <div class="video-container">
                    <iframe src="https://www.youtube-nocookie.com/embed/L_FcQJN1tms" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe>
                </div>
                <p class="video-caption">📹 Gestión Ambiental</p>

                <div class="mind-map-container">
                    <div class="mind-map-title">🧠 Mapa Mental — Gestión Ambiental CUN</div>
                    <svg viewBox="0 0 660 280" class="mind-map-svg" xmlns="http://www.w3.org/2000/svg">
                        <line class="mm-line" x1="330" y1="140" x2="110" y2="50" stroke="#27AE60" stroke-width="2"/>
                        <line class="mm-line" x1="330" y1="140" x2="330" y2="35" stroke="#27AE60" stroke-width="2"/>
                        <line class="mm-line" x1="330" y1="140" x2="550" y2="50" stroke="#27AE60" stroke-width="2"/>
                        <line class="mm-line" x1="330" y1="140" x2="110" y2="230" stroke="#27AE60" stroke-width="2"/>
                        <line class="mm-line" x1="330" y1="140" x2="550" y2="230" stroke="#27AE60" stroke-width="2"/>
                        <g class="mm-node">
                            <rect x="260" y="110" width="140" height="60" rx="30" fill="#27AE60" stroke="#1E8449" stroke-width="2"/>
                            <text x="330" y="146" text-anchor="middle" fill="white" font-size="12" font-weight="bold" font-family="Poppins">🌿 Gestión Ambiental</text>
                        </g>
                        <g class="mm-node" style="cursor:pointer" onclick="App.showInfoModal(this.getAttribute('data-title'), this.getAttribute('data-info'), this.getAttribute('data-icon'))" data-icon="♻️" data-title="Separar Residuos" data-info="Cada sede cuenta con puntos ecológicos con canecas diferenciadas por color. Separa correctamente residuos orgánicos, reciclables y ordinarios para facilitar su tratamiento y reducir el impacto ambiental.">
                            <rect x="30" y="25" width="160" height="50" rx="10" fill="#2E86AB" stroke="#1B6E94" stroke-width="2"/>
                            <text x="110" y="55" text-anchor="middle" fill="white" font-size="11" font-weight="600" font-family="Inter">♻️ Separar residuos</text>
                        </g>
                        <g class="mm-node" style="cursor:pointer" onclick="App.showInfoModal(this.getAttribute('data-title'), this.getAttribute('data-info'), this.getAttribute('data-icon'))" data-icon="💧" data-title="Ahorrar Agua" data-info="Cierra grifos cuando no los uses, reporta fugas y utiliza el agua de forma responsable. Cada gota cuenta en la construcción de una cultura sostenible CUNista.">
                            <rect x="260" y="10" width="140" height="50" rx="10" fill="#3498DB" stroke="#2980B9" stroke-width="2"/>
                            <text x="330" y="40" text-anchor="middle" fill="white" font-size="11" font-weight="600" font-family="Inter">💧 Ahorrar agua</text>
                        </g>
                        <g class="mm-node" style="cursor:pointer" onclick="App.showInfoModal(this.getAttribute('data-title'), this.getAttribute('data-info'), this.getAttribute('data-icon'))" data-icon="📄" data-title="Reducir Papel" data-info="Opta por documentos digitales, evita impresiones innecesarias y usa papel reciclado cuando sea posible. La digitalización reduce significativamente el consumo de recursos.">
                            <rect x="470" y="25" width="160" height="50" rx="10" fill="#F18F01" stroke="#E67E22" stroke-width="2"/>
                            <text x="550" y="55" text-anchor="middle" fill="white" font-size="11" font-weight="600" font-family="Inter">📄 Reducir papel</text>
                        </g>
                        <g class="mm-node" style="cursor:pointer" onclick="App.showInfoModal(this.getAttribute('data-title'), this.getAttribute('data-info'), this.getAttribute('data-icon'))" data-icon="⚡" data-title="Ahorrar Energía" data-info="Apaga luces y equipos al salir de las salas, desconecta cargadores que no uses y aprovecha la luz natural. El ahorro energético reduce la huella de carbono de la institución.">
                            <rect x="30" y="205" width="160" height="50" rx="10" fill="#8E44AD" stroke="#6C3483" stroke-width="2"/>
                            <text x="110" y="235" text-anchor="middle" fill="white" font-size="11" font-weight="600" font-family="Inter">⚡ Ahorrar energía</text>
                        </g>
                        <g class="mm-node" style="cursor:pointer" onclick="App.showInfoModal(this.getAttribute('data-title'), this.getAttribute('data-info'), this.getAttribute('data-icon'))" data-icon="📢" data-title="Campañas Ambientales" data-info="Participa activamente en las campañas ambientales organizadas por la CUN: jornadas de reciclaje y semanas ambientales. Toda acción cuenta y el planeta también es responsabilidad de los CUNistas.">
                            <rect x="470" y="205" width="160" height="50" rx="10" fill="#E74C3C" stroke="#C0392B" stroke-width="2"/>
                            <text x="550" y="235" text-anchor="middle" fill="white" font-size="11" font-weight="600" font-family="Inter">📢 Campañas</text>
                        </g>
                    </svg>
                </div>

                <div class="info-box success" style="align-items: center; margin-bottom: 1.5rem;">
                    <img src="assets/img/mascot_saltando.png" alt="Mascota Gestión Ambiental" style="width: 60px; height: 60px; object-fit: cover; border-radius: 50%; margin-right: 1rem; border: 2px solid #2ECC71;">
                    <div class="info-box-content">
                        <strong>Cultura Sostenible CUNista:</strong> Cuidar del medio ambiente es un compromiso de todos. Ayuda a ahorrar agua, energía y papel en cada una de nuestras sedes.
                    </div>
                </div>

                <div class="concept-card success">
                    <h4>🎯 Objetivos de la Gestión Ambiental</h4>
                    <ul>
                        <li>Cumplir la normativa legal aplicable ambiental</li>
                        <li>Generar conciencia hacia la sostenibilidad</li>
                        <li>Usar de manera sostenible todos los recursos</li>
                        <li>Prevenir y controlar los impactos ambientales</li>
                    </ul>
                </div>
            `
        },
        {
            id: 'accion-diaria',
            titulo: 'Acción Diaria',
            contenido: () => `
                <div class="section-title">📅 Acción Diaria</div>
                <p class="section-subtitle">Tips y recomendaciones para tu día a día</p>

                <div class="video-container">
                    <iframe src="https://www.youtube-nocookie.com/embed/SwPinMZWV9M" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe>
                </div>
                <p class="video-caption">📹 Acción Diaria — Tips de Seguridad</p>

                <div class="concept-card">
                    <h4>💡 Tips para la Acción Diaria</h4>
                    <ul>
                        <li>Revisa tu entorno de trabajo antes de iniciar tus labores.</li>
                        <li>Mantén una postura adecuada y realiza pausas activas.</li>
                        <li>Usa los elementos de protección personal si tu labor lo requiere.</li>
                        <li>Reporta cualquier condición insegura inmediatamente.</li>
                    </ul>
                </div>

                <div class="tabs-container">
                    <div class="tabs-nav">
                        <button class="tab-btn active" data-tab="rec-residuos">♻️ Residuos</button>
                        <button class="tab-btn" data-tab="rec-agua">💧 Agua y Energía</button>
                        <button class="tab-btn" data-tab="rec-papel">📄 Papel y Plástico</button>
                        <button class="tab-btn" data-tab="rec-campanas">📢 Campañas</button>
                    </div>
                    <div class="tab-content active" id="tab-rec-residuos">
                        <div class="info-box success">
                            <span class="info-box-icon">♻️</span>
                            <div class="info-box-content">
                                <strong>Separación de residuos:</strong> Separa correctamente los residuos en los puntos ecológicos. Cada sede cuenta con canecas diferenciadas por color.
                            </div>
                        </div>
                    </div>
                    <div class="tab-content" id="tab-rec-agua">
                        <div class="info-box success">
                            <span class="info-box-icon">💧</span>
                            <div class="info-box-content">
                                <strong>Ahorro de agua y energía:</strong> Cierra grifos cuando no los uses, apaga luces y equipos al salir de las salas. Cada acción cuenta.
                            </div>
                        </div>
                    </div>
                    <div class="tab-content" id="tab-rec-papel">
                        <div class="info-box success">
                            <span class="info-box-icon">📄</span>
                            <div class="info-box-content">
                                <strong>Reduce papel y plástico:</strong> Opta por documentos digitales, evita impresiones innecesarias y reduce el uso de plásticos de un solo uso.
                            </div>
                        </div>
                    </div>
                    <div class="tab-content" id="tab-rec-campanas">
                        <div class="info-box success">
                            <span class="info-box-icon">📢</span>
                            <div class="info-box-content">
                                <strong>Campañas ambientales:</strong> Participa activamente en las campañas ambientales organizadas por la CUN. Toda acción cuenta y el planeta también es responsabilidad de los CUNistas.
                            </div>
                        </div>
                    </div>
                </div>
            `
        },
        {
            id: 'quiz',
            titulo: 'Evaluación',
            contenido: () => `
                <div class="quiz-start-section">
                    <div class="anim-bounce" style="font-size:3rem;margin-bottom:1rem">📝</div>
                    <h3>¡Es hora de la evaluación!</h3>
                    <p>Responde 5 preguntas sobre Fundamentos de SST. Necesitas un 80% para aprobar.</p>
                    <button class="btn btn-accent" onclick="App.startQuiz(1)">Comenzar Evaluación</button>
                </div>
            `
        }
    ],

    checkTrivia(element, scenarioId, isCorrect) {
        const parent = element.parentElement;
        const options = parent.querySelectorAll('.scenario-option');
        options.forEach(opt => {
            opt.style.pointerEvents = 'none';
            opt.classList.remove('selected');
        });

        element.classList.add('selected');
        if (isCorrect) element.classList.add('correct');
        else element.classList.add('incorrect');

        const resultEl = document.getElementById(`result-${scenarioId}`);
        resultEl.classList.add('show');
        resultEl.classList.add(isCorrect ? 'correct' : 'incorrect');
        resultEl.textContent = isCorrect ? '✅ ¡Correcto! Excelente conocimiento.' : '❌ Incorrecto. Revisa el contenido del módulo.';
    }
};
