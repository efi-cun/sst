/* ========================================
   Módulo 6: Comités de SST
   ======================================== */
const Modulo6 = {
    id: 6,
    titulo: 'Comités de SST',
    subtitulo: 'COPASST, Convivencia y Equidad',
    tiempo: 10,
    secciones: [
        {
            id: 'introduccion',
            titulo: 'Introducción',
            contenido: () => `
                <div class="section-title">👥 Introducción al Módulo 6</div>
                <p class="section-subtitle">Conoce los canales y comités de apoyo diseñados para garantizar tu bienestar y participación en la CUN</p>

                <div class="video-container">
                    <iframe src="https://www.youtube-nocookie.com/embed/JiF-R40-vjM" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe>
                </div>
                <p class="video-caption">📹 Introducción al Módulo 6 — Canales de Participación y Comités</p>

                <div class="concept-card">
                    <h4>📋 Objetivos de Aprendizaje</h4>
                    <p>En este módulo aprenderás qué son los comités de apoyo de SST en la CUN (COPASST, Comité de Convivencia Laboral y Comité de Equidad de Género y Diversidad), cuáles son sus principales funciones normativas e institucionales, y a qué canal debes acudir de manera precisa según cada situación.</p>
                </div>

                <!-- Compromiso Interactivo -->
                <div class="compromiso-card" style="text-align: center; background: rgba(142,68,173,0.05); padding: 1.5rem; border-radius: var(--radius); border: 2px dashed #8E44AD; margin-top: 1.5rem; animation: fadeInUp 0.5s ease-out;">
                    <h5 style="font-family: var(--font-title); margin-bottom: 0.5rem; color: #8E44AD;">🤝 Pacto de Participación Preventiva CUNista</h5>
                    <p style="font-size: 0.85rem; margin-bottom: 1rem; color: var(--text);">Comprométete a promover un ambiente de respeto, a participar activamente en la prevención de riesgos y a acudir a los canales oficiales.</p>
                    <button class="btn btn-primary" id="btn-sign-compromiso-m6" onclick="Modulo6.signCompromiso()">✍️ Firmar Compromiso</button>
                    <div id="compromiso-firmado-m6" class="hidden" style="color: var(--success); font-weight: 700; font-size: 0.95rem; display: flex; align-items: center; justify-content: center; gap: 0.5rem;">
                        <span>✅</span> ¡Compromiso Firmado! Cuidaré de mi salud y de mis compañeros.
                    </div>
                </div>
            `
        },
        {
            id: 'marco-legal',
            titulo: 'Marco Legal',
            contenido: () => `
                <div class="section-title">⚖️ Marco Legal de los Comités</div>
                <p class="section-subtitle">Normativa nacional que respalda los comités de apoyo y participación laboral en Colombia</p>

                <div class="video-container">
                    <iframe src="https://www.youtube-nocookie.com/embed/c4hDkF1t0m8" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe>
                </div>
                <p class="video-caption">📹 Marco Legal y Reglamentación de los Comités de SST</p>

                <div class="concept-card">
                    <h4>📜 Normas Clave en Colombia</h4>
                    <ul>
                        <li style="margin-bottom: 0.75rem;"><strong>Resolución 2013 de 1986 (COPASST):</strong> Reglamenta la organización y funcionamiento de los comités de medicina, higiene y seguridad industrial (hoy COPASST) en los lugares de trabajo.</li>
                        <li style="margin-bottom: 0.75rem;"><strong>Resoluciones 652 y 1356 de 2012 (Comité de Convivencia Laboral):</strong> Establece la obligatoriedad de conformar este comité para prevenir los riesgos psicosociales y proteger la salud mental contra el acoso laboral.</li>
                        <li style="margin-bottom: 0.75rem;"><strong>Lineamientos Institucionales (Equidad):</strong> Órgano consultivo de la CUN para promover la igualdad de oportunidades y espacios libres de violencia de género o discriminación.</li>
                    </ul>
                </div>

                <!-- Mini Trivia Interactiva -->
                <div class="trivia-legal" style="background: var(--bg); padding: 1.25rem; border-radius: var(--radius-sm); border: 1px solid var(--border); margin-top: 1.5rem;">
                    <h5 style="margin-bottom: 0.5rem; font-family: var(--font-title); color: var(--primary);">🧠 Mini Trivia Legal</h5>
                    <p style="font-size: 0.85rem; margin-bottom: 0.75rem; color: var(--text);">¿Cuál resolución reglamenta la conformación de los Comités de Convivencia Laboral en Colombia?</p>
                    <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                        <button class="btn btn-outline btn-sm" style="text-align: left; justify-content: flex-start; white-space: normal;" onclick="Modulo6.checkLegalTrivia(this, 'A')">A. Resolución 2013 de 1986</button>
                        <button class="btn btn-outline btn-sm" style="text-align: left; justify-content: flex-start; white-space: normal;" onclick="Modulo6.checkLegalTrivia(this, 'B')">B. Resolución 652 de 2012</button>
                        <button class="btn btn-outline btn-sm" style="text-align: left; justify-content: flex-start; white-space: normal;" onclick="Modulo6.checkLegalTrivia(this, 'C')">C. Ley 1562 de 2012</button>
                    </div>
                    <div id="legal-trivia-feedback-m6" class="hidden" style="margin-top: 0.75rem; font-size: 0.85rem; font-weight: 600; line-height: 1.4;"></div>
                </div>
            `
        },
        {
            id: 'comites',
            titulo: 'Los Comités de SST',
            contenido: () => `
                <div class="section-title">👥 Comités de SST CUN</div>
                <p class="section-subtitle">Órganos bipartitos y consultivos que velan por tu seguridad física, psicosocial y equidad</p>

                <div class="concept-map-container">
                    <div class="concept-map-title">🗺️ Mapa Conceptual — Comités de SST</div>
                    <svg viewBox="0 0 660 320" class="concept-map-svg" xmlns="http://www.w3.org/2000/svg">
                        <line class="cm-connector" x1="330" y1="50" x2="110" y2="140" stroke="#1B3A5C" stroke-width="2"/>
                        <line class="cm-connector" x1="330" y1="50" x2="330" y2="140" stroke="#8E44AD" stroke-width="2"/>
                        <line class="cm-connector" x1="330" y1="50" x2="550" y2="140" stroke="#E74C3C" stroke-width="2"/>
                        <line class="cm-connector" x1="110" y1="190" x2="110" y2="265" stroke="#1B3A5C" stroke-width="1.5"/>
                        <line class="cm-connector" x1="330" y1="190" x2="330" y2="265" stroke="#8E44AD" stroke-width="1.5"/>
                        <line class="cm-connector" x1="550" y1="190" x2="550" y2="265" stroke="#E74C3C" stroke-width="1.5"/>
                        <text class="cm-label" x="195" y="90" text-anchor="middle" fill="#7F8C8D">vigila</text>
                        <text class="cm-label" x="330" y="100" text-anchor="middle" fill="#7F8C8D">previene</text>
                        <text class="cm-label" x="465" y="90" text-anchor="middle" fill="#7F8C8D">protege</text>
                        <g class="cm-box">
                            <rect x="230" y="15" width="200" height="50" rx="8" fill="#1B3A5C" stroke="#F18F01" stroke-width="2"/>
                            <text x="330" y="45" text-anchor="middle" fill="white" font-size="12" font-weight="bold" font-family="Poppins">👥 Comités de SST</text>
                        </g>
                        <g class="cm-box" style="cursor:pointer" onclick="App.showInfoModal('COPASST', 'El COPASST (Comité Paritario de Seguridad y Salud en el Trabajo) de la CUN tiene como funciones principales investigar los accidentes de trabajo, realizar inspecciones planeadas de seguridad, proponer medidas de control de riesgos y vigilar el cumplimiento de las normas del Sistema de Gestión de la Seguridad y Salud en el Trabajo. <br><br><strong>Haz clic abajo para conocer los miembros representantes actuales del comité.</strong>', '🛡️', 'assets/pdf/miembros-copasst-y-ccll.pdf', '📂 Abrir Acta de Miembros')" data-icon="🛡️" data-title="COPASST" data-info="El Comité Paritario de Seguridad y Salud en el Trabajo (COPASST) es un organismo fundamental y de obligatorio cumplimiento en empresas colombianas. Está conformado por igual número de representantes del empleador y de los trabajadores. Su objetivo no es sancionar, sino promover la salud, vigilar el cumplimiento de las normas de SST, participar en inspecciones y analizar las causas de accidentes para sugerir mejoras. Correo: copasst@cun.edu.co">
                            <rect x="30" y="140" width="160" height="50" rx="8" fill="#1B3A5C" stroke="#2E5A8B" stroke-width="2"/>
                            <text x="110" y="170" text-anchor="middle" fill="white" font-size="11" font-weight="600" font-family="Inter">🛡️ COPASST</text>
                        </g>
                        <g class="cm-box" style="cursor:pointer" onclick="App.showInfoModal('Comité de Convivencia Laboral', 'El Comité de Convivencia Laboral (CCL) es una medida preventiva obligatoria de la CUN para proteger a los colaboradores frente a los riesgos psicosociales y situaciones de acoso laboral, garantizando un ambiente confidencial, neutral y de mutuo respeto.<br><br><strong>Haz clic abajo para consultar la resolución y el listado de miembros vigentes del comité para el periodo actual.</strong>', '🤝', 'assets/pdf/ccl-2026.pdf', '📂 Abrir Resolución de Miembros')" data-icon="🤝" data-title="Comité de Convivencia Laboral" data-info="Es una medida preventiva obligatoria creada para proteger a los trabajadores contra los riesgos psicosociales que puedan afectar la salud en los lugares de trabajo, específicamente el Acoso Laboral (Ley 1010 de 2006). Es un espacio confidencial de diálogo donde se reciben y tramitan quejas, se fomentan acuerdos y se protegen los derechos de los colaboradores. Correo: comiteconvivencialaboral@cun.edu.co">
                            <rect x="250" y="140" width="160" height="50" rx="8" fill="#8E44AD" stroke="#6C3483" stroke-width="2"/>
                            <text x="330" y="170" text-anchor="middle" fill="white" font-size="11" font-weight="600" font-family="Inter">🤝 Convivencia</text>
                        </g>
                        <g class="cm-box" style="cursor:pointer" onclick="App.showInfoModal(this.getAttribute('data-title'), this.getAttribute('data-info'), this.getAttribute('data-icon'))" data-icon="🌈" data-title="Comité de Equidad de Género" data-info="Este comité lidera la estrategia institucional para garantizar un entorno libre de violencias basadas en género, acoso sexual o discriminación de cualquier índole. Promueve la igualdad de oportunidades y atiende confidencialmente a las personas que consideren vulnerados sus derechos por razones de género. Correo: generoydiversidad@cun.edu.co">
                            <rect x="470" y="140" width="160" height="50" rx="8" fill="#E74C3C" stroke="#C0392B" stroke-width="2"/>
                            <text x="550" y="170" text-anchor="middle" fill="white" font-size="11" font-weight="600" font-family="Inter">🌈 Equidad</text>
                        </g>
                        <g class="cm-box" style="cursor:pointer" onclick="App.showInfoModal(this.getAttribute('data-title'), this.getAttribute('data-info'), this.getAttribute('data-icon'))" data-icon="🔍" data-title="Investigar Accidentes" data-info="Cuando ocurre un accidente grave, el COPASST forma parte del equipo investigador (junto con el jefe inmediato y SST) en un plazo no mayor a 15 días. Su rol es aportar una visión imparcial y ayudar a detectar las fallas sistémicas, no a buscar culpables.">
                            <rect x="15" y="265" width="190" height="45" rx="6" fill="white" stroke="#1B3A5C" stroke-width="1.5"/>
                            <text x="110" y="283" text-anchor="middle" fill="#2C3E50" font-size="9.5" font-family="Inter">Investigar accidentes</text>
                            <text x="110" y="299" text-anchor="middle" fill="#7F8C8D" font-size="8.5" font-family="Inter">copasst@cun.edu.co</text>
                        </g>
                        <g class="cm-box" style="cursor:pointer" onclick="App.showInfoModal(this.getAttribute('data-title'), this.getAttribute('data-info'), this.getAttribute('data-icon'))" data-icon="🤝" data-title="Prevenir Acoso Laboral" data-info="Si sientes que sufres de maltrato, persecución, discriminación, entorpecimiento, inequidad o desprotección laboral (las 6 modalidades de acoso según la ley), puedes radicar tu queja. El comité mediará buscando solucionar la situación de manera amistosa y confidencial.">
                            <rect x="235" y="265" width="190" height="45" rx="6" fill="white" stroke="#8E44AD" stroke-width="1.5"/>
                            <text x="330" y="283" text-anchor="middle" fill="#2C3E50" font-size="9.5" font-family="Inter">Prevenir acoso laboral</text>
                            <text x="330" y="299" text-anchor="middle" fill="#7F8C8D" font-size="8.5" font-family="Inter">comiteconvivencialaboral@cun.edu.co</text>
                        </g>
                        <g class="cm-box" style="cursor:pointer" onclick="App.showInfoModal(this.getAttribute('data-title'), this.getAttribute('data-info'), this.getAttribute('data-icon'))" data-icon="🌈" data-title="Atención en Violencia de Género" data-info="Ante cualquier expresión verbal, física o psicológica que denigre, excluya o violente a una persona basándose en su género u orientación sexual, este comité activa rutas de acompañamiento psicosocial y legal para restituir sus derechos de forma segura y sin revictimización.">
                            <rect x="455" y="265" width="190" height="45" rx="6" fill="white" stroke="#E74C3C" stroke-width="1.5"/>
                            <text x="550" y="283" text-anchor="middle" fill="#2C3E50" font-size="9.5" font-family="Inter">Violencia de género</text>
                            <text x="550" y="299" text-anchor="middle" fill="#7F8C8D" font-size="8.5" font-family="Inter">generoydiversidad@cun.edu.co</text>
                        </g>
                    </svg>
                </div>

                <div class="icon-stats">
                    <div class="icon-stat glow-blue" style="animation-delay:0.1s; cursor:pointer;" onclick="App.showInfoModal('COPASST', 'El COPASST (Comité Paritario de Seguridad y Salud en el Trabajo) de la CUN tiene como funciones principales investigar los accidentes de trabajo, realizar inspecciones planeadas de seguridad, proponer medidas de control de riesgos y vigilar el cumplimiento de las normas del SG-SST.<br><br><strong>Correo: copasst@cun.edu.co</strong>', '🛡️', 'assets/pdf/miembros-copasst-y-ccll.pdf', '📂 Abrir Acta de Miembros')">
                        <div class="icon-stat-icon">🛡️</div>
                        <div class="icon-stat-value">COPASST</div>
                        <div class="icon-stat-label">Vigilar normas SST</div>
                    </div>
                    <div class="icon-stat glow-blue" style="animation-delay:0.2s; cursor:pointer;" onclick="App.showInfoModal('Comité de Convivencia Laboral', 'El Comité de Convivencia Laboral (CCL) es una medida preventiva obligatoria de la CUN para proteger a los colaboradores frente a los riesgos psicosociales y situaciones de acoso laboral (Ley 1010 de 2006).<br><br><strong>Correo: comiteconvivencialaboral@cun.edu.co</strong>', '🤝', 'assets/pdf/ccl-2026.pdf', '📂 Abrir Resolución de Miembros')">
                        <div class="icon-stat-icon">🤝</div>
                        <div class="icon-stat-value">Convivencia</div>
                        <div class="icon-stat-label">Prevenir acoso</div>
                    </div>
                    <div class="icon-stat glow-blue" style="animation-delay:0.3s; cursor:pointer;" onclick="App.showInfoModal('Comité de Equidad de Género', 'Este comité lidera la estrategia institucional para garantizar un entorno libre de violencias basadas en género, acoso sexual o discriminación en la CUN.<br><br><strong>Correo: generoydiversidad@cun.edu.co</strong>', '🌈')">
                        <div class="icon-stat-icon">🌈</div>
                        <div class="icon-stat-value">Equidad</div>
                        <div class="icon-stat-label">Género y diversidad</div>
                    </div>
                </div>

                <div class="takeaway-box">
                    <h4>📌 Lo que debes recordar</h4>
                    <ul>
                        <li>COPASST → Accidentes, inspecciones de riesgos y normas de SST.</li>
                        <li>Comité de Convivencia → Acoso laboral, conflictos interpersonales y clima.</li>
                        <li>Comité de Equidad → Violencia basada en género, discriminación e inclusión.</li>
                        <li>Siempre reporta cualquier novedad de riesgo al correo <strong>sst@cun.edu.co</strong>.</li>
                    </ul>
                </div>
            `
        },
        {
            id: 'copasst',
            titulo: 'COPASST',
            contenido: () => `
                <div class="section-title">🛡️ COPASST y Prevención</div>
                <p class="section-subtitle">Comité Paritario de Seguridad y Salud en el Trabajo: canal de comunicación y prevención de riesgos</p>

                <div class="video-container">
                    <iframe src="https://www.youtube-nocookie.com/embed/Krj0iqgDLdw" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe>
                </div>
                <p class="video-caption">📹 COPASST y la Gestión Preventiva de Riesgos</p>

                <div class="concept-card">
                    <h4>📋 ¿Cuáles son sus funciones principales?</h4>
                    <p>El COPASST es un organismo paritario (conformado por igual número de representantes de la CUN y de los colaboradores) que tiene las siguientes responsabilidades:</p>
                    <ul style="margin-left: 1.5rem; margin-top: 0.5rem;">
                        <li><strong>Vigilancia y Promoción:</strong> Promover el cumplimiento de la Política de SST institucional.</li>
                        <li><strong>Inspecciones de Seguridad:</strong> Recorrer las instalaciones físicas periódicamente para detectar peligros.</li>
                        <li><strong>Investigación de Accidentes:</strong> Formar parte del comité investigador cuando ocurre un evento laboral grave.</li>
                        <li><strong>Proponer Medidas:</strong> Sugerir controles y capacitaciones para reducir la accidentalidad.</li>
                    </ul>
                </div>

                <div class="info-box success" style="margin-bottom: 1.5rem; align-items: center;">
                    <img src="assets/img/mascot_committee.jpg" alt="Mascota Comité" style="width: 60px; height: 60px; object-fit: cover; border-radius: 50%; margin-right: 1rem; border: 2px solid #2ECC71;">
                    <div class="info-box-content">
                        <strong>Correo oficial de contacto:</strong> <a href="mailto:copasst@cun.edu.co" style="color: var(--primary); font-weight: bold;">copasst@cun.edu.co</a>
                    </div>
                </div>

                <div style="text-align: center; margin-top: 1.5rem;">
                    <button class="btn btn-primary" onclick="window.open('assets/pdf/miembros-copasst-y-ccll.pdf', '_blank')">
                        📂 Ver Miembros del COPASST (PDF)
                    </button>
                </div>
            `
        },
        {
            id: 'convivencia',
            titulo: 'Comité de Convivencia Laboral',
            contenido: () => `
                <div class="section-title">🤝 Comité de Convivencia Laboral</div>
                <p class="section-subtitle">Mediación, prevención del acoso laboral y fomento de un clima de trabajo saludable</p>

                <div class="video-container">
                    <iframe src="https://www.youtube-nocookie.com/embed/8UCyYDoqnn4" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe>
                </div>
                <p class="video-caption">📹 Comité de Convivencia Laboral (CCL): Mediación y Salud Mental</p>

                <div class="concept-card">
                    <h4>📋 Funciones Preventivas y de Mediación</h4>
                    <p>El Comité de Convivencia Laboral es un canal de diálogo y mediación que busca:</p>
                    <ul style="margin-left: 1.5rem; margin-top: 0.5rem;">
                        <li><strong>Recibir Quejas:</strong> Escuchar confidencial y objetivamente casos de presunto acoso laboral.</li>
                        <li><strong>Propiciar Diálogo:</strong> Promover mesas de conciliación entre las partes en conflicto.</li>
                        <li><strong>Recomendaciones a Gestión Humana:</strong> Proponer talleres de resolución pacífica de conflictos y clima laboral.</li>
                        <li><strong>Seguimiento de Acuerdos:</strong> Evaluar que los compromisos de convivencia se cumplan a cabalidad.</li>
                    </ul>
                </div>

                <div class="info-box info" style="margin-bottom: 1.5rem; border-left-color: var(--secondary); align-items: center;">
                    <img src="assets/img/mascot_committee.jpg" alt="Mascota Comité" style="width: 60px; height: 60px; object-fit: cover; border-radius: 50%; margin-right: 1rem; border: 2px solid var(--secondary);">
                    <div class="info-box-content">
                        <strong>Confidencialidad Legal:</strong> Por ley, todos los datos, testimonios y actas gestionados por el CCL son de carácter estrictamente confidencial.
                    </div>
                </div>

                <div class="info-box success" style="margin-bottom: 1.5rem; align-items: center;">
                    <img src="assets/img/mascot_committee.jpg" alt="Mascota Comité" style="width: 60px; height: 60px; object-fit: cover; border-radius: 50%; margin-right: 1rem; border: 2px solid #2ECC71;">
                    <div class="info-box-content">
                        <strong>Correo oficial de contacto:</strong> <a href="mailto:comiteconvivencialaboral@cun.edu.co" style="color: var(--primary); font-weight: bold;">comiteconvivencialaboral@cun.edu.co</a>
                    </div>
                </div>

                <div style="text-align: center; margin-top: 1.5rem;">
                    <button class="btn btn-primary" onclick="window.open('assets/pdf/ccl-2026.pdf', '_blank')">
                        📂 Ver Miembros y Resolución del CCL (PDF)
                    </button>
                </div>
            `
        },
        {
            id: 'equidad',
            titulo: 'Comité de Equidad y Diversidad',
            contenido: () => `
                <div class="section-title">🌈 Comité de Equidad y Diversidad</div>
                <p class="section-subtitle">Promoción de entornos de trabajo y estudio libres de violencias y discriminación</p>

                <div class="video-container">
                    <iframe src="https://www.youtube-nocookie.com/embed/KSCUlNrutP8" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe>
                </div>
                <p class="video-caption">📹 Equidad de Género y Atención a la Diversidad en la CUN</p>

                <div class="concept-card">
                    <h4>📋 Líneas de Acción e Intervención</h4>
                    <p>Este comité lidera la estrategia institucional de equidad basándose en cuatro pilares principales:</p>
                    <ul style="margin-left: 1.5rem; margin-top: 0.5rem;">
                        <li><strong>Prevención y Educación:</strong> Talleres de sensibilización sobre violencias de género e inclusión.</li>
                        <li><strong>Atención Prioritaria:</strong> Activación de rutas confidenciales de acompañamiento psicosocial y jurídico para las víctimas.</li>
                        <li><strong>Igualdad de Oportunidades:</strong> Promoción de políticas internas de meritocracia y equidad laboral.</li>
                        <li><strong>Articulación Interna:</strong> Remisión de quejas no correspondientes a género al Comité de Convivencia Laboral.</li>
                    </ul>
                </div>

                <div class="info-box success" style="align-items: center;">
                    <img src="assets/img/mascot_committee.jpg" alt="Mascota Comité" style="width: 60px; height: 60px; object-fit: cover; border-radius: 50%; margin-right: 1rem; border: 2px solid #2ECC71;">
                    <div class="info-box-content">
                        <strong>Correo oficial de contacto:</strong> <a href="mailto:generoydiversidad@cun.edu.co" style="color: var(--primary); font-weight: bold;">generoydiversidad@cun.edu.co</a>
                    </div>
                </div>
            `
        },
        {
            id: 'simulador',
            titulo: '¿A quién acudirías?',
            contenido: () => `
                <div class="section-title">🎯 Casos Prácticos y Simulador</div>
                <p class="section-subtitle">Mira el video de casos prácticos y luego decide a qué comité debes dirigirte en cada situación</p>

                <div class="video-container">
                    <iframe src="https://www.youtube-nocookie.com/embed/BI4KLZrkz3k" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe>
                </div>
                <p class="video-caption">📹 Casos Prácticos de los Comités de Apoyo SST CUN</p>

                <div class="scenario-card" style="margin-top: 2rem;">
                    <h4>📋 Situación 1</h4>
                    <div class="scenario-desc">Un colaborador reporta que las barandas de la escalera de su sede están rotas y representan un riesgo inminente de caídas.</div>
                    <div class="scenario-options" data-scenario="m6s1">
                        <div class="scenario-option" onclick="Modulo6.checkScenario(this, 'm6s1', true)">COPASST</div>
                        <div class="scenario-option" onclick="Modulo6.checkScenario(this, 'm6s1', false)">Comité de Convivencia Laboral</div>
                        <div class="scenario-option" onclick="Modulo6.checkScenario(this, 'm6s1', false)">Comité de Equidad y Diversidad</div>
                    </div>
                    <div class="scenario-result" id="result-m6s1"></div>
                </div>

                <div class="scenario-card">
                    <h4>📋 Situación 2</h4>
                    <div class="scenario-desc">Una colaboradora reporta que su jefe inmediato le grita constantemente y le asigna tareas humillantes ajenas a sus funciones contractuales.</div>
                    <div class="scenario-options" data-scenario="m6s2">
                        <div class="scenario-option" onclick="Modulo6.checkScenario(this, 'm6s2', false)">COPASST</div>
                        <div class="scenario-option" onclick="Modulo6.checkScenario(this, 'm6s2', true)">Comité de Convivencia Laboral</div>
                        <div class="scenario-option" onclick="Modulo6.checkScenario(this, 'm6s2', false)">Comité de Equidad y Diversidad</div>
                    </div>
                    <div class="scenario-result" id="result-m6s2"></div>
                </div>

                <div class="scenario-card">
                    <h4>📋 Situación 3</h4>
                    <div class="scenario-desc">Un colaborador del área de admisiones recibe bromas y comentarios discriminatorios repetitivos por su orientación sexual e identidad de género.</div>
                    <div class="scenario-options" data-scenario="m6s3">
                        <div class="scenario-option" onclick="Modulo6.checkScenario(this, 'm6s3', false)">COPASST</div>
                        <div class="scenario-option" onclick="Modulo6.checkScenario(this, 'm6s3', false)">Comité de Convivencia Laboral</div>
                        <div class="scenario-option" onclick="Modulo6.checkScenario(this, 'm6s3', true)">Comité de Equidad y Diversidad</div>
                    </div>
                    <div class="scenario-result" id="result-m6s3"></div>
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
                    <p>Responde 3 preguntas sobre Comités de SST. Necesitas un 80% para aprobar.</p>
                    <button class="btn btn-accent" onclick="App.startQuiz(6)">Comenzar Evaluación</button>
                </div>
            `
        }
    ],

    signCompromiso() {
        const btn = document.getElementById('btn-sign-compromiso-m6');
        const text = document.getElementById('compromiso-firmado-m6');
        if (btn && text) {
            btn.classList.add('hidden');
            text.classList.remove('hidden');
            if (typeof App !== 'undefined' && App.launchConfetti) {
                App.launchConfetti();
            }
        }
    },

    checkLegalTrivia(button, answer) {
        const feedback = document.getElementById('legal-trivia-feedback-m6');
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
            feedback.innerHTML = '🎉 ¡Correcto! Las Resoluciones 652 y 1356 de 2012 son las normas colombianas que reglamentan la organización y funcionamiento de los Comités de Convivencia Laboral.';
            feedback.style.color = 'var(--success)';
            if (typeof App !== 'undefined' && App.launchConfetti) App.launchConfetti();
        } else {
            button.style.borderColor = 'var(--danger)';
            button.style.background = 'rgba(231,76,60,0.1)';
            button.style.color = 'var(--danger)';
            if (answer === 'A') {
                feedback.innerHTML = '❌ Incorrecto. La Resolución 2013 de 1986 reglamenta el COPASST (Comité Paritario de Seguridad y Salud en el Trabajo), no el Comité de Convivencia.';
            } else {
                feedback.innerHTML = '❌ Incorrecto. La Ley 1562 de 2012 es el marco general que reforma el Sistema de Riesgos Laborales en Colombia, pero no la resolución específica del Comité de Convivencia.';
            }
            feedback.style.color = 'var(--danger)';
        }
    },

    checkScenario(element, scenarioId, isCorrect) {
        const parent = element.parentElement;
        const options = parent.querySelectorAll('.scenario-option');
        options.forEach(opt => {
            opt.style.pointerEvents = 'none';
            opt.classList.remove('selected');
        });
        element.classList.add('selected');
        if (isCorrect) element.classList.add('correct');
        else element.classList.add('incorrect');

        const explanations = {
            'm6s1': 'El COPASST es el organismo encargado de vigilar las condiciones de seguridad física e infraestructura (peligros locativos) en los centros de trabajo.',
            'm6s2': 'El Comité de Convivencia Laboral es el canal mediador y preventivo diseñado para atender presuntos casos de acoso laboral.',
            'm6s3': 'El Comité de Equidad de Género y Diversidad de la CUN se especializa en atender conductas discriminatorias basadas en género o identidad sexual.'
        };

        const resultEl = document.getElementById(`result-${scenarioId}`);
        resultEl.classList.add('show');
        resultEl.classList.add(isCorrect ? 'correct' : 'incorrect');
        resultEl.textContent = isCorrect ? '✅ ¡Correcto!' : `❌ Incorrecto. ${explanations[scenarioId]}`;
        
        if (isCorrect && typeof App !== 'undefined' && App.launchConfetti) {
            App.launchConfetti();
        }
    }
};
