/* ========================================
   Módulo 5: Peligros, Autocuidado y Equipos
   ======================================== */
const Modulo5 = {
    id: 5,
    titulo: 'Peligros, Autocuidado y Equipos',
    subtitulo: '7 tipos de peligros y prevención',
    tiempo: 15,
    secciones: [
        {
            id: 'introduccion',
            titulo: 'Introducción',
            contenido: () => `
                <div class="section-title">🛡️ Introducción al Módulo 5</div>
                <p class="section-subtitle">Comprende la importancia de identificar peligros y cuidar de tu salud en el trabajo</p>

                <div class="video-container">
                    <video controls preload="metadata" style="position:absolute;top:0;left:0;width:100%;height:100%">
                        <source src="assets/video/introduccion%20modulo%205.mp4" type="video/mp4">
                        Tu navegador no soporta video HTML5.
                    </video>
                </div>
                <p class="video-caption">📹 Introducción al Módulo 5 — Conceptos Generales de Peligros y Prevención</p>

                <div class="concept-card">
                    <h4>📋 Objetivos de Aprendizaje</h4>
                    <p>En este módulo conocerás la normatividad de clasificación de riesgos en Colombia, los 7 tipos de peligro principales bajo la GTC 45, y la importancia del autocuidado y las pausas activas para evitar lesiones y mejorar el bienestar en la CUN.</p>
                </div>

                <!-- Compromiso Interactivo -->
                <div class="compromiso-card" style="text-align: center; background: rgba(46,134,171,0.05); padding: 1.5rem; border-radius: var(--radius); border: 2px dashed var(--secondary); margin-top: 1.5rem; animation: fadeInUp 0.5s ease-out;">
                    <h5 style="font-family: var(--font-title); margin-bottom: 0.5rem; color: var(--primary);">🤝 Pacto de Autocuidado CUNista</h5>
                    <p style="font-size: 0.85rem; margin-bottom: 1rem; color: var(--text);">Antes de iniciar el estudio del módulo, haz clic abajo para comprometerte a cuidar tu bienestar y reportar condiciones de riesgo.</p>
                    <button class="btn btn-primary" id="btn-sign-compromiso" onclick="Modulo5.signCompromiso()">✍️ Firmar Compromiso</button>
                    <div id="compromiso-firmado" class="hidden" style="color: var(--success); font-weight: 700; font-size: 0.95rem; display: flex; align-items: center; justify-content: center; gap: 0.5rem;">
                        <span>✅</span> ¡Compromiso Firmado! Cuidaré de mi salud y de mis compañeros.
                    </div>
                </div>
            `
        },
        {
            id: 'nuevo-enfoque',
            titulo: 'Nuevo Enfoque SST',
            contenido: () => `
                <div class="section-title">🔄 Nuevo Enfoque SST</div>
                <p class="section-subtitle">Un enfoque proactivo y participativo para la prevención laboral</p>

                <div class="video-container">
                    <video controls preload="metadata" style="position:absolute;top:0;left:0;width:100%;height:100%">
                        <source src="assets/video/Nuevo%20Enfoque%20SST%20modulo%205.mp4" type="video/mp4">
                        Tu navegador no soporta video HTML5.
                    </video>
                </div>
                <p class="video-caption">📹 El Nuevo Enfoque en Seguridad y Salud en el Trabajo</p>

                <div class="info-box success" style="margin-bottom: 1.5rem;">
                    <span class="info-box-icon">💡</span>
                    <div class="info-box-content">
                        <strong>Participación Activa:</strong> La prevención moderna no depende solo de la organización; depende de la reportabilidad oportuna y de la actitud consciente de cada colaborador.
                    </div>
                </div>

                <!-- Selector de Roles Interactivo -->
                <div class="interactive-roles" style="background: var(--bg); padding: 1.25rem; border-radius: var(--radius-sm); border: 1px solid var(--border); margin-top: 1.5rem;">
                    <h5 style="margin-bottom: 0.5rem; text-align: center; font-family: var(--font-title); color: var(--primary);">🎯 Tu rol en el Nuevo Enfoque SST</h5>
                    <p style="font-size: 0.85rem; text-align: center; margin-bottom: 1rem; color: var(--text-light);">Selecciona tu cargo para conocer tu aporte preventivo diario:</p>
                    <div style="display: flex; gap: 0.5rem; justify-content: center; margin-bottom: 1rem; flex-wrap: wrap;">
                        <button class="btn btn-outline btn-sm" onclick="Modulo5.showRoleDetail('docente')">👩‍🏫 Docente</button>
                        <button class="btn btn-outline btn-sm" onclick="Modulo5.showRoleDetail('admin')">💼 Administrativo</button>
                        <button class="btn btn-outline btn-sm" onclick="Modulo5.showRoleDetail('operativo')">🔧 Operativo</button>
                    </div>
                    <div id="role-detail-card" class="concept-card hidden" style="border-left-color: var(--secondary); transition: all 0.3s ease; margin-bottom: 0;">
                        <h5 id="role-detail-title" style="margin-bottom: 0.25rem; font-weight: 600;"></h5>
                        <p id="role-detail-text" style="font-size: 0.85rem; line-height: 1.5; color: var(--text);"></p>
                    </div>
                </div>
            `
        },
        {
            id: 'marco-legal',
            titulo: 'Marco Legal',
            contenido: () => `
                <div class="section-title">⚖️ Marco Legal en Clasificación de Riesgos</div>
                <p class="section-subtitle">Leyes y guías de obligatorio cumplimiento en Colombia</p>

                <div class="video-container">
                    <video controls preload="metadata" style="position:absolute;top:0;left:0;width:100%;height:100%">
                        <source src="assets/video/Marco%20Legarl%20modulo%205.mp4" type="video/mp4">
                        Tu navegador no soporta video HTML5.
                    </video>
                </div>
                <p class="video-caption">📹 Marco Legal Colombiano y Metodologías de SST</p>

                <div class="concept-card">
                    <h4>📘 Ley 1562 de 2012</h4>
                    <p>Establece directrices para la promoción de la salud y prevención de riesgos en el ambiente laboral. Obliga al diseño de planes orientados al fomento de estilos de vida saludables y al autocuidado.</p>
                </div>

                <div class="concept-card accent" style="margin-bottom: 1.5rem;">
                    <h4>📙 Guía Técnica Colombiana GTC 45</h4>
                    <p>Es la guía metodológica oficial en Colombia para la Identificación de Peligros y Valoración de Riesgos. Define el marco para clasificar peligros en 7 categorías principales.</p>
                </div>

                <!-- Mini Trivia Interactiva -->
                <div class="trivia-legal" style="background: var(--bg); padding: 1.25rem; border-radius: var(--radius-sm); border: 1px solid var(--border); margin-top: 1.5rem;">
                    <h5 style="margin-bottom: 0.5rem; font-family: var(--font-title); color: var(--primary);">🧠 Mini Trivia Legal</h5>
                    <p style="font-size: 0.85rem; margin-bottom: 0.75rem; color: var(--text);">¿Qué norma colombiana clasifica técnicamente los peligros en las 7 categorías principales que veremos?</p>
                    <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                        <button class="btn btn-outline btn-sm" style="text-align: left; justify-content: flex-start; white-space: normal;" onclick="Modulo5.checkLegalTrivia(this, 'A')">A. Ley 1562 de 2012</button>
                        <button class="btn btn-outline btn-sm" style="text-align: left; justify-content: flex-start; white-space: normal;" onclick="Modulo5.checkLegalTrivia(this, 'B')">B. Guía Técnica Colombiana GTC 45</button>
                        <button class="btn btn-outline btn-sm" style="text-align: left; justify-content: flex-start; white-space: normal;" onclick="Modulo5.checkLegalTrivia(this, 'C')">C. Decreto 1072 de 2015</button>
                    </div>
                    <div id="legal-trivia-feedback" class="hidden" style="margin-top: 0.75rem; font-size: 0.85rem; font-weight: 600; line-height: 1.4;"></div>
                </div>
            `
        },
        {
            id: 'clasificacion',
            titulo: '7 Tipos de Peligros',
            contenido: () => `
                <div class="section-title">🔬 Clasificación de Peligros (GTC 45)</div>
                <p class="section-subtitle">Identifica los 7 tipos de peligro en el entorno laboral. Toca los nodos para ver detalles.</p>

                <div class="video-container">
                    <video controls preload="metadata" style="position:absolute;top:0;left:0;width:100%;height:100%">
                        <source src="assets/video/Categorias%20de%20peligros%20modulo%205.mp4" type="video/mp4">
                        Tu navegador no soporta video HTML5.
                    </video>
                </div>
                <p class="video-caption">📹 7 Pilares — Clasificación de Peligros según GTC 45</p>

                <div class="mind-map-container">
                    <div class="mind-map-title">🧠 Mapa Mental — 7 Tipos de Peligros</div>
                    <svg viewBox="0 0 660 420" class="mind-map-svg" xmlns="http://www.w3.org/2000/svg">
                        <!-- Lines from center -->
                        <line class="mm-line" x1="330" y1="210" x2="110" y2="60" stroke="#27AE60" stroke-width="2"/>
                        <line class="mm-line" x1="330" y1="210" x2="330" y2="40" stroke="#F39C12" stroke-width="2"/>
                        <line class="mm-line" x1="330" y1="210" x2="550" y2="60" stroke="#E74C3C" stroke-width="2"/>
                        <line class="mm-line" x1="330" y1="210" x2="60" y2="210" stroke="#8E44AD" stroke-width="2"/>
                        <line class="mm-line" x1="330" y1="210" x2="600" y2="210" stroke="#2E86AB" stroke-width="2"/>
                        <line class="mm-line" x1="330" y1="210" x2="110" y2="360" stroke="#1B3A5C" stroke-width="2"/>
                        <line class="mm-line" x1="330" y1="210" x2="550" y2="360" stroke="#5D6D7E" stroke-width="2"/>
                        <!-- Center node -->
                        <g class="mm-node">
                            <circle cx="330" cy="210" r="45" fill="#1B3A5C" stroke="#F18F01" stroke-width="3"/>
                            <text x="330" y="205" text-anchor="middle" fill="white" font-size="11" font-weight="bold" font-family="Poppins">7 TIPOS</text>
                            <text x="330" y="222" text-anchor="middle" fill="white" font-size="10" font-family="Inter">de Peligros</text>
                        </g>
                        <!-- Branch nodes -->
                        <g class="mm-node" style="cursor:pointer" onclick="App.showInfoModal(this.getAttribute('data-title'), this.getAttribute('data-info'), this.getAttribute('data-icon'))" data-icon="🦠" data-title="Peligro Biológico" data-info="Exposición a virus, bacterias, hongos o parásitos que causan alergias o infecciones. Común en atención al público o baños. Prevención: lavado de manos, ventilación y vacunas al día.">
                            <rect x="30" y="35" width="160" height="50" rx="10" fill="#27AE60" stroke="#1E8449" stroke-width="2"/>
                            <text x="110" y="58" text-anchor="middle" fill="white" font-size="11" font-weight="600" font-family="Inter">🦠 Biológico</text>
                            <text x="110" y="74" text-anchor="middle" fill="rgba(255,255,255,0.8)" font-size="8" font-family="Inter">Virus, bacterias</text>
                        </g>
                        <g class="mm-node" style="cursor:pointer" onclick="App.showInfoModal(this.getAttribute('data-title'), this.getAttribute('data-info'), this.getAttribute('data-icon'))" data-icon="🔊" data-title="Peligro Físico" data-info="Energías ambientales agresivas: ruido de plantas, mala iluminación, calor o frío extremo. Prevención: regular brillo de pantalla, reportar fallas de luz y aire acondicionado.">
                            <rect x="250" y="15" width="160" height="50" rx="10" fill="#F39C12" stroke="#E67E22" stroke-width="2"/>
                            <text x="330" y="38" text-anchor="middle" fill="white" font-size="11" font-weight="600" font-family="Inter">🔊 Físico</text>
                            <text x="330" y="54" text-anchor="middle" fill="rgba(255,255,255,0.8)" font-size="8" font-family="Inter">Ruido, vibración</text>
                        </g>
                        <g class="mm-node" style="cursor:pointer" onclick="App.showInfoModal(this.getAttribute('data-title'), this.getAttribute('data-info'), this.getAttribute('data-icon'))" data-icon="🧪" data-title="Peligro Químico" data-info="Inhalación o manipulación de sustancias químicas de limpieza, tintas o disolventes. Prevención: no mezclar productos de aseo, mantener áreas ventiladas y rotular envases.">
                            <rect x="470" y="35" width="160" height="50" rx="10" fill="#E74C3C" stroke="#C0392B" stroke-width="2"/>
                            <text x="550" y="58" text-anchor="middle" fill="white" font-size="11" font-weight="600" font-family="Inter">🧪 Químico</text>
                            <text x="550" y="74" text-anchor="middle" fill="rgba(255,255,255,0.8)" font-size="8" font-family="Inter">Vapores tóxicos</text>
                        </g>
                        <g class="mm-node" style="cursor:pointer" onclick="App.showInfoModal(this.getAttribute('data-title'), this.getAttribute('data-info'), this.getAttribute('data-icon'))" data-icon="🧠" data-title="Peligro Psicosocial" data-info="Afectaciones mentales y emocionales por sobrecarga laboral, jornadas largas, falta de comunicación o acoso. Prevención: priorizar tareas, respetar desconexión y acudir al Comité de Convivencia.">
                            <rect x="0" y="185" width="120" height="50" rx="10" fill="#8E44AD" stroke="#6C3483" stroke-width="2"/>
                            <text x="60" y="208" text-anchor="middle" fill="white" font-size="11" font-weight="600" font-family="Inter">🧠 Psicosocial</text>
                            <text x="60" y="224" text-anchor="middle" fill="rgba(255,255,255,0.8)" font-size="8" font-family="Inter">Carga mental</text>
                        </g>
                        <g class="mm-node" style="cursor:pointer" onclick="App.showInfoModal(this.getAttribute('data-title'), this.getAttribute('data-info'), this.getAttribute('data-icon'))" data-icon="💪" data-title="Peligro Biomecánico" data-info="Posturas inadecuadas, levantamiento manual de cargas y movimientos repetitivos. Prevención: ajustar silla y pantalla, levantar peso con las piernas dobladas y hacer pausas activas.">
                            <rect x="540" y="185" width="120" height="50" rx="10" fill="#2E86AB" stroke="#1B6E94" stroke-width="2"/>
                            <text x="600" y="208" text-anchor="middle" fill="white" font-size="11" font-weight="600" font-family="Inter">💪 Biomecánico</text>
                            <text x="600" y="224" text-anchor="middle" fill="rgba(255,255,255,0.8)" font-size="8" font-family="Inter">Posturas, cargas</text>
                        </g>
                        <g class="mm-node" style="cursor:pointer" onclick="App.showInfoModal(this.getAttribute('data-title'), this.getAttribute('data-info'), this.getAttribute('data-icon'))" data-icon="⚡" data-title="Condiciones de Seguridad" data-info="Peligros físicos del entorno: tomas sobrecargadas, pisos mojados, escaleras sin pasamanos. Prevención: no sobrecargar enchufes, reportar daños y usar pasamanos.">
                            <rect x="30" y="335" width="160" height="50" rx="10" fill="#1B3A5C" stroke="#0D2137" stroke-width="2"/>
                            <text x="110" y="358" text-anchor="middle" fill="white" font-size="10" font-weight="600" font-family="Inter">⚡ Condiciones</text>
                            <text x="110" y="374" text-anchor="middle" fill="rgba(255,255,255,0.8)" font-size="8" font-family="Inter">de seguridad</text>
                        </g>
                        <g class="mm-node" style="cursor:pointer" onclick="App.showInfoModal(this.getAttribute('data-title'), this.getAttribute('data-info'), this.getAttribute('data-icon'))" data-icon="🌊" data-title="Fenómenos Naturales" data-info="Eventos incontrolables de la naturaleza: sismos, vendavales o lluvias severas. Prevención: conocer rutas de evacuación, identificar puntos de encuentro y mantener la calma.">
                            <rect x="470" y="335" width="160" height="50" rx="10" fill="#5D6D7E" stroke="#34495E" stroke-width="2"/>
                            <text x="550" y="358" text-anchor="middle" fill="white" font-size="10" font-weight="600" font-family="Inter">🌊 Fenómenos</text>
                            <text x="550" y="374" text-anchor="middle" fill="rgba(255,255,255,0.8)" font-size="8" font-family="Inter">naturales</text>
                        </g>
                    </svg>
                </div>
            `
        },
        {
            id: 'peligros-detalle',
            titulo: 'Peligros en Detalle',
            contenido: () => `
                <div class="section-title">🔍 Peligros en Detalle</div>
                <p class="section-subtitle">Toca cada tarjeta para conocer más sobre las consecuencias y controles de cada peligro</p>

                <div class="flip-cards-grid">
                    <div class="flip-card" onclick="this.classList.toggle('flipped')">
                        <div class="flip-card-inner">
                            <div class="flip-card-front" style="background:linear-gradient(135deg, #27AE60, #1E8449)">
                                <span class="flip-icon">🦠</span>
                                <h4>Biológico</h4>
                                <span class="flip-hint">Toca para ver más</span>
                            </div>
                            <div class="flip-card-back">
                                <h4>Peligro Biológico</h4>
                                <p>Exposición a virus, bacterias, hongos. <strong>Consecuencia:</strong> infecciones y alergias. <strong>Control:</strong> lavado de manos y ventilación.</p>
                            </div>
                        </div>
                    </div>
                    <div class="flip-card" onclick="this.classList.toggle('flipped')">
                        <div class="flip-card-inner">
                            <div class="flip-card-front" style="background:linear-gradient(135deg, #F39C12, #E67E22)">
                                <span class="flip-icon">🔊</span>
                                <h4>Físico</h4>
                                <span class="flip-hint">Toca para ver más</span>
                            </div>
                            <div class="flip-card-back">
                                <h4>Peligro Físico</h4>
                                <p>Ruido alto, mala iluminación. <strong>Consecuencia:</strong> hipoacusia, fatiga visual. <strong>Control:</strong> mantenimiento y pausas visuales.</p>
                            </div>
                        </div>
                    </div>
                    <div class="flip-card" onclick="this.classList.toggle('flipped')">
                        <div class="flip-card-inner">
                            <div class="flip-card-front" style="background:linear-gradient(135deg, #E74C3C, #C0392B)">
                                <span class="flip-icon">🧪</span>
                                <h4>Químico</h4>
                                <span class="flip-hint">Toca para ver más</span>
                            </div>
                            <div class="flip-card-back">
                                <h4>Peligro Químico</h4>
                                <p>Vapores, líquidos y polvos. <strong>Consecuencia:</strong> intoxicaciones o quemaduras. <strong>Control:</strong> rotulación y EPP adecuados.</p>
                            </div>
                        </div>
                    </div>
                    <div class="flip-card" onclick="this.classList.toggle('flipped')">
                        <div class="flip-card-inner">
                            <div class="flip-card-front" style="background:linear-gradient(135deg, #8E44AD, #6C3483)">
                                <span class="flip-icon">🧠</span>
                                <h4>Psicosocial</h4>
                                <span class="flip-hint">Toca para ver más</span>
                            </div>
                            <div class="flip-card-back">
                                <h4>Peligro Psicosocial</h4>
                                <p>Sobrecarga, jornadas extensas. <strong>Consecuencia:</strong> estrés, insomnio, burnout. <strong>Control:</strong> priorizar y acudir a comités.</p>
                            </div>
                        </div>
                    </div>
                    <div class="flip-card" onclick="this.classList.toggle('flipped')">
                        <div class="flip-card-inner">
                            <div class="flip-card-front" style="background:linear-gradient(135deg, #2E86AB, #1B6E94)">
                                <span class="flip-icon">💪</span>
                                <h4>Biomecánico</h4>
                                <span class="flip-hint">Toca para ver más</span>
                            </div>
                            <div class="flip-card-back">
                                <h4>Peligro Biomecánico</h4>
                                <p>Movimientos repetitivos, malas posturas. <strong>Consecuencia:</strong> lumbalgias, túnel carpiano. <strong>Control:</strong> ergonomía y pausas activas.</p>
                            </div>
                        </div>
                    </div>
                    <div class="flip-card" onclick="this.classList.toggle('flipped')">
                        <div class="flip-card-inner">
                            <div class="flip-card-front" style="background:linear-gradient(135deg, #1B3A5C, #0D2137)">
                                <span class="flip-icon">⚡</span>
                                <h4>Seguridad</h4>
                                <span class="flip-hint">Toca para ver más</span>
                            </div>
                            <div class="flip-card-back">
                                <h4>Condición de Seguridad</h4>
                                <p>Cables sueltos, herramientas defectuosas. <strong>Consecuencia:</strong> caídas, electrocución. <strong>Control:</strong> reportar y reparar oportunamente.</p>
                            </div>
                        </div>
                    </div>
                    <div class="flip-card" onclick="this.classList.toggle('flipped')">
                        <div class="flip-card-inner">
                            <div class="flip-card-front" style="background:linear-gradient(135deg, #5D6D7E, #34495E)">
                                <span class="flip-icon">🌊</span>
                                <h4>Naturales</h4>
                                <span class="flip-hint">Toca para ver más</span>
                            </div>
                            <div class="flip-card-back">
                                <h4>Fenómenos Naturales</h4>
                                <p>Sismos, inundaciones, tormentas. <strong>Consecuencia:</strong> atrapamientos, contusiones. <strong>Control:</strong> conocer el plan de evacuación.</p>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },
        {
            id: 'riesgo-psicosocial',
            titulo: 'Riesgo Psicosocial',
            contenido: () => `
                <div class="section-title">🧠 Riesgo Psicosocial</div>
                <p class="section-subtitle">Cuidado del bienestar emocional en las actividades diarias</p>

                <div class="video-container">
                    <video controls preload="metadata" style="position:absolute;top:0;left:0;width:100%;height:100%">
                        <source src="assets/video/Riesgo%20psicosocial%20modulo%205.mp4" type="video/mp4">
                        Tu navegador no soporta video HTML5.
                    </video>
                </div>
                <p class="video-caption">📹 Manejo del Riesgo Psicosocial y Salud Mental en la CUN</p>

                <div class="concept-card danger">
                    <h4>🧠 Salud Mental y Productividad</h4>
                    <p>Factores psicosociales desfavorables como la sobrecarga de tareas y la comunicación deficiente pueden generar altos niveles de <strong>estrés laboral, ansiedad e insomnio</strong>. Es importante equilibrar las jornadas y utilizar los canales de comunicación asertiva del equipo.</p>
                </div>

                <div class="info-box success" style="margin-bottom: 1.5rem;">
                    <span class="info-box-icon">🤝</span>
                    <div class="info-box-content">
                        <strong>Comité de Convivencia Laboral:</strong> Recuerda que la CUN cuenta con un comité especial para mediar en conflictos y prevenir el acoso. Puedes contactarlos en <strong>comiteconvivencialaboral@cun.edu.co</strong>.
                    </div>
                </div>

                <!-- Autochequeo de Estrés Interactivo -->
                <div class="interactive-stress-check" style="background: var(--bg); padding: 1.25rem; border-radius: var(--radius-sm); border: 1px solid var(--border); margin-top: 1.5rem;">
                    <h5 style="margin-bottom: 0.5rem; font-family: var(--font-title); color: var(--primary);">📊 Medidor de Bienestar Laboral</h5>
                    <p style="font-size: 0.85rem; margin-bottom: 0.75rem; color: var(--text);">¿Cómo te has sentido emocionalmente en tu entorno de trabajo en las últimas semanas?</p>
                    <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                        <button class="btn btn-outline btn-sm" style="text-align: left; justify-content: flex-start; white-space: normal;" onclick="Modulo5.checkStress('A')">🟢 Nivel Bajo: Organizado, tranquilo y con buena energía</button>
                        <button class="btn btn-outline btn-sm" style="text-align: left; justify-content: flex-start; white-space: normal;" onclick="Modulo5.checkStress('B')">🟡 Nivel Medio: Cansado, con picos de tensión o fatiga ocasional</button>
                        <button class="btn btn-outline btn-sm" style="text-align: left; justify-content: flex-start; white-space: normal;" onclick="Modulo5.checkStress('C')">🔴 Nivel Alto: Abrumado, con insomnio o tensión constante</button>
                    </div>
                    <div id="stress-feedback-card" class="concept-card hidden" style="margin-top: 0.75rem; border-left-color: var(--secondary); margin-bottom: 0;">
                        <h6 id="stress-feedback-title" style="font-weight: 700; margin-bottom: 0.25rem;">Recomendación:</h6>
                        <p id="stress-feedback-text" style="font-size: 0.85rem; line-height: 1.4; color: var(--text);"></p>
                    </div>
                </div>
            `
        },
        {
            id: 'autocuidado',
            titulo: 'Prácticas de Autocuidado',
            contenido: () => `
                <div class="section-title">🤲 Prácticas de Autocuidado</div>
                <p class="section-subtitle">Hábitos conscientes orientados a la integridad física y mental</p>

                <div class="video-container">
                    <video controls preload="metadata" style="position:absolute;top:0;left:0;width:100%;height:100%">
                        <source src="assets/video/Autocuidado%20modulo%205.mp4" type="video/mp4">
                        Tu navegador no soporta video HTML5.
                    </video>
                </div>
                <p class="video-caption">📹 Prácticas de Autocuidado e Higiene Ocupacional</p>

                <div class="accordion">
                    <div class="accordion-header" onclick="this.parentElement.classList.toggle('open')">
                        <span>🤲 ¿Qué es el Autocuidado?</span>
                        <span class="accordion-arrow">▼</span>
                    </div>
                    <div class="accordion-body">
                        <p>Es la capacidad de las personas para elegir libremente prácticas saludables orientadas a mantener su integridad. Involucra el uso correcto de EPP, respeto a protocolos y cuidado personal.</p>
                    </div>
                </div>

                <div class="accordion">
                    <div class="accordion-header" onclick="this.parentElement.classList.toggle('open')">
                        <span>🧹 Orden y Aseo (Las 5S)</span>
                        <span class="accordion-arrow">▼</span>
                    </div>
                    <div class="accordion-body">
                        <p>Mantener el escritorio y áreas de tránsito limpios y organizados elimina obstáculos, evita tropiezos o caídas y reduce el riesgo de conatos de incendio al no obstruir tomas eléctricas.</p>
                    </div>
                </div>

                <div class="accordion" style="margin-bottom: 1.5rem;">
                    <div class="accordion-header" onclick="this.parentElement.classList.toggle('open')">
                        <span>🔧 Uso Seguro de Herramientas y Equipos</span>
                        <span class="accordion-arrow">▼</span>
                    </div>
                    <div class="accordion-body">
                        <ul>
                            <li>✅ Revise previamente el estado de cables, enchufes y carcasas antes de encender un equipo.</li>
                            <li>✅ Utilice las herramientas solo para la función técnica con la que fueron diseñadas.</li>
                            <li>❌ Nunca realice limpiezas o reparaciones a impresoras o máquinas si están conectadas.</li>
                            <li>❌ No intente reparar equipos por su cuenta. Reporte a Tecnología.</li>
                        </ul>
                    </div>
                </div>

                <!-- Mini Trivia de Equipos -->
                <div class="trivia-equipos" style="background: var(--bg); padding: 1.25rem; border-radius: var(--radius-sm); border: 1px solid var(--border); margin-top: 1.5rem;">
                    <h5 style="margin-bottom: 0.5rem; font-family: var(--font-title); color: var(--primary);">🔧 Reto: Manejo Seguro de Equipos</h5>
                    <p style="font-size: 0.85rem; margin-bottom: 0.75rem; color: var(--text);">¿Qué debes hacer ANTES de intentar desatascar papel o limpiar los rodillos internos de una impresora?</p>
                    <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                        <button class="btn btn-outline btn-sm" style="text-align: left; justify-content: flex-start; white-space: normal;" onclick="Modulo5.checkEquiposTrivia(this, 'A')">A. Hacerlo con cuidado mientras sigue encendida para ganar tiempo</button>
                        <button class="btn btn-outline btn-sm" style="text-align: left; justify-content: flex-start; white-space: normal;" onclick="Modulo5.checkEquiposTrivia(this, 'B')">B. Apagarla y desconectarla totalmente de la toma de corriente</button>
                        <button class="btn btn-outline btn-sm" style="text-align: left; justify-content: flex-start; white-space: normal;" onclick="Modulo5.checkEquiposTrivia(this, 'C')">C. Usar unas pinzas o tijeras metálicas sin desconectarla</button>
                    </div>
                    <div id="equipos-trivia-feedback" class="hidden" style="margin-top: 0.75rem; font-size: 0.85rem; font-weight: 600; line-height: 1.4;"></div>
                </div>
            `
        },
        {
            id: 'pausas-activas',
            titulo: 'Pausas Activas',
            contenido: () => `
                <div class="section-title">🏋️ Pausas Activas</div>
                <p class="section-subtitle">Realiza breves descansos para prevenir la fatiga muscular y el estrés</p>

                <div class="video-container">
                    <video controls preload="metadata" style="position:absolute;top:0;left:0;width:100%;height:100%">
                        <source src="assets/video/Pausas%20Activas%20modulo%205.mp4" type="video/mp4">
                        Tu navegador no soporta video HTML5.
                    </video>
                </div>
                <p class="video-caption">📹 Ejercicios Recomendados de Pausas Activas</p>

                <div class="concept-card accent" style="margin-bottom: 1.5rem;">
                    <h4>🏋️ Beneficios de las Pausas Activas (5 a 10 min)</h4>
                    <p>Realizar ejercicios de estiramiento de cuello, hombros, manos y espalda cada 2 horas disminuye la fatiga muscular acumulada. También se recomiendan pausas visuales mirando a un punto lejano para evitar el cansancio ocular.</p>
                </div>

                <!-- Temporizador de Pausa Activa Guiada -->
                <div class="timer-pausa-container" style="background: rgba(46,150,113,0.05); padding: 1.5rem; border-radius: var(--radius); border: 2px solid var(--success); text-align: center; margin-top: 1.5rem; animation: fadeInUp 0.5s ease-out;">
                    <h5 style="font-family: var(--font-title); color: var(--primary); margin-bottom: 0.5rem;">⏳ Temporizador de Pausa Activa Guiada</h5>
                    <p style="font-size: 0.85rem; margin-bottom: 1rem; color: var(--text);">Haz clic abajo para iniciar un ejercicio guiado de estiramiento rápido de 30 segundos:</p>
                    
                    <div id="timer-display" style="font-size: 3rem; font-weight: 800; color: var(--success); margin-bottom: 0.5rem; font-family: var(--font-title);">30</div>
                    <div id="timer-instructions" style="font-size: 0.95rem; font-weight: 600; min-height: 48px; margin-bottom: 1rem; color: var(--text); line-height: 1.4;">¿Listo para estirar?</div>
                    
                    <button class="btn btn-accent" id="btn-start-pausa" onclick="Modulo5.startPausaTimer()">▶️ Iniciar Ejercicio</button>
                </div>
            `
        },
        {
            id: 'casos-practicos',
            titulo: 'Casos y Autocuidado',
            contenido: () => `
                <div class="section-title">🔍 Casos de Estudio</div>
                <p class="section-subtitle">Estudia situaciones cotidianas y aplica pautas de prevención</p>

                <div class="video-container">
                    <video controls preload="metadata" style="position:absolute;top:0;left:0;width:100%;height:100%">
                        <source src="assets/video/Casos%20y%20autocuidado%20modulo5.mp4" type="video/mp4">
                        Tu navegador no soporta video HTML5.
                    </video>
                </div>
                <p class="video-caption">📹 Análisis de Casos de Autocuidado y Peligros</p>

                <!-- Simulador de Decisiones Gamificado -->
                <div class="simulador-casos-wrapper" style="background: var(--bg); padding: 1.25rem; border-radius: var(--radius); border: 1px solid var(--border); margin-top: 1.5rem;">
                    <h5 style="margin-bottom: 0.5rem; text-align: center; font-family: var(--font-title); color: var(--primary);">🎮 Simulador de Casos CUN</h5>
                    <p style="font-size: 0.85rem; text-align: center; margin-bottom: 1.25rem; color: var(--text-light);">Analiza las situaciones de la universidad y asócialas a su peligro correspondiente:</p>
                    
                    <div class="cases-simulator-grid" style="display: flex; flex-direction: column; gap: 1rem;">
                        <!-- Case 1 -->
                        <div class="case-card" id="case-1" style="background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-sm); padding: 1rem; transition: var(--transition);">
                            <div style="font-weight: 700; margin-bottom: 0.25rem; font-size: 0.9rem; color: var(--secondary);">Caso 1: Programador CUN en Oficina</div>
                            <p style="font-size: 0.85rem; margin-bottom: 0.75rem; color: var(--text);">Siente hormigueo e inflamación en muñecas tras digitar por 4 horas sin descansos.</p>
                            <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;" class="case-options">
                                <button class="btn btn-outline btn-sm" onclick="Modulo5.solveCase(1, 'Físico', this)">🔊 Físico</button>
                                <button class="btn btn-outline btn-sm" onclick="Modulo5.solveCase(1, 'Biomecánico', this)">💪 Biomecánico</button>
                                <button class="btn btn-outline btn-sm" onclick="Modulo5.solveCase(1, 'Psicosocial', this)">🧠 Psicosocial</button>
                            </div>
                            <div class="case-feedback hidden" style="margin-top: 0.75rem; font-size: 0.85rem; border-top: 1px solid var(--border); padding-top: 0.5rem; line-height: 1.4;"></div>
                        </div>

                        <!-- Case 2 -->
                        <div class="case-card" id="case-2" style="background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-sm); padding: 1rem; transition: var(--transition);">
                            <div style="font-weight: 700; margin-bottom: 0.25rem; font-size: 0.9rem; color: var(--secondary);">Caso 2: Obra de Construcción Vecina</div>
                            <p style="font-size: 0.85rem; margin-bottom: 0.75rem; color: var(--text);">Ruido molesto y continuo de taladros que dificulta dictar clases presenciales.</p>
                            <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;" class="case-options">
                                <button class="btn btn-outline btn-sm" onclick="Modulo5.solveCase(2, 'Físico', this)">🔊 Físico</button>
                                <button class="btn btn-outline btn-sm" onclick="Modulo5.solveCase(2, 'Químico', this)">🧪 Químico</button>
                                <button class="btn btn-outline btn-sm" onclick="Modulo5.solveCase(2, 'Natural', this)">🌊 Natural</button>
                            </div>
                            <div class="case-feedback hidden" style="margin-top: 0.75rem; font-size: 0.85rem; border-top: 1px solid var(--border); padding-top: 0.5rem; line-height: 1.4;"></div>
                        </div>

                        <!-- Case 3 -->
                        <div class="case-card" id="case-3" style="background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-sm); padding: 1rem; transition: var(--transition);">
                            <div style="font-weight: 700; margin-bottom: 0.25rem; font-size: 0.9rem; color: var(--secondary);">Caso 3: Tensión y Agotamiento Mentales</div>
                            <p style="font-size: 0.85rem; margin-bottom: 0.75rem; color: var(--text);">Docente abrumado y con insomnio por carga de reportes y mala comunicación.</p>
                            <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;" class="case-options">
                                <button class="btn btn-outline btn-sm" onclick="Modulo5.solveCase(3, 'Biológico', this)">🦠 Biológico</button>
                                <button class="btn btn-outline btn-sm" onclick="Modulo5.solveCase(3, 'Psicosocial', this)">🧠 Psicosocial</button>
                                <button class="btn btn-outline btn-sm" onclick="Modulo5.solveCase(3, 'Seguridad', this)">⚡ Seguridad</button>
                            </div>
                            <div class="case-feedback hidden" style="margin-top: 0.75rem; font-size: 0.85rem; border-top: 1px solid var(--border); padding-top: 0.5rem; line-height: 1.4;"></div>
                        </div>

                        <!-- Case 4 -->
                        <div class="case-card" id="case-4" style="background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-sm); padding: 1rem; transition: var(--transition);">
                            <div style="font-weight: 700; margin-bottom: 0.25rem; font-size: 0.9rem; color: var(--secondary);">Caso 4: Sismo en la Sede</div>
                            <p style="font-size: 0.85rem; margin-bottom: 0.75rem; color: var(--text);">Movimiento telúrico de 5.5 de magnitud detectado en el transcurso de una jornada.</p>
                            <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;" class="case-options">
                                <button class="btn btn-outline btn-sm" onclick="Modulo5.solveCase(4, 'Seguridad', this)">⚡ Seguridad</button>
                                <button class="btn btn-outline btn-sm" onclick="Modulo5.solveCase(4, 'Biológico', this)">🦠 Biológico</button>
                                <button class="btn btn-outline btn-sm" onclick="Modulo5.solveCase(4, 'Natural', this)">🌊 Natural</button>
                            </div>
                            <div class="case-feedback hidden" style="margin-top: 0.75rem; font-size: 0.85rem; border-top: 1px solid var(--border); padding-top: 0.5rem; line-height: 1.4;"></div>
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
                    <p>Responde 5 preguntas sobre Peligros, Autocuidado y Equipos. Necesitas un 80% para aprobar.</p>
                    <button class="btn btn-accent" onclick="App.startQuiz(5)">Comenzar Evaluación</button>
                </div>
            `
        }
    ],

    // ========================================
    // Interactive Handlers
    // ========================================
    pausaTimer: null,

    initSection(sectionId) {
        // Cleanup resources when leaving a section
        if (sectionId !== 'pausas-activas' && this.pausaTimer) {
            clearInterval(this.pausaTimer);
            this.pausaTimer = null;
        }
    },

    signCompromiso() {
        const btn = document.getElementById('btn-sign-compromiso');
        const text = document.getElementById('compromiso-firmado');
        if (btn && text) {
            btn.classList.add('hidden');
            text.classList.remove('hidden');
            if (typeof App !== 'undefined' && App.launchConfetti) {
                App.launchConfetti();
            }
        }
    },

    showRoleDetail(role) {
        const card = document.getElementById('role-detail-card');
        const title = document.getElementById('role-detail-title');
        const text = document.getElementById('role-detail-text');
        
        if (!card || !title || !text) return;
        
        const details = {
            docente: {
                title: 'Docente 👩‍🏫 Liderazgo Preventivo',
                text: 'Eres el líder preventivo en aulas y laboratorios. Reporta de inmediato cualquier anomalía física (cables sueltos, sillas defectuosas), vigila que las rutas de evacuación estén totalmente despejadas y promueve estiramientos (pausas activas oculares y físicas) con tus estudiantes en clases largas.'
            },
            admin: {
                title: 'Administrativo 💼 Ergonomía Digital',
                text: 'Al estar sentado frente a un computador la mayor parte de tu jornada, estás expuesto al peligro biomecánico. Configura tu monitor a la altura de tus ojos, apoya los brazos sobre el escritorio con los hombros relajados y haz pausas cada 2 horas para levantarte de la silla.'
            },
            operativo: {
                title: 'Operativo 🔧 Seguridad y EPP',
                text: 'La seguridad industrial es tu prioridad. Usa siempre tus Elementos de Protección Personal (EPP), inspecciona físicamente tus herramientas antes de iniciar labores, reporta cualquier máquina defectuosa y nunca realices mantenimientos a equipos conectados a la energía.'
            }
        };

        const info = details[role];
        if (info) {
            title.textContent = info.title;
            text.textContent = info.text;
            card.classList.remove('hidden');
            card.style.animation = 'fadeInUp 0.3s ease-out';
        }
    },

    checkLegalTrivia(button, answer) {
        const feedback = document.getElementById('legal-trivia-feedback');
        if (!feedback) return;

        const container = button.parentElement;
        container.querySelectorAll('button').forEach(btn => {
            btn.style.borderColor = 'var(--border)';
            btn.style.background = 'transparent';
            btn.style.color = 'var(--text)';
        });

        feedback.classList.remove('hidden');

        if (answer === 'B') {
            button.style.borderColor = 'var(--success)';
            button.style.background = 'rgba(46,150,113,0.1)';
            button.style.color = 'var(--success)';
            feedback.innerHTML = '🎉 ¡Correcto! La Guía Técnica Colombiana GTC 45 es la norma y metodología oficial para identificar peligros y valorar riesgos en Colombia.';
            feedback.style.color = 'var(--success)';
            if (typeof App !== 'undefined' && App.launchConfetti) App.launchConfetti();
        } else {
            button.style.borderColor = 'var(--danger)';
            button.style.background = 'rgba(231,76,60,0.1)';
            button.style.color = 'var(--danger)';
            if (answer === 'A') {
                feedback.innerHTML = '❌ Incorrecto. La Ley 1562 de 2012 reforma el Sistema de Riesgos Laborales en el país, pero la categorización metodológica específica corresponde a la GTC 45.';
            } else {
                feedback.innerHTML = '❌ Incorrecto. El Decreto 1072 de 2015 obliga a implementar el SG-SST completo bajo el ciclo PHVA, pero no define las 7 categorías específicas (eso es de la GTC 45).';
            }
            feedback.style.color = 'var(--danger)';
        }
    },

    checkStress(level) {
        const card = document.getElementById('stress-feedback-card');
        const title = document.getElementById('stress-feedback-title');
        const text = document.getElementById('stress-feedback-text');

        if (!card || !title || !text) return;

        card.classList.remove('hidden');
        card.classList.remove('success', 'warning', 'danger');

        if (level === 'A') {
            card.classList.add('success');
            card.style.borderLeftColor = 'var(--success)';
            title.innerHTML = '🟢 Bienestar Estable';
            text.innerHTML = '¡Excelente! Tienes hábitos saludables y control sobre tus actividades. Recuerda continuar realizando pausas activas programadas y ejercicios visuales para proteger tu salud en el tiempo.';
        } else if (level === 'B') {
            card.classList.add('warning');
            card.style.borderLeftColor = 'var(--accent)';
            title.innerHTML = '🟡 Alerta de Tensión';
            text.innerHTML = 'Tu organismo está acumulando cansancio físico y mental. Te aconsejamos estructurar tu jornada laboral por prioridades, respetar tus horas de descanso en casa y hacer pausas físicas cada 2 horas.';
        } else {
            card.classList.add('danger');
            card.style.borderLeftColor = 'var(--danger)';
            title.innerHTML = '🔴 Nivel de Sobrecarga';
            text.innerHTML = 'Es prioritario cuidar de tu bienestar psicosocial. Te recomendamos coordinar un espacio de priorización con tu líder de área, hacer pausas conscientes de respiración profunda y ponerte en contacto con el Comité de Convivencia Laboral (<strong>comiteconvivencialaboral@cun.edu.co</strong>) para recibir asesoramiento y acompañamiento.';
        }
        card.style.animation = 'fadeInUp 0.3s ease-out';
    },

    checkEquiposTrivia(button, answer) {
        const feedback = document.getElementById('equipos-trivia-feedback');
        if (!feedback) return;

        const container = button.parentElement;
        container.querySelectorAll('button').forEach(btn => {
            btn.style.borderColor = 'var(--border)';
            btn.style.background = 'transparent';
            btn.style.color = 'var(--text)';
        });

        feedback.classList.remove('hidden');

        if (answer === 'B') {
            button.style.borderColor = 'var(--success)';
            button.style.background = 'rgba(46,150,113,0.1)';
            button.style.color = 'var(--success)';
            feedback.innerHTML = '🎉 ¡Correcto! Antes de limpiar, retirar atascos de papel o manipular los mecanismos de cualquier equipo de oficina, debes apagarlo y desconectarlo completamente del enchufe para prevenir incidentes por atrapamiento o choque eléctrico.';
            feedback.style.color = 'var(--success)';
            if (typeof App !== 'undefined' && App.launchConfetti) App.launchConfetti();
        } else {
            button.style.borderColor = 'var(--danger)';
            button.style.background = 'rgba(231,76,60,0.1)';
            button.style.color = 'var(--danger)';
            if (answer === 'A') {
                feedback.innerHTML = '❌ Incorrecto. Intentar manipular partes internas de un equipo encendido conlleva un riesgo alto de atrapamiento de dedos, manos o cabello en los rodillos mecánicos.';
            } else {
                feedback.innerHTML = '❌ Incorrecto. Insertar objetos metálicos en el interior de una máquina conectada a la energía eléctrica puede originar un arco eléctrico, quemaduras y daños graves del hardware.';
            }
            feedback.style.color = 'var(--danger)';
        }
    },

    startPausaTimer() {
        const display = document.getElementById('timer-display');
        const instructions = document.getElementById('timer-instructions');
        const btn = document.getElementById('btn-start-pausa');

        if (!display || !instructions || !btn) return;

        if (this.pausaTimer) {
            clearInterval(this.pausaTimer);
        }

        btn.disabled = true;
        btn.textContent = '⏱️ En progreso...';

        let timeLeft = 30;
        display.textContent = timeLeft;

        const steps = [
            { time: 30, text: '🧘 Gira suavemente el cuello de lado a lado por 10 segundos...' },
            { time: 20, text: '👐 Estira tus brazos hacia el frente y mueve tus muñecas en círculos...' },
            { time: 10, text: '👃 Cierra los ojos e inhala profundamente... Exhala lento por la boca...' }
        ];

        const updateInstructions = (time) => {
            const step = steps.find(s => time <= s.time && time > (s.time - 10));
            if (step) {
                instructions.textContent = step.text;
            }
        };

        updateInstructions(timeLeft);

        this.pausaTimer = setInterval(() => {
            timeLeft--;
            display.textContent = timeLeft;
            updateInstructions(timeLeft);

            if (timeLeft <= 0) {
                clearInterval(this.pausaTimer);
                this.pausaTimer = null;
                
                display.textContent = '🎉';
                instructions.textContent = '¡Excelente! Has finalizado tu pausa activa rápida. Vuelve a tus tareas con energía.';
                btn.disabled = false;
                btn.textContent = '▶️ Iniciar de Nuevo';
                
                if (typeof App !== 'undefined' && App.launchConfetti) {
                    App.launchConfetti();
                }
            }
        }, 1000);
    },

    solveCase(caseId, dangerType, button) {
        const card = document.getElementById(`case-${caseId}`);
        if (!card) return;

        const feedback = card.querySelector('.case-feedback');
        const options = card.querySelector('.case-options');
        if (!feedback || !options) return;

        options.querySelectorAll('button').forEach(btn => {
            btn.style.borderColor = 'var(--border)';
            btn.style.background = 'transparent';
            btn.style.color = 'var(--text)';
        });

        feedback.classList.remove('hidden');

        const caseAnswers = {
            1: {
                correct: 'Biomecánico',
                success: '🎉 ¡Correcto! El hormigueo e inflamación por movimientos repetitivos y posturas prolongadas corresponden al <strong>Peligro Biomecánico</strong>. El autocuidado ideal consiste en pausas con estiramientos de flexores y soporte ergonómico.',
                fail: '❌ Incorrecto. Aunque produce dolor y tensión, el origen directo reside en las posturas repetitivas y estáticas del cuerpo (Biomecánico).'
            },
            2: {
                correct: 'Físico',
                success: '🎉 ¡Correcto! El ruido es una energía mecánica del ambiente laboral que penetra los oídos y puede causar fatiga o hipoacusia, catalogándose como <strong>Peligro Físico</strong>.',
                fail: '❌ Incorrecto. El ruido es una energía que altera el medio ambiente y se clasifica como físico (no químico ni originado directamente por sismos).'
            },
            3: {
                correct: 'Psicosocial',
                success: '🎉 ¡Correcto! Las demandas excesivas, tensiones de jornada laboral y el clima organizativo que afectan el equilibrio emocional se asocian al <strong>Peligro Psicosocial</strong>.',
                fail: '❌ Incorrecto. Los factores emocionales y de organización interna pertenecen estrictamente al área psicosocial, no a la biológica.'
            },
            4: {
                correct: 'Natural',
                success: '🎉 ¡Correcto! Los sismos y terremotos corresponden a movimientos naturales de la Tierra incontrolables por el hombre, englobándose en <strong>Fenómenos Naturales</strong>.',
                fail: '❌ Incorrecto. Corresponde a un evento geográfico incontrolable del planeta, por lo tanto es un fenómeno natural.'
            }
        };

        const answers = caseAnswers[caseId];
        if (answers) {
            if (dangerType === answers.correct) {
                button.style.borderColor = 'var(--success)';
                button.style.background = 'rgba(46,150,113,0.1)';
                button.style.color = 'var(--success)';
                feedback.innerHTML = answers.success;
                feedback.style.color = 'var(--success)';
                if (typeof App !== 'undefined' && App.launchConfetti) App.launchConfetti();
            } else {
                button.style.borderColor = 'var(--danger)';
                button.style.background = 'rgba(231,76,60,0.1)';
                button.style.color = 'var(--danger)';
                feedback.innerHTML = answers.fail;
                feedback.style.color = 'var(--danger)';
            }
        }
    }
};
