/* ========================================
   Módulo 3: Accidente, Incidente y Enfermedad Laboral
   ======================================== */
const Modulo3 = {
    id: 3,
    titulo: 'Accidente, Incidente y Enfermedad',
    subtitulo: 'Clasificación, reporte e investigación',
    tiempo: 15,
    secciones: [
        {
            id: 'introduccion',
            titulo: 'Introducción',
            contenido: () => `
                <div class="section-title">⚡ Introducción al Módulo 3</div>
                <p class="section-subtitle">Aprende a identificar, reportar e investigar los eventos laborales en la CUN</p>

                <div class="video-container">
                    <iframe src="https://www.youtube-nocookie.com/embed/S1QoOLQIk5E" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe>
                </div>
                <p class="video-caption">📹 Introducción al Módulo 3 — Conceptos Iniciales</p>

                <div class="concept-card">
                    <h4>📋 Objetivos del Módulo</h4>
                    <p>En esta sección abordaremos cómo diferenciar un accidente de trabajo, un incidente laboral y una enfermedad laboral, además de conocer las obligaciones y plazos legales para su reporte e investigación bajo la normativa colombiana.</p>
                </div>

                <div class="info-box success" style="align-items: center;">
                    <img src="assets/img/mascot_investigator.jpg" alt="Mascota Investigador" style="width: 60px; height: 60px; object-fit: cover; border-radius: 50%; margin-right: 1rem; border: 2px solid #2ECC71;">
                    <div class="info-box-content">
                        <strong>Prevención activa:</strong> Conocer los riesgos y saber cómo actuar en caso de un evento es el primer paso para proteger tu vida y la de tus compañeros.
                    </div>
                </div>
            `
        },
        {
            id: 'marco_legal',
            titulo: 'Marco Legal y Conceptos',
            contenido: () => `
                <div class="section-title">⚖️ Marco Legal y Conceptos</div>
                <p class="section-subtitle">Diferencias técnicas entre Accidente, Incidente y Enfermedad Laboral</p>

                <div class="video-container">
                    <iframe src="https://www.youtube-nocookie.com/embed/WZfIGlUqkmI" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe>
                </div>
                <p class="video-caption">📹 Marco Legal y Definición de Eventos en Colombia</p>

                <div class="concept-map-container">
                    <div class="concept-map-title">🗺️ Mapa Conceptual — Clasificación de Eventos (Colombia)</div>
                    <svg viewBox="0 0 660 320" class="concept-map-svg" xmlns="http://www.w3.org/2000/svg">
                        <line class="cm-connector" x1="330" y1="50" x2="110" y2="140" stroke="#E74C3C" stroke-width="2"/>
                        <line class="cm-connector" x1="330" y1="50" x2="330" y2="140" stroke="#F18F01" stroke-width="2"/>
                        <line class="cm-connector" x1="330" y1="50" x2="550" y2="140" stroke="#2E86AB" stroke-width="2"/>
                        <line class="cm-connector" x1="110" y1="190" x2="110" y2="265" stroke="#E74C3C" stroke-width="1.5"/>
                        <line class="cm-connector" x1="330" y1="190" x2="330" y2="265" stroke="#F18F01" stroke-width="1.5"/>
                        <line class="cm-connector" x1="550" y1="190" x2="550" y2="265" stroke="#2E86AB" stroke-width="1.5"/>
                        <text class="cm-label" x="195" y="90" text-anchor="middle" fill="#7F8C8D">produce lesión</text>
                        <text class="cm-label" x="330" y="100" text-anchor="middle" fill="#7F8C8D">es advertencia</text>
                        <text class="cm-label" x="465" y="90" text-anchor="middle" fill="#7F8C8D">por exposición</text>
                        <g class="cm-box" data-icon="⚡" data-title="Eventos Laborales" data-info="El Sistema de Riesgos Laborales en Colombia clasifica los eventos de salud que ocurren en el trabajo para definir la cobertura médica, económica y las acciones preventivas obligatorias.">
                            <rect x="230" y="15" width="200" height="50" rx="8" fill="#1B3A5C" stroke="#F18F01" stroke-width="2"/>
                            <text x="330" y="45" text-anchor="middle" fill="white" font-size="12" font-weight="bold" font-family="Poppins">⚡ Eventos Laborales</text>
                        </g>
                        <g class="cm-box" data-icon="💥" data-title="Accidente de Trabajo" data-info="Suceso repentino por causa o con ocasión del trabajo que produce lesión orgánica, perturbación funcional, psiquiátrica, invalidez o muerte (Art. 3 Ley 1562 de 2012).">
                            <rect x="30" y="140" width="160" height="50" rx="8" fill="#E74C3C" stroke="#C0392B" stroke-width="2"/>
                            <text x="110" y="170" text-anchor="middle" fill="white" font-size="11" font-weight="600" font-family="Inter">💥 Accidente AT</text>
                        </g>
                        <g class="cm-box" data-icon="⚡" data-title="Incidente Laboral" data-info="Suceso en el curso del trabajo que tuvo el potencial de ser un accidente, pero en el que no hubo lesiones ni daños (Art. 3 Res. 1401 de 2007). Es un 'casi-accidente'.">
                            <rect x="250" y="140" width="160" height="50" rx="8" fill="#F18F01" stroke="#E67E22" stroke-width="2"/>
                            <text x="330" y="170" text-anchor="middle" fill="white" font-size="11" font-weight="600" font-family="Inter">⚡ Incidente</text>
                        </g>
                        <g class="cm-box" data-icon="🏥" data-title="Enfermedad Laboral" data-info="La contraída como resultado de la exposición a factores de riesgo inherentes a la actividad laboral o del medio ambiente de trabajo (Art. 4 Ley 1562 de 2012).">
                            <rect x="470" y="140" width="160" height="50" rx="8" fill="#2E86AB" stroke="#1B6E94" stroke-width="2"/>
                            <text x="550" y="170" text-anchor="middle" fill="white" font-size="11" font-weight="600" font-family="Inter">🏥 Enfermedad EL</text>
                        </g>
                        <g class="cm-box" data-icon="💥" data-title="Características del AT" data-info="El accidente de trabajo es súbito y repentino. Ej: caída de una escalera con fractura. Ocurre 'por causa' (realizando la labor contratada) o 'con ocasión' (bajo órdenes del empleador o en su representación).">
                            <rect x="15" y="265" width="190" height="45" rx="6" fill="white" stroke="#E74C3C" stroke-width="1.5"/>
                            <text x="110" y="283" text-anchor="middle" fill="#2C3E50" font-size="9.5" font-family="Inter">Suceso repentino con lesión</text>
                            <text x="110" y="299" text-anchor="middle" fill="#7F8C8D" font-size="8.5" font-family="Inter">Ej: caída con fractura</text>
                        </g>
                        <g class="cm-box" data-icon="⚡" data-title="Características del Incidente" data-info="Es una señal de alerta preventiva. No genera incapacidades ni daños físicos, pero advierte sobre condiciones peligrosas. Ej: resbalar en un pasillo mojado pero lograr sostenerse de la pared sin caer.">
                            <rect x="235" y="265" width="190" height="45" rx="6" fill="white" stroke="#F18F01" stroke-width="1.5"/>
                            <text x="330" y="283" text-anchor="middle" fill="#2C3E50" font-size="9.5" font-family="Inter">Sin daño pero con riesgo</text>
                            <text x="330" y="299" text-anchor="middle" fill="#7F8C8D" font-size="8.5" font-family="Inter">Ej: resbalón sin caída</text>
                        </g>
                        <g class="cm-box" data-icon="🏥" data-title="Características de la EL" data-info="Se desarrolla de forma gradual por la exposición prolongada a agentes de riesgo (biomecánicos, físicos, psicosociales). Regulado por la tabla del Decreto 1477 de 2014. Ej: túnel carpiano.">
                            <rect x="455" y="265" width="190" height="45" rx="6" fill="white" stroke="#2E86AB" stroke-width="1.5"/>
                            <text x="550" y="283" text-anchor="middle" fill="#2C3E50" font-size="9.5" font-family="Inter">Exposición prolongada</text>
                            <text x="550" y="299" text-anchor="middle" fill="#7F8C8D" font-size="8.5" font-family="Inter">Ej: lumbalgia o túnel carpiano</text>
                        </g>
                    </svg>
                </div>

                <div class="comparison-card">
                    <div class="comparison-side danger-side">
                        <h4>💥 Accidente AT</h4>
                        <ul>
                            <li>Suceso <strong>repentino e inesperado</strong></li>
                            <li>Genera <strong>lesión física o mental</strong></li>
                            <li>Ocurre por causa o con ocasión del trabajo</li>
                        </ul>
                    </div>
                    <div class="comparison-divider">VS</div>
                    <div class="comparison-side accent-side">
                        <h4>⚡ Incidente</h4>
                        <ul>
                            <li>Evento <strong>no planificado</strong></li>
                            <li><strong>No causa daño</strong> ni lesiones</li>
                            <li>Es una <strong>alerta preventiva crítica</strong></li>
                        </ul>
                    </div>
                </div>

                <div class="flip-cards-grid">
                    <div class="flip-card" onclick="this.classList.toggle('flipped')">
                        <div class="flip-card-inner">
                            <div class="flip-card-front" style="background:linear-gradient(135deg, #E74C3C, #C0392B)">
                                <span class="flip-icon">💥</span>
                                <h4>Accidente de Trabajo</h4>
                                <span class="flip-hint">Toca para ver más</span>
                            </div>
                            <div class="flip-card-back">
                                <h4>Ley 1562 de 2012 (Art. 3)</h4>
                                <p>Causa lesión orgánica, perturbación funcional/psiquiátrica, invalidez o muerte. Incluye traslados si el transporte lo da el empleador, y actividades recreativas en representación de la empresa.</p>
                            </div>
                        </div>
                    </div>
                    <div class="flip-card" onclick="this.classList.toggle('flipped')">
                        <div class="flip-card-inner">
                            <div class="flip-card-front" style="background:linear-gradient(135deg, #F18F01, #E67E22)">
                                <span class="flip-icon">⚡</span>
                                <h4>Incidente Laboral</h4>
                                <span class="flip-hint">Toca para ver más</span>
                            </div>
                            <div class="flip-card-back">
                                <h4>Resolución 1401 de 2007</h4>
                                <p>Suceso que tuvo el potencial de ser un accidente. Es el "casi-accidente" (ej. caerse una carpeta cerca de alguien sin golpearlo). Reportarlo a tiempo evita futuros accidentes reales.</p>
                            </div>
                        </div>
                    </div>
                    <div class="flip-card" onclick="this.classList.toggle('flipped')">
                        <div class="flip-card-inner">
                            <div class="flip-card-front" style="background:linear-gradient(135deg, #2E86AB, #1B6E94)">
                                <span class="flip-icon">🏥</span>
                                <h4>Enfermedad Laboral</h4>
                                <span class="flip-hint">Toca para ver más</span>
                            </div>
                            <div class="flip-card-back">
                                <h4>Ley 1562 de 2012 (Art. 4)</h4>
                                <p>Contraída por exposición continua a factores de riesgo inherentes a la labor. Ejemplos comunes: síndrome del túnel carpiano o lumbalgia por postura inadecuada prolongada.</p>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },
        {
            id: 'reporte',
            titulo: 'Pasos para Reportar',
            contenido: () => `
                <div class="section-title">📞 Pasos para Reportar un Evento</div>
                <p class="section-subtitle">El reporte rápido es un deber y permite recibir atención oportuna</p>

                <div class="video-container">
                    <iframe src="https://www.youtube-nocookie.com/embed/uo4F0Dc-A-c" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe>
                </div>
                <p class="video-caption">📹 Flujo de Reporte y Tiempos de Ley</p>

                <div class="step-progress">
                    <div class="step-progress-line" style="width:100%"></div>
                    <div class="step-item completed">
                        <div class="step-circle">1️⃣</div>
                        <span class="step-label">Notifica</span>
                    </div>
                    <div class="step-item completed">
                        <div class="step-circle">2️⃣</div>
                        <span class="step-label">Reporta</span>
                    </div>
                    <div class="step-item completed">
                        <div class="step-circle">3️⃣</div>
                        <span class="step-label">Atención</span>
                    </div>
                </div>

                <div class="timeline">
                    <div class="timeline-item" style="animation-delay:0.1s">
                        <h4>1️⃣ Notificación Inmediata</h4>
                        <p>Informa de inmediato a tu <strong>líder o coordinador directo</strong> y al área de SST.</p>
                    </div>
                    <div class="timeline-item" style="animation-delay:0.2s">
                        <h4>2️⃣ Reporte por Correo y QR</h4>
                        <p>Envía los detalles (fecha, hora, lugar, descripción) a <strong>sst@cun.edu.co</strong> o regístralo a través del <strong>QR de Novedades SST</strong> de tu sede.</p>
                    </div>
                    <div class="timeline-item" style="animation-delay:0.3s">
                        <h4>3️⃣ Atención Médica ARL</h4>
                        <p>Dirígete a la IPS autorizada por nuestra ARL <strong>AURORA Seguros de Vida</strong> o recibe los primeros auxilios de la brigada de la sede.</p>
                    </div>
                </div>

                <div class="concept-card danger">
                    <h4>⚠️ Plazo Límite Legal (ARL)</h4>
                    <p>La CUN tiene un plazo máximo de <strong>dos (2) días hábiles (48 horas)</strong> para reportar formalmente el accidente a la ARL y EPS utilizando el formato FURAT/FUREL.</p>
                </div>
            `
        },
        {
            id: 'investigacion',
            titulo: 'Investigación de Eventos',
            contenido: () => `
                <div class="section-title">🔍 Investigación de Accidentes e Incidentes</div>
                <p class="section-subtitle">Proceso obligatorio para identificar causas y prevenir repeticiones</p>

                <div class="video-container">
                    <iframe src="https://www.youtube-nocookie.com/embed/4toKQtN3_Q0" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe>
                </div>
                <p class="video-caption">📹 Investigación de Accidentes según Res. 1401 de 2007</p>

                <div class="concept-card">
                    <h4>📋 Plazo Legal para Investigar</h4>
                    <p>De acuerdo con la Resolución 1401 de 2007, todo accidente o incidente laboral debe ser investigado dentro de los <strong>quince (15) días calendario</strong> siguientes a su ocurrencia.</p>
                </div>

                <div class="takeaway-box">
                    <h4>👥 El Equipo Investigador Obligatorio (Art. 7 Res. 1401)</h4>
                    <ul>
                        <li>👤 <strong>El Jefe o Supervisor Inmediato:</strong> Conoce las labores del trabajador afectado.</li>
                        <li>👤 <strong>Un representante del COPASST:</strong> Aporta la mirada y vigilancia de los trabajadores.</li>
                        <li>👤 <strong>El encargado de SG-SST:</strong> Profesional técnico en higiene y seguridad industrial.</li>
                        <li><em>*Nota: Si el accidente es catalogado como grave o mortal, debe participar obligatoriamente un profesional con licencia vigente en salud ocupacional.</em></li>
                    </ul>
                </div>
            `
        },
        {
            id: 'causas',
            titulo: 'Análisis de Causa Raíz',
            contenido: () => `
                <div class="section-title">🧠 Análisis de Causa Raíz</div>
                <p class="section-subtitle">Metodologías para encontrar por qué ocurrió el evento y corregirlo</p>

                <div class="video-container">
                    <iframe src="https://www.youtube-nocookie.com/embed/iFiZ945fr-k" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe>
                </div>
                <p class="video-caption">📹 Metodologías de Análisis: 5 Porqués, Ishikawa y Árbol de Causas</p>

                <div class="tabs-container">
                    <div class="tabs-nav">
                        <button class="tab-btn active" data-tab="5whys">❓ Los 5 Porqués</button>
                        <button class="tab-btn" data-tab="ishikawa">🐟 Ishikawa (6M)</button>
                        <button class="tab-btn" data-tab="tree">🌳 Árbol de Causas</button>
                    </div>
                    
                    <div class="tab-content active" id="tab-5whys">
                        <div class="concept-card">
                            <h4>❓ Metodología de los 5 Porqués</h4>
                            <p>Consiste en preguntar de manera consecutiva e inductiva "por qué" ocurrió el evento hasta llegar al fallo de gestión (Causa Raíz).</p>
                            
                            <div class="info-box success" style="margin-top: 1rem;">
                                <div class="info-box-content" style="font-size: 0.95rem;">
                                    <strong>Ejemplo práctico (Caída en Sede G):</strong><br>
                                    • <em>1. ¿Por qué resbaló?</em> El piso estaba mojado.<br>
                                    • <em>2. ¿Por qué estaba mojado?</em> Se derramó agua de un aire acondicionado dañado.<br>
                                    • <em>3. ¿Por qué estaba dañado?</em> No se le hizo mantenimiento preventivo.<br>
                                    • <em>4. ¿Por qué no se hizo?</em> No se programó en la agenda de mantenimiento.<br>
                                    • <em>5. ¿Por qué no se programó?</em> (Causa Raíz) Falla en la planeación y asignación de prioridades de seguridad en el plan de mantenimiento.
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="tab-content" id="tab-ishikawa">
                        <div class="concept-card">
                            <h4>🐟 Diagrama de Ishikawa (Espina de Pescado)</h4>
                            <p>Permite agrupar las causas de un accidente en seis categorías principales (las 6M):</p>
                            <ul>
                                <li><strong>Mano de Obra:</strong> Falta de capacitación, cansancio, actos inseguros.</li>
                                <li><strong>Método:</strong> Procedimientos de trabajo inexistentes o confusos.</li>
                                <li><strong>Materiales:</strong> Herramientas defectuosas o insumos inadecuados.</li>
                                <li><strong>Maquinaria:</strong> Fallas en equipos o falta de mantenimiento.</li>
                                <li><strong>Medio Ambiente:</strong> Iluminación, orden, limpieza, clima.</li>
                                <li><strong>Medida:</strong> Falta de control, inspecciones de seguridad o supervisión.</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="tab-content" id="tab-tree">
                        <div class="concept-card">
                            <h4>🌳 El Árbol de Causas</h4>
                            <p>Método gráfico que reconstruye la cadena de hechos hacia atrás, partiendo de la lesión final. Diferencia claramente entre:</p>
                            <ul>
                                <li><strong>Causas Inmediatas:</strong> Los Actos Inseguros (conducta) y Condiciones Inseguras (infraestructura).</li>
                                <li><strong>Causas Básicas:</strong> Factores Personales (capacidad, motivación) y Factores del Trabajo (diseño del puesto, compras, gestión).</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `
        },
        {
            id: 'casos',
            titulo: 'Casos Prácticos',
            contenido: () => `
                <div class="section-title">🎯 Casos Prácticos</div>
                <p class="section-subtitle">Clasifica los siguientes eventos según lo aprendido en el módulo</p>

                <div class="video-container" style="margin-bottom: 1.5rem;">
                    <iframe src="https://www.youtube-nocookie.com/embed/iKxqgLDn2Do" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe>
                </div>
                <p class="video-caption">📹 Casos Prácticos y Ejemplos de Clasificación</p>

                <div class="scenario-card">
                    <h4>📋 Caso 1</h4>
                    <div class="scenario-desc">Un colaborador se inclina sobre su silla de oficina para recoger una carpeta; la silla se tambalea bruscamente y casi se cae, pero logra reaccionar a tiempo sin sufrir ninguna lesión.</div>
                    <div class="scenario-options" data-scenario="m3c1">
                        <div class="scenario-option" onclick="Modulo3.checkCase(this, 'm3c1', false)">Accidente de Trabajo</div>
                        <div class="scenario-option" onclick="Modulo3.checkCase(this, 'm3c1', true)">Incidente Laboral</div>
                        <div class="scenario-option" onclick="Modulo3.checkCase(this, 'm3c1', false)">Enfermedad Laboral</div>
                    </div>
                    <div class="scenario-result" id="result-m3c1"></div>
                </div>

                <div class="scenario-card">
                    <h4>📋 Caso 2</h4>
                    <div class="scenario-desc">Un colaborador se inclina sobre su silla de oficina para recoger una carpeta; la silla se rompe de improvisto, cae al piso y sufre una fractura de coxis.</div>
                    <div class="scenario-options" data-scenario="m3c2">
                        <div class="scenario-option" onclick="Modulo3.checkCase(this, 'm3c2', true)">Accidente de Trabajo</div>
                        <div class="scenario-option" onclick="Modulo3.checkCase(this, 'm3c2', false)">Incidente Laboral</div>
                        <div class="scenario-option" onclick="Modulo3.checkCase(this, 'm3c2', false)">Enfermedad Laboral</div>
                    </div>
                    <div class="scenario-result" id="result-m3c2"></div>
                </div>

                <div class="scenario-card">
                    <h4>📋 Caso 3</h4>
                    <div class="scenario-desc">Un colaborador presenta dolor lumbar crónico diagnosticado por el médico laboral, debido a que lleva 3 años usando esa misma silla defectuosa y sin diseño ergonómico.</div>
                    <div class="scenario-options" data-scenario="m3c3">
                        <div class="scenario-option" onclick="Modulo3.checkCase(this, 'm3c3', false)">Accidente de Trabajo</div>
                        <div class="scenario-option" onclick="Modulo3.checkCase(this, 'm3c3', false)">Incidente Laboral</div>
                        <div class="scenario-option" onclick="Modulo3.checkCase(this, 'm3c3', true)">Enfermedad Laboral</div>
                    </div>
                    <div class="scenario-result" id="result-m3c3"></div>
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
                    <p>Responde 5 preguntas sobre Accidente, Incidente y Enfermedad. Necesitas un 80% para aprobar.</p>
                    <button class="btn btn-accent" onclick="App.startQuiz(3)">Comenzar Evaluación</button>
                </div>
            `
        }
    ],

    checkCase(element, scenarioId, isCorrect) {
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
        const explanations = {
            'm3c1': 'Es un INCIDENTE porque no hubo lesión, pero fue una advertencia que pudo resultar en accidente.',
            'm3c2': 'Es un ACCIDENTE DE TRABAJO porque hubo un suceso repentino que produjo una lesión (fractura).',
            'm3c3': 'Es una ENFERMEDAD LABORAL porque resultó de la exposición prolongada a factores de riesgo (postura frente al computador).'
        };
        resultEl.textContent = isCorrect ? '✅ ¡Correcto!' : `❌ Incorrecto. ${explanations[scenarioId]}`;
    }
};
