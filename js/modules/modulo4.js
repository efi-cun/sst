/* ========================================
   Módulo 4: Actos y Condiciones Inseguras, Peligro y Riesgo
   ======================================== */
const Modulo4 = {
    id: 4,
    titulo: 'Actos y Condiciones Inseguras',
    subtitulo: 'Peligro, Riesgo y Normatividad',
    tiempo: 15,
    secciones: [
        {
            id: 'introduccion',
            titulo: 'Introducción',
            contenido: () => `
                <div class="section-title">⚠️ Introducción al Módulo 4</div>
                <p class="section-subtitle">Identificación de peligros y valoración de riesgos en el trabajo</p>

                <div class="video-container">
                    <iframe src="https://www.youtube-nocookie.com/embed/xH91A-C3SJU" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe>
                </div>
                <p class="video-caption">📹 Introducción al Módulo 4 — Conceptos Generales</p>

                <div class="concept-card">
                    <h4>📋 Objetivos de Aprendizaje</h4>
                    <p>En este módulo aprenderás a diferenciar entre un <strong>acto inseguro</strong> y una <strong>condición insegura</strong>, a distinguir técnicamente entre <strong>peligro y riesgo</strong> bajo la guía GTC 45, y a conocer las obligaciones del Decreto 1072 y la jerarquía de controles de seguridad.</p>
                </div>

                <div class="info-box success" style="align-items: center;">
                    <img src="assets/img/mascot_warning.jpg" alt="Mascota Inspector" style="width: 60px; height: 60px; object-fit: cover; border-radius: 50%; margin-right: 1rem; border: 2px solid #F18F01;">
                    <div class="info-box-content">
                        <strong>Prevención proactiva:</strong> Aprender a identificar a tiempo las fuentes de peligro en tu entorno laboral es clave para evitar incidentes y proteger la salud de todos.
                    </div>
                </div>
            `
        },
        {
            id: 'actos-condiciones',
            titulo: 'Acto vs Condición Insegura',
            contenido: () => `
                <div class="section-title">🚶 Acto Inseguro vs Condición Insegura</div>
                <p class="section-subtitle">Diferencia entre el comportamiento del trabajador y las circunstancias físicas del entorno</p>

                <div class="video-container">
                    <iframe src="https://www.youtube-nocookie.com/embed/TBO5j8DJ8fs" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe>
                </div>
                <p class="video-caption">📹 Actos y Condiciones Inseguras en el Entorno Laboral</p>

                <div class="concept-map-container">
                    <div class="concept-map-title">🗺️ Mapa Conceptual — Acto vs Condición Insegura</div>
                    <svg viewBox="0 0 660 300" class="concept-map-svg" xmlns="http://www.w3.org/2000/svg">
                        <line class="cm-connector" x1="330" y1="50" x2="130" y2="140" stroke="#E74C3C" stroke-width="2"/>
                        <line class="cm-connector" x1="330" y1="50" x2="530" y2="140" stroke="#F18F01" stroke-width="2"/>
                        <line class="cm-connector" x1="130" y1="190" x2="80" y2="255" stroke="#E74C3C" stroke-width="1.5"/>
                        <line class="cm-connector" x1="130" y1="190" x2="190" y2="255" stroke="#E74C3C" stroke-width="1.5"/>
                        <line class="cm-connector" x1="530" y1="190" x2="470" y2="255" stroke="#F18F01" stroke-width="1.5"/>
                        <line class="cm-connector" x1="530" y1="190" x2="590" y2="255" stroke="#F18F01" stroke-width="1.5"/>
                        <text class="cm-label" x="210" y="90" text-anchor="middle" fill="#7F8C8D">comportamiento</text>
                        <text class="cm-label" x="455" y="90" text-anchor="middle" fill="#7F8C8D">circunstancia</text>
                        <g class="cm-box">
                            <rect x="230" y="15" width="200" height="50" rx="8" fill="#1B3A5C" stroke="#F18F01" stroke-width="2"/>
                            <text x="330" y="45" text-anchor="middle" fill="white" font-size="12" font-weight="bold" font-family="Poppins">⚠️ Causas de Accidentes</text>
                        </g>
                        <g class="cm-box" style="cursor:pointer" data-icon="🚶" data-title="Acto Inseguro" data-info="Es cualquier acción, omisión o comportamiento directo del trabajador que lo expone a un riesgo de accidente. Ejemplos: no usar EPP, atajos en procedimientos, omitir normas o trabajar distraído.">
                            <rect x="45" y="140" width="170" height="50" rx="8" fill="#E74C3C" stroke="#C0392B" stroke-width="2"/>
                            <text x="130" y="170" text-anchor="middle" fill="white" font-size="11" font-weight="600" font-family="Inter">🚶 Acto Inseguro</text>
                        </g>
                        <g class="cm-box" style="cursor:pointer" data-icon="🏢" data-title="Condición Insegura" data-info="Es cualquier circunstancia física, mecánica o ambiental en el lugar de trabajo que representa un peligro. Ejemplos: cables eléctricos expuestos, iluminación deficiente, pisos mojados sin señalizar.">
                            <rect x="445" y="140" width="170" height="50" rx="8" fill="#F18F01" stroke="#E67E22" stroke-width="2"/>
                            <text x="530" y="170" text-anchor="middle" fill="white" font-size="11" font-weight="600" font-family="Inter">🏢 Condición Insegura</text>
                        </g>
                        <g class="cm-box" style="cursor:pointer" data-icon="🚫" data-title="No usar EPP" data-info="Ignorar el uso de los Elementos de Protección Personal es un acto inseguro crítico.">
                            <rect x="10" y="255" width="140" height="35" rx="6" fill="white" stroke="#E74C3C" stroke-width="1.5"/>
                            <text x="80" y="277" text-anchor="middle" fill="#2C3E50" font-size="9.5" font-family="Inter">No usar EPP</text>
                        </g>
                        <g class="cm-box" style="cursor:pointer" data-icon="📋" data-title="No seguir protocolos" data-info="Saltarse procedimientos o realizar atajos inseguros en la operación.">
                            <rect x="120" y="255" width="140" height="35" rx="6" fill="white" stroke="#E74C3C" stroke-width="1.5"/>
                            <text x="190" y="277" text-anchor="middle" fill="#2C3E50" font-size="9.5" font-family="Inter">No seguir protocolos</text>
                        </g>
                        <g class="cm-box" style="cursor:pointer" data-icon="💧" data-title="Piso Resbaladizo" data-info="Pisos mojados o con grasa que no se demarcan o limpian a tiempo.">
                            <rect x="400" y="255" width="140" height="35" rx="6" fill="white" stroke="#F18F01" stroke-width="1.5"/>
                            <text x="470" y="277" text-anchor="middle" fill="#2C3E50" font-size="9.5" font-family="Inter">Piso resbaladizo</text>
                        </g>
                        <g class="cm-box" style="cursor:pointer" data-icon="⚡" data-title="Cables Expuestos" data-info="Tomas sobrecargadas o cables eléctricos pelados expuestos en áreas de paso.">
                            <rect x="520" y="255" width="140" height="35" rx="6" fill="white" stroke="#F18F01" stroke-width="1.5"/>
                            <text x="590" y="277" text-anchor="middle" fill="#2C3E50" font-size="9.5" font-family="Inter">Cables expuestos</text>
                        </g>
                    </svg>
                </div>

                <div class="comparison-card">
                    <div class="comparison-side danger-side">
                        <h4>🚶 Acto Inseguro</h4>
                        <ul>
                            <li>Acción del <strong>trabajador</strong></li>
                            <li>Comportamiento <strong>humano</strong></li>
                            <li>Ej: no usar EPP, manipular sin formación</li>
                        </ul>
                    </div>
                    <div class="comparison-divider">VS</div>
                    <div class="comparison-side accent-side">
                        <h4>🏢 Condición Insegura</h4>
                        <ul>
                            <li>Circunstancia del <strong>entorno</strong></li>
                            <li>Condición <strong>física/locativa</strong></li>
                            <li>Ej: iluminación insuficiente, piso mojado</li>
                        </ul>
                    </div>
                </div>

                <div class="tabs-container">
                    <div class="tabs-nav">
                        <button class="tab-btn active" data-tab="actos">🚶 Acto Inseguro</button>
                        <button class="tab-btn" data-tab="condiciones">🏢 Condición Insegura</button>
                    </div>
                    <div class="tab-content active" id="tab-actos">
                        <div class="concept-card danger">
                            <h4>🚶 Acto Inseguro</h4>
                            <p>Cualquier <strong>acción o comportamiento del trabajador</strong> que pueda llevar a un accidente o incidente.</p>
                            <ul>
                                <li>Manipular maquinaria sin formación adecuada</li>
                                <li>No usar soportes ergonómicos corporativos</li>
                                <li>Realizar mantenimiento a equipos conectados</li>
                            </ul>
                        </div>
                    </div>
                    <div class="tab-content" id="tab-condiciones">
                        <div class="concept-card accent">
                            <h4>🏢 Condición Insegura</h4>
                            <p>Cualquier <strong>circunstancia física del entorno</strong> que pueda contribuir a la ocurrencia de un accidente.</p>
                            <ul>
                                <li>Superficies de trabajo resbaladizas u obstruidas</li>
                                <li>Conexiones eléctricas en mal estado o recargadas</li>
                                <li>Barandillas de escaleras sueltas o sin antideslizante</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `
        },
        {
            id: 'peligro-riesgo',
            titulo: 'Peligro vs Riesgo',
            contenido: () => `
                <div class="section-title">🔍 Peligro vs Riesgo</div>
                <p class="section-subtitle">Comprender la diferencia es clave para la prevención efectiva</p>

                <div class="video-container">
                    <iframe src="https://www.youtube-nocookie.com/embed/-BD30GkPWWU" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe>
                </div>
                <p class="video-caption">📹 Peligro vs Riesgo en el SG-SST</p>

                <div class="concept-map-container">
                    <div class="concept-map-title">🗺️ Mapa Conceptual — Peligro vs Riesgo (GTC 45)</div>
                    <svg viewBox="0 0 660 280" class="concept-map-svg" xmlns="http://www.w3.org/2000/svg">
                        <line class="cm-connector" x1="165" y1="50" x2="165" y2="120" stroke="#E74C3C" stroke-width="2"/>
                        <line class="cm-connector" x1="495" y1="50" x2="495" y2="120" stroke="#F18F01" stroke-width="2"/>
                        <line class="cm-connector" x1="165" y1="170" x2="165" y2="230" stroke="#E74C3C" stroke-width="1.5"/>
                        <line class="cm-connector" x1="495" y1="170" x2="495" y2="230" stroke="#F18F01" stroke-width="1.5"/>
                        <line class="cm-connector" x1="165" y1="170" x2="330" y2="230" stroke="#8E44AD" stroke-width="1.5" stroke-dasharray="6,4"/>
                        <line class="cm-connector" x1="495" y1="170" x2="330" y2="230" stroke="#8E44AD" stroke-width="1.5" stroke-dasharray="6,4"/>
                        <text class="cm-label" x="165" y="90" text-anchor="middle" fill="#7F8C8D">fuente de daño</text>
                        <text class="cm-label" x="495" y="90" text-anchor="middle" fill="#7F8C8D">probabilidad + severidad</text>
                        <g class="cm-box" style="cursor:pointer" data-icon="⚡" data-title="Peligro" data-info="Según la GTC 45, es la fuente, situación o acto con potencial de causar daño en la salud de los trabajadores. El peligro siempre está allí (ej. electricidad, altura).">
                            <rect x="85" y="15" width="160" height="50" rx="8" fill="#E74C3C" stroke="#C0392B" stroke-width="2"/>
                            <text x="165" y="45" text-anchor="middle" fill="white" font-size="13" font-weight="bold" font-family="Poppins">⚡ PELIGRO</text>
                        </g>
                        <g class="cm-box" style="cursor:pointer" data-icon="📊" data-title="Riesgo" data-info="Es la combinación de la probabilidad de que ocurra una exposición peligrosa y la severidad de las consecuencias de la misma. Nace al interactuar con el peligro.">
                            <rect x="415" y="15" width="160" height="50" rx="8" fill="#F18F01" stroke="#E67E22" stroke-width="2"/>
                            <text x="495" y="45" text-anchor="middle" fill="white" font-size="13" font-weight="bold" font-family="Poppins">📊 RIESGO</text>
                        </g>
                        <g class="cm-box" style="cursor:pointer" data-icon="⚡" data-title="Definición de Peligro" data-info="El peligro es intrínseco. Ej: cables pelados, herramientas rotas o el ruido continuo.">
                            <rect x="75" y="120" width="180" height="50" rx="8" fill="white" stroke="#E74C3C" stroke-width="2"/>
                            <text x="165" y="142" text-anchor="middle" fill="#2C3E50" font-size="10" font-weight="600" font-family="Inter">Fuente, situación o acto</text>
                            <text x="165" y="158" text-anchor="middle" fill="#7F8C8D" font-size="9" font-family="Inter">con potencial de daño</text>
                        </g>
                        <g class="cm-box" style="cursor:pointer" data-icon="📊" data-title="Evaluación del Riesgo" data-info="Se valora midiendo qué tan probable es que ocurra la exposición y qué tan grave será la consecuencia en la salud.">
                            <rect x="405" y="120" width="180" height="50" rx="8" fill="white" stroke="#F18F01" stroke-width="2"/>
                            <text x="495" y="142" text-anchor="middle" fill="#2C3E50" font-size="10" font-weight="600" font-family="Inter">Probabilidad + Severidad</text>
                            <text x="495" y="158" text-anchor="middle" fill="#7F8C8D" font-size="9" font-family="Inter">de la lesión o enfermedad</text>
                        </g>
                        <g class="cm-box" style="cursor:pointer" data-icon="⚡" data-title="Ejemplo de Peligro" data-info="Un piso recién trapeado sin delimitación es un peligro.">
                            <rect x="75" y="230" width="180" height="40" rx="6" fill="#E74C3C" stroke="#C0392B" stroke-width="1.5"/>
                            <text x="165" y="254" text-anchor="middle" fill="white" font-size="10" font-family="Inter">Ej: superficie irregular</text>
                        </g>
                        <g class="cm-box" style="cursor:pointer" data-icon="📊" data-title="Ejemplo de Riesgo" data-info="Caerse en ese piso mojado y fracturarse un brazo.">
                            <rect x="405" y="230" width="180" height="40" rx="6" fill="#F18F01" stroke="#E67E22" stroke-width="1.5"/>
                            <text x="495" y="254" text-anchor="middle" fill="white" font-size="10" font-family="Inter">Ej: caída → contusión</text>
                        </g>
                        <g class="cm-box" style="cursor:pointer" data-icon="🔗" data-title="Relación Peligro-Riesgo" data-info="El peligro es el 'tiburón en el agua'. El riesgo es 'entrar a nadar con el tiburón'. Sin exposición, el riesgo es cero.">
                            <rect x="240" y="230" width="180" height="40" rx="6" fill="#8E44AD" stroke="#6C3483" stroke-width="1.5"/>
                            <text x="330" y="254" text-anchor="middle" fill="white" font-size="10" font-weight="600" font-family="Inter">El peligro genera riesgo</text>
                        </g>
                    </svg>
                </div>

                <div class="flip-cards-grid">
                    <div class="flip-card" onclick="this.classList.toggle('flipped')">
                        <div class="flip-card-inner">
                            <div class="flip-card-front" style="background:linear-gradient(135deg, #E74C3C, #C0392B)">
                                <span class="flip-icon">⚡</span>
                                <h4>Peligro</h4>
                                <span class="flip-hint">Toca para ver más</span>
                            </div>
                            <div class="flip-card-back">
                                <h4>Peligro (GTC 45)</h4>
                                <p>Fuente, situación o acto con <strong>potencial de daño</strong> en términos de enfermedad o lesión. <strong>Ej:</strong> superficie irregular.</p>
                            </div>
                        </div>
                    </div>
                    <div class="flip-card" onclick="this.classList.toggle('flipped')">
                        <div class="flip-card-inner">
                            <div class="flip-card-front" style="background:linear-gradient(135deg, #F18F01, #E67E22)">
                                <span class="flip-icon">📊</span>
                                <h4>Riesgo</h4>
                                <span class="flip-hint">Toca para ver más</span>
                            </div>
                            <div class="flip-card-back">
                                <h4>Riesgo (GTC 45)</h4>
                                <p>Combinación de la <strong>probabilidad</strong> de que ocurra un evento peligroso y la <strong>severidad</strong> de la lesión o enfermedad. <strong>Ej:</strong> caída a nivel que genera contusión.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="info-box">
                    <span class="info-box-icon">💡</span>
                    <div class="info-box-content">
                        <strong>En resumen:</strong> El peligro es la <em>fuente</em> (piso irregular), el riesgo es la <em>probabilidad × severidad</em> (caída que genera contusión).
                    </div>
                </div>
            `
        },
        {
            id: 'normatividad',
            titulo: 'Decreto 1072 y GTC 45',
            contenido: () => `
                <div class="section-title">⚖️ Normatividad: Decreto 1072 y GTC 45</div>
                <p class="section-subtitle">Conoce los pilares legales y metodologías en Colombia para la prevención de riesgos</p>

                <div class="video-container">
                    <iframe src="https://www.youtube-nocookie.com/embed/VlWafQP42v0" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe>
                </div>
                <p class="video-caption">📹 Normatividad colombiana del SG-SST</p>

                <div class="concept-card">
                    <h4>📘 Decreto 1072 de 2015</h4>
                    <p>Es el Decreto Único Reglamentario del Sector Trabajo. En su Capítulo 6, obliga a todas las organizaciones en Colombia a estructurar un SG-SST mediante el ciclo de mejora continua PHVA.</p>
                </div>

                <div class="concept-card accent">
                    <h4>📙 Guía GTC 45 (ICONTEC)</h4>
                    <p>Es la Guía Técnica Colombiana para la Identificación de Peligros y Valoración de Riesgos. Define el marco metodológico para clasificar los peligros en las sedes y puestos de trabajo.</p>
                </div>

                <div class="info-box warning" style="text-align: center; display: block;">
                    <strong>🔍 Recursos Multimedia Disponibles</strong>
                    <p style="margin-top: 0.5rem; font-size: 0.9rem;">Haz clic en los botones de abajo para abrir los videos explicativos correspondientes a cada norma:</p>
                    
                    <div class="glowing-btn-container">
                        <button class="btn btn-glow-primary" onclick="App.openVideoPopup('Decreto 1072 de 2015 — Compendio Legal', 'https://www.youtube.com/watch?v=OGjeF-y7fKw')">
                            📹 Ver Video: Decreto 1072
                        </button>
                        <button class="btn btn-glow-accent" onclick="App.openVideoPopup('Guía Técnica GTC 45 — Matriz de Peligros', 'https://www.youtube.com/watch?v=GOBhjRuQ6Fw')">
                            📹 Ver Video: GTC 45
                        </button>
                    </div>
                </div>
            `
        },
        {
            id: 'calculo-riesgo',
            titulo: 'Cálculo de Riesgo',
            contenido: () => `
                <div class="section-title">📊 Cálculo y Evaluación de Riesgo</div>
                <p class="section-subtitle">Aprende cómo se valora técnicamente la prioridad de los riesgos</p>

                <div class="video-container">
                    <iframe src="https://www.youtube-nocookie.com/embed/7bjdz53JVr4" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe>
                </div>
                <p class="video-caption">📹 Metodología de Cálculo de Riesgo (Probabilidad x Consecuencia)</p>

                <div class="concept-card">
                    <h4>📐 Nivel de Riesgo = Nivel de Probabilidad × Nivel de Consecuencia</h4>
                    <p>En el SG-SST, la prioridad de intervención se calcula cruzando dos variables:</p>
                    <ul>
                        <li><strong>Probabilidad:</strong> ¿Qué tan viable es que ocurra la exposición al peligro? (Muy Alta, Alta, Media, Baja).</li>
                        <li><strong>Consecuencia (Severidad):</strong> ¿Qué tan grave es la lesión o enfermedad en caso de ocurrir? (Mortal o Catastrófico, Muy Grave, Grave, Leve).</li>
                    </ul>
                </div>

                <div class="info-box success">
                    <span class="info-box-icon">⚖️</span>
                    <div class="info-box-content">
                        <strong>Valoración:</strong> Los riesgos se dividen en Niveles (I - Crítico, II - Alto, III - Medio, IV - Bajo) lo que indica al equipo de SST las prioridades de asignación de presupuesto y controles inmediatos.
                    </div>
                </div>
            `
        },
        {
            id: 'jerarquia-controles',
            titulo: 'Jerarquía de Controles',
            contenido: () => `
                <div class="section-title">🛡️ Jerarquía de Controles</div>
                <p class="section-subtitle">El orden técnico obligatorio en Colombia para mitigar y controlar los riesgos</p>

                <div class="video-container">
                    <iframe src="https://www.youtube-nocookie.com/embed/wU8zegbwuJU" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe>
                </div>
                <p class="video-caption">📹 Jerarquía de Controles de Seguridad</p>

                <div class="concept-card">
                    <h4>📋 Los 5 Niveles de Control (De mayor a menor efectividad)</h4>
                    <ol style="padding-left: 1.2rem; font-size:0.9rem; line-height: 1.6;">
                        <li><strong>1. Eliminación:</strong> Suprimir físicamente el peligro del lugar de trabajo (Ej. remover cables sueltos del pasillo).</li>
                        <li><strong>2. Sustitución:</strong> Reemplazar el peligro por un elemento menos nocivo (Ej. cambiar un limpiador tóxico por uno biodegradable).</li>
                        <li><strong>3. Controles de Ingeniería:</strong> Rediseñar o aislar el peligro de las personas (Ej. colocar barandas, extractores o bases ergonómicas).</li>
                        <li><strong>4. Controles Administrativos:</strong> Señalización, advertencias, capacitaciones, horarios o rotación (Ej. conos de "piso húmedo").</li>
                        <li><strong>5. EPP (Equipos de Protección Personal):** Proteger al colaborador. Es la última barrera (Ej. guantes, cascos, botas).</li>
                    </ol>
                </div>

                <div class="info-box danger">
                    <span class="info-box-icon">⚠️</span>
                    <div class="info-box-content">
                        <strong>Nota importante:</strong> Los EPP son necesarios, pero en el SG-SST siempre se debe priorizar el control en la fuente (Eliminar/Sustituir) o el medio (Ingeniería) antes de recaer solo en el colaborador.
                    </div>
                </div>
            `
        },
        {
            id: 'clasificar',
            titulo: 'Clasifica los Ejemplos',
            contenido: () => `
                <div class="section-title">🎮 Clasifica: ¿Acto o Condición?</div>
                <p class="section-subtitle">Arrastra cada ejemplo a la categoría correcta</p>

                <div class="drag-container" id="drag-exercise">
                    <div class="drag-items" id="drag-source">
                        <div class="drag-item" draggable="true" data-category="acto" id="drag1">No usar elementos ergonómicos</div>
                        <div class="drag-item" draggable="true" data-category="condicion" id="drag2">Iluminación insuficiente</div>
                        <div class="drag-item" draggable="true" data-category="acto" id="drag3">Manipular maquinaria sin formación</div>
                        <div class="drag-item" draggable="true" data-category="condicion" id="drag4">Piso mojado sin señalización</div>
                        <div class="drag-item" draggable="true" data-category="acto" id="drag5">No seguir procedimientos de seguridad</div>
                        <div class="drag-item" draggable="true" data-category="condicion" id="drag6">Cables eléctricos expuestos</div>
                    </div>

                    <div class="drop-zone-label">🚶 Acto Inseguro (comportamiento)</div>
                    <div class="drop-zone" id="drop-acto" data-accept="acto"></div>

                    <div class="drop-zone-label">🏢 Condición Insegura (entorno)</div>
                    <div class="drop-zone" id="drop-condicion" data-accept="condicion"></div>
                </div>

                <div class="info-box" id="drag-result" style="display:none">
                    <span class="info-box-icon">✅</span>
                    <div class="info-box-content" id="drag-result-text"></div>
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
                    <p>Responde 5 preguntas sobre Actos y Condiciones Inseguras. Necesitas un 80% para aprobar.</p>
                    <button class="btn btn-accent" onclick="App.startQuiz(4)">Comenzar Evaluación</button>
                </div>
            `
        }
    ],

    initDragDrop() {
        const items = document.querySelectorAll('.drag-item');
        const zones = document.querySelectorAll('.drop-zone');

        items.forEach(item => {
            item.addEventListener('dragstart', e => {
                e.dataTransfer.setData('text/plain', item.id);
                item.classList.add('dragging');
            });
            item.addEventListener('dragend', () => {
                item.classList.remove('dragging');
            });
        });

        zones.forEach(zone => {
            zone.addEventListener('dragover', e => {
                e.preventDefault();
                zone.classList.add('drag-over');
            });
            zone.addEventListener('dragleave', () => {
                zone.classList.remove('drag-over');
            });
            zone.addEventListener('drop', e => {
                e.preventDefault();
                zone.classList.remove('drag-over');
                const id = e.dataTransfer.getData('text/plain');
                const item = document.getElementById(id);
                if (item) {
                    zone.appendChild(item);
                    item.setAttribute('draggable', 'false');
                    item.style.cursor = 'default';
                    Modulo4.checkDragResult();
                }
            });
        });
    },

    checkDragResult() {
        const items = document.querySelectorAll('.drag-item');
        const allDropped = Array.from(items).every(item => {
            const parent = item.parentElement;
            return parent.classList.contains('drop-zone');
        });

        if (!allDropped) return;

        let correct = 0;
        items.forEach(item => {
            const parent = item.parentElement;
            const expected = parent.dataset.accept;
            const actual = item.dataset.category;
            if (expected === actual) {
                correct++;
                item.style.borderColor = 'var(--success)';
                item.style.background = 'rgba(46,150,113,0.1)';
            } else {
                item.style.borderColor = 'var(--danger)';
                item.style.background = 'rgba(231,76,60,0.1)';
            }
        });

        const resultEl = document.getElementById('drag-result');
        const resultText = document.getElementById('drag-result-text');
        resultEl.style.display = 'flex';
        resultEl.className = 'info-box ' + (correct === items.length ? 'success' : 'warning');
        resultText.innerHTML = correct === items.length
            ? '<strong>¡Excelente!</strong> Has clasificado todos los ejemplos correctamente.'
            : `<strong>Has acertado ${correct} de ${items.length}.</strong> Revisa los ejemplos marcados en rojo y vuelve a intentarlo.`;
    }
};
