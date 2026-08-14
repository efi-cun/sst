/* ========================================
   Módulo 2: Planes de Emergencia y Brigada
   ======================================== */
const Modulo2 = {
    id: 2,
    titulo: 'Planes de Emergencia',
    subtitulo: 'Brigada y rutas de evacuación',
    tiempo: 10,
    secciones: [
        {
            id: 'intro',
            titulo: 'Introducción',
            contenido: () => `
                <div class="section-title">🚨 Planes de Emergencia</div>
                <p class="section-subtitle">Cada sede cuenta con un plan de emergencias con estrategias de respuesta oportunas</p>

                <div class="video-container">
                    <iframe src="https://www.youtube-nocookie.com/embed/yocZCQhV9O4" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe>
                </div>
                <p class="video-caption">📹 Introducción a los Planes de Emergencia CUN</p>

                <div class="concept-map-container">
                    <div class="concept-map-title">🗺️ Mapa Conceptual — Plan de Emergencia</div>
                    <svg viewBox="0 0 660 280" class="concept-map-svg" xmlns="http://www.w3.org/2000/svg">
                        <line class="cm-connector" x1="330" y1="50" x2="110" y2="130" stroke="#E74C3C" stroke-width="2"/>
                        <line class="cm-connector" x1="330" y1="50" x2="330" y2="130" stroke="#F18F01" stroke-width="2"/>
                        <line class="cm-connector" x1="330" y1="50" x2="550" y2="130" stroke="#2E86AB" stroke-width="2"/>
                        <line class="cm-connector" x1="110" y1="180" x2="110" y2="235" stroke="#E74C3C" stroke-width="1.5"/>
                        <line class="cm-connector" x1="330" y1="180" x2="330" y2="235" stroke="#F18F01" stroke-width="1.5"/>
                        <line class="cm-connector" x1="550" y1="180" x2="550" y2="235" stroke="#2E86AB" stroke-width="1.5"/>
                        <text class="cm-label" x="200" y="85" text-anchor="middle" fill="#7F8C8D">incluye</text>
                        <text class="cm-label" x="330" y="95" text-anchor="middle" fill="#7F8C8D">organiza</text>
                        <text class="cm-label" x="460" y="85" text-anchor="middle" fill="#7F8C8D">define</text>
                        <g class="cm-box" data-icon="🚨" data-title="Plan de Emergencia CUN" data-info="Es la planificación y organización humana para la utilización de recursos técnicos previstos con el fin de reducir al mínimo las consecuencias de cualquier eventualidad. Cada sede cuenta con un plan propio y adaptado.">
                            <rect x="245" y="15" width="170" height="50" rx="8" fill="#1B3A5C" stroke="#E74C3C" stroke-width="2"/>
                            <text x="330" y="45" text-anchor="middle" fill="white" font-size="12" font-weight="bold" font-family="Poppins">🚨 Plan de Emergencia</text>
                        </g>
                        <g class="cm-box" data-icon="👨‍🚒" data-title="Brigada de Emergencias" data-info="Grupo de trabajadores organizados, capacitados y dotados para prevenir, controlar y reaccionar ante situaciones de riesgo o desastre. Sus roles clave son: 1. Garantizar un entorno seguro, 2. Capacitación continua, 3. Promover el autocuidado, 4. Responder ante emergencias, y 5. Evaluar y mejorar constantemente.">
                            <rect x="30" y="130" width="160" height="50" rx="8" fill="#E74C3C" stroke="#C0392B" stroke-width="2"/>
                            <text x="110" y="160" text-anchor="middle" fill="white" font-size="11" font-weight="600" font-family="Inter">👨‍🚒 Brigada</text>
                        </g>
                        <g class="cm-box" data-icon="🗺️" data-title="Rutas de Evacuación" data-info="Caminos continuos y libres de obstáculos que conducen de forma segura desde el interior de la edificación hasta el exterior. Es vital familiarizarse con la ruta específica de tu sede y seguir siempre las indicaciones de evacuación sin improvisar.">
                            <rect x="250" y="130" width="160" height="50" rx="8" fill="#F18F01" stroke="#E67E22" stroke-width="2"/>
                            <text x="330" y="160" text-anchor="middle" fill="white" font-size="11" font-weight="600" font-family="Inter">🗺️ Rutas de evacuación</text>
                        </g>
                        <g class="cm-box" data-icon="📍" data-title="Punto de Reunión" data-info="Zona segura designada en el exterior de las instalaciones. Tras la evacuación, todos los colaboradores deben concentrarse allí para realizar el conteo de personal, reportar novedades y verificar que todos estén a salvo.">
                            <rect x="470" y="130" width="160" height="50" rx="8" fill="#2E86AB" stroke="#1B6E94" stroke-width="2"/>
                            <text x="550" y="160" text-anchor="middle" fill="white" font-size="11" font-weight="600" font-family="Inter">📍 Punto de reunión</text>
                        </g>
                        <g class="cm-box" data-icon="🔥" data-title="Capacitación de la Brigada" data-info="Los brigadistas se entrenan continuamente en: 1. Primeros Auxilios (atención médica básica inicial), 2. Prevención y Combate de Incendios (uso de extintores y control de fuegos), y 3. Evacuación y Rescate (procedimientos de salida segura).">
                            <rect x="20" y="235" width="180" height="35" rx="6" fill="white" stroke="#E74C3C" stroke-width="1.5"/>
                            <text x="110" y="257" text-anchor="middle" fill="#2C3E50" font-size="10" font-family="Inter">Capacitada y dotada</text>
                        </g>
                        <g class="cm-box" data-icon="🚪" data-title="Señalización de Evacuación" data-info="Rutas señalizadas en todas las sedes con flechas direccionales, luces de emergencia autónomas ante cortes de energía, planos de evacuación visibles y señales fotoluminiscentes.">
                            <rect x="240" y="235" width="180" height="35" rx="6" fill="white" stroke="#F18F01" stroke-width="1.5"/>
                            <text x="330" y="257" text-anchor="middle" fill="#2C3E50" font-size="10" font-family="Inter">Señalizadas por sede</text>
                        </g>
                        <g class="cm-box" data-icon="🛡️" data-title="Zona Segura Exterior" data-info="Área despejada en el exterior (parques o plazas) lejos de estructuras altas, fachadas de vidrio, cables eléctricos u otros peligros de caída. Nunca se debe regresar al edificio hasta que la brigada autorice el reingreso.">
                            <rect x="460" y="235" width="180" height="35" rx="6" fill="white" stroke="#2E86AB" stroke-width="1.5"/>
                            <text x="550" y="257" text-anchor="middle" fill="#2C3E50" font-size="10" font-family="Inter">Zona segura designada</text>
                        </g>
                    </svg>
                </div>

                <div class="concept-card danger">
                    <h4>⚠️ Información Clave</h4>
                    <p>Cada sede de la CUN cuenta con un <strong>plan de emergencias</strong> propio, diseñado con estrategias de respuesta oportunas para atender de manera inmediata cualquier eventualidad.</p>
                </div>

                <div class="info-box danger" style="align-items: center;">
                    <img src="assets/img/mascot_firefighter.jpg" alt="Mascota Bombero" style="width: 60px; height: 60px; object-fit: cover; border-radius: 50%; margin-right: 1rem; border: 2px solid #E74C3C;">
                    <div class="info-box-content">
                        <strong>Regla de oro:</strong> Nunca improvises rutas. Sigue siempre las instrucciones de la brigada y el plan de tu sede.
                    </div>
                </div>
            `
        },
        {
            id: 'conceptos',
            titulo: 'Conceptos Básicos',
            contenido: () => `
                <div class="section-title">📚 Conceptos Básicos</div>
                <p class="section-subtitle">Familiarízate con los términos clave para actuar con seguridad en caso de emergencia</p>

                <div class="video-container">
                    <iframe src="https://www.youtube-nocookie.com/embed/dGAUu16krRE" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe>
                </div>
                <p class="video-caption">📹 Conceptos Básicos de Emergencias</p>

                <div class="icon-stats">
                    <div class="icon-stat glow" style="animation-delay:0.1s; cursor:pointer;" onclick="App.showInfoModal('Brigadistas CUN', 'Consulta la lista oficial de brigadistas activos de la CUN en cada sede. Puedes hacer clic en el botón de abajo para ver o descargar el documento completo.', '👨‍🚒', 'assets/pdf/Brigadistas-CUN.pdf', '📂 Abrir Listado (PDF)')">
                        <div class="icon-stat-icon">👨‍🚒</div>
                        <div class="icon-stat-value">Brigada ℹ️</div>
                        <div class="icon-stat-label">Grupo capacitado</div>
                    </div>
                    <div class="icon-stat" style="animation-delay:0.2s">
                        <div class="icon-stat-icon">🗺️</div>
                        <div class="icon-stat-value">Rutas</div>
                        <div class="icon-stat-label">Evacuación señalizada</div>
                    </div>
                    <div class="icon-stat glow-blue" style="animation-delay:0.3s; cursor:pointer;" onclick="App.showInfoModal('Puntos de Encuentro CUN', 'Puntos de encuentro oficiales establecidos por la CUN:<br><br>• <strong>Edificio Murillo Toro:</strong> Sede C.<br>• <strong>Parque de Los Periodistas:</strong> Sedes G, I, F, P y H.<br>• <strong>Parque Santander:</strong> Sede J y Contact Center.<br>• <strong>Esquina Calle 17 con Kr. 16 sur:</strong> Sede Restrepo.<br>• <strong>Parqueadero detrás de la Universidad:</strong> Sede Fontibón.<br>• <strong>Frente a la sede sobre el andén:</strong> Sede Jhon F. Kennedy.<br>• <strong>Separador Avenida Caracas:</strong> Sede Hotel CUN.', '📍', 'https://cun.edu.co/administrativos/seguridad-y-salud-en-el-trabajo/', '🌐 Revisar en la Web')">
                        <div class="icon-stat-icon">📍</div>
                        <div class="icon-stat-value">Punto ℹ️</div>
                        <div class="icon-stat-label">Reunión seguro</div>
                    </div>
                </div>

                <div class="concept-card">
                    <h4>🛡️ Planificación y Recursos</h4>
                    <p>Un plan de emergencia no es solo un papel; es la organización de personas y el uso de alarmas, luces, extintores y señalizaciones que nos permiten salir sanos y salvos.</p>
                </div>
            `
        },
        {
            id: 'brigada',
            titulo: 'Brigada de Emergencias',
            contenido: () => `
                <div class="section-title">👨‍🚒 Brigada de Emergencias</div>
                <p class="section-subtitle">El grupo interno capacitado para prevenir y reaccionar ante situaciones de riesgo</p>

                <div class="video-container">
                    <iframe src="https://www.youtube-nocookie.com/embed/mEpJXwJJ5cM" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe>
                </div>
                <p class="video-caption">📹 La Brigada de Emergencias CUN</p>

                <div class="concept-card">
                    <h4>📋 ¿Qué es la Brigada?</h4>
                    <p>Es el grupo de trabajadores <strong>organizados, capacitados y dotados</strong> para prevenir, controlar y reaccionar ante situaciones de riesgo o desastre dentro de la empresa.</p>
                </div>

                <div class="info-box success" style="align-items: center; margin-bottom: 1.5rem;">
                    <img src="assets/img/mascot_engineer.jpg" alt="Brigadista CUN" style="width: 60px; height: 60px; object-fit: cover; border-radius: 50%; margin-right: 1rem; border: 2px solid #2ECC71;">
                    <div class="info-box-content">
                        <strong>Nuestros Líderes de Prevención:</strong> Identifica a los brigadistas de tu sede por su chaleco distintivo. Ellos están entrenados en Primeros Auxilios, Evacuación y Combate de Incendios para guiarte de forma segura.
                    </div>
                </div>

                <div class="timeline">
                    <div class="timeline-item" style="animation-delay:0.1s">
                        <h4>🛡️ Garantizar un entorno seguro</h4>
                        <p>Vigilar que las condiciones del entorno laboral sean seguras para todos.</p>
                    </div>
                    <div class="timeline-item" style="animation-delay:0.2s">
                        <h4>📚 Capacitarnos en prevención</h4>
                        <p>Mantener formación continua en prevención de riesgos y respuesta a emergencias.</p>
                    </div>
                    <div class="timeline-item" style="animation-delay:0.3s">
                        <h4>🤲 Promover el autocuidado</h4>
                        <p>Incentivar en cada colaborador la responsabilidad sobre su propia seguridad.</p>
                    </div>
                    <div class="timeline-item" style="animation-delay:0.4s">
                        <h4>🚨 Responder ante emergencias</h4>
                        <p>Actuar de forma coordinada y eficiente ante cualquier situación de emergencia.</p>
                    </div>
                    <div class="timeline-item" style="animation-delay:0.5s">
                        <h4>🔄 Evaluar y ajustar constantemente</h4>
                        <p>Revisar y mejorar las habilidades y protocolos de respuesta continuamente (Habilidades Sociales).</p>
                    </div>
                </div>
            `
        },
        {
            id: 'rutas',
            titulo: 'Rutas de Evacuación',
            contenido: () => `
                <div class="section-title">🗺️ Rutas de Evacuación</div>
                <p class="section-subtitle">Conoce las rutas de evacuación de tu sede y sigue siempre las señalizaciones</p>

                <div class="video-container">
                    <iframe src="https://www.youtube-nocookie.com/embed/GJALSA6LYTM" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe>
                </div>
                <p class="video-caption">📹 Protocolos de Evacuación CUN</p>

                <div class="accordion">
                    <div class="accordion-header" onclick="this.parentElement.classList.toggle('open')">
                        <span>🚪 ¿Qué hacer en caso de evacuación?</span>
                        <span class="accordion-arrow">▼</span>
                    </div>
                    <div class="accordion-body">
                        <p>1. Mantén la calma y no corras.<br>
                        2. Sigue las señalizaciones de evacuación.<br>
                        3. Dirígete al punto de reunión indicado.<br>
                        4. No regreses hasta que la brigada lo indique.<br>
                        5. Reporta cualquier persona que no haya podido evacuar.</p>
                    </div>
                </div>

                <div class="accordion">
                    <div class="accordion-header" onclick="this.parentElement.classList.toggle('open')">
                        <span>🔥 ¿Qué hacer en caso de incendio?</span>
                        <span class="accordion-arrow">▼</span>
                    </div>
                    <div class="accordion-body">
                        <p>1. Activa la alarma de incendio.<br>
                        2. Evacúa por la ruta más cercana y segura.<br>
                        3. No uses los ascensores.<br>
                        4. Si hay humo, desplázate agachado.<br>
                        5. Cierra las puertas detrás de ti sin asegurarlas.<br>
                        6. Dirígete al punto de reunión.</p>
                    </div>
                </div>

                <div class="accordion">
                    <div class="accordion-header" onclick="this.parentElement.classList.toggle('open')">
                        <span>🌍 ¿Qué hacer en caso de sismo?</span>
                        <span class="accordion-arrow">▼</span>
                    </div>
                    <div class="accordion-body">
                        <p>1. Mantén la calma, no salgas corriendo.<br>
                        2. Ubícate bajo una estructura firme (mesa, escritorio).<br>
                        3. Aléjate de ventanas y objetos que puedan caer.<br>
                        4. Una vez pase el sismo, evacúa por las rutas señaladas.<br>
                        5. Sigue las instrucciones de la brigada.</p>
                    </div>
                </div>
            `
        },
        {
            id: 'contacto',
            titulo: 'Consejo y Contacto',
            contenido: () => `
                <div class="section-title">📞 Consejos y Canales de Contacto</div>
                <p class="section-subtitle">Reporta novedades de seguridad y mantente comunicado con el área de SST</p>

                <div class="video-container">
                    <iframe src="https://www.youtube-nocookie.com/embed/Hx2RJJdaeL4" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe>
                </div>
                <p class="video-caption">📹 Consejos de Seguridad y Canales CUN</p>

                <div class="info-box warning" style="align-items: center;">
                    <img src="assets/img/mascot_firefighter.jpg" alt="Mascota Bombero" style="width: 60px; height: 60px; object-fit: cover; border-radius: 50%; margin-right: 1rem; border: 2px solid #F18F01;">
                    <div class="info-box-content">
                        <strong>Tip:</strong> Familiarízate con las rutas de evacuación de tu sede. En un momento de emergencia, el conocimiento previo marca la diferencia.
                    </div>
                </div>

                <div class="takeaway-box">
                    <h4>📌 Lo que debes recordar</h4>
                    <ul>
                        <li>Cada sede tiene su propio plan de emergencias</li>
                        <li>La brigada está capacitada para prevenir y reaccionar</li>
                        <li>Sigue siempre las señalizaciones de evacuación</li>
                        <li>Ante cualquier reporte escribe a: <strong>sst@cun.edu.co</strong></li>
                    </ul>
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
                    <p>Responde 3 preguntas sobre Planes de Emergencia. Necesitas un 80% para aprobar.</p>
                    <button class="btn btn-accent" onclick="App.startQuiz(2)">Comenzar Evaluación</button>
                </div>
            `
        }
    ]
};
