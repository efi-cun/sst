/* ========================================
   Activities Engine — Juegos y actividades interactivas
   ======================================== */
const ActivitiesEngine = (() => {
    let activities = null;
    let currentModule = null;
    let currentItems = [];
    let currentIndex = 0;
    let score = 0;
    let total = 0;
    let answers = [];
    const PASS_SCORE = 80;

    // ============ LOAD ============
    async function loadActivities() {
        if (activities) return activities;
        if (typeof ACTIVITIES_DATA !== 'undefined') {
            activities = ACTIVITIES_DATA;
            return activities;
        }
        try {
            const res = await fetch('data/activities.json');
            activities = await res.json();
            return activities;
        } catch (e) {
            console.error('Error loading activities:', e);
            return null;
        }
    }

    async function startActivities(moduleNum) {
        await loadActivities();
        const key = `modulo${moduleNum}`;
        if (!activities || !activities[key]) return null;

        currentModule = moduleNum;
        currentItems = activities[key];
        currentIndex = 0;
        score = 0;
        total = currentItems.length;
        answers = [];

        return currentItems;
    }

    function getCurrentItem() {
        if (currentIndex >= currentItems.length) return null;
        return currentItems[currentIndex];
    }

    let onCompleteCallback = null;
    function setOnCompleteCallback(cb) {
        onCompleteCallback = cb;
    }

    function addScore(isCorrect) {
        if (isCorrect) score++;
        answers.push({ index: currentIndex, correct: isCorrect });
        if (onCompleteCallback) {
            const currentItem = getCurrentItem();
            onCompleteCallback(isCorrect, currentItem ? currentItem.explicacion : '');
        }
    }

    function nextItem() {
        currentIndex++;
        return currentIndex < currentItems.length;
    }

    function getProgress() {
        return {
            current: currentIndex + 1,
            total: currentItems.length,
            percent: Math.round(((currentIndex + 1) / currentItems.length) * 100)
        };
    }

    function getResults() {
        const percent = Math.round((score / total) * 100);
        return { module: currentModule, score, total, percent, passed: percent >= PASS_SCORE, answers };
    }

    function getPassScore() { return PASS_SCORE; }

    // ============ RENDER ============
    function renderItem(item) {
        switch (item.type) {
            case 'quiz': return renderQuiz(item);
            case 'true-false': return renderTrueFalse(item);
            case 'match': return renderMatch(item);
            case 'sort': return renderSort(item);
            case 'sequence': return renderSequence(item);
            default: return renderQuiz(item);
        }
    }

    function getTypeLabel(type) {
        const labels = {
            'quiz': '❓ Pregunta',
            'true-false': '✅❌ Verdadero o Falso',
            'match': '🔗 Emparejar',
            'sort': '📂 Clasificar',
            'sequence': '🔢 Ordenar'
        };
        return labels[type] || 'Actividad';
    }

    function getTypeIcon(type) {
        const icons = { 'quiz': '❓', 'true-false': '⚖️', 'match': '🔗', 'sort': '📂', 'sequence': '🔢' };
        return icons[type] || '🎯';
    }

    // ---- QUIZ ----
    function renderQuiz(item) {
        const letters = ['A', 'B', 'C', 'D'];
        return `
            <div class="activity-badge">${getTypeIcon(item.type)} ${getTypeLabel(item.type)}</div>
            <h3 class="activity-question">${item.pregunta}</h3>
            <div class="activity-options">
                ${item.opciones.map((opt, i) => `
                    <div class="activity-option" data-index="${i}" onclick="ActivitiesEngine.handleQuiz(this, ${i}, ${item.correcta})">
                        <span class="activity-option-letter">${letters[i]}</span>
                        <span>${opt}</span>
                    </div>
                `).join('')}
            </div>
        `;
    }

    function handleQuiz(el, selected, correct) {
        const parent = el.parentElement;
        parent.querySelectorAll('.activity-option').forEach(o => o.style.pointerEvents = 'none');
        parent.querySelectorAll('.activity-option')[correct].classList.add('correct');
        if (selected !== correct) el.classList.add('incorrect');
        addScore(selected === correct);
    }

    // ---- TRUE / FALSE ----
    function renderTrueFalse(item) {
        return `
            <div class="activity-badge">${getTypeIcon(item.type)} ${getTypeLabel(item.type)}</div>
            <h3 class="activity-question">${item.afirmacion}</h3>
            <div class="activity-tf-buttons">
                <button class="activity-tf-btn true-btn" onclick="ActivitiesEngine.handleTF(this, true, ${item.valor})">✅ Verdadero</button>
                <button class="activity-tf-btn false-btn" onclick="ActivitiesEngine.handleTF(this, false, ${item.valor})">❌ Falso</button>
            </div>
        `;
    }

    function handleTF(btn, selected, correct) {
        const parent = btn.parentElement;
        parent.querySelectorAll('.activity-tf-btn').forEach(b => b.style.pointerEvents = 'none');
        const isCorrect = selected === correct;
        if (isCorrect) {
            btn.classList.add('correct');
        } else {
            btn.classList.add('incorrect');
            parent.querySelectorAll('.activity-tf-btn').forEach(b => {
                if ((correct === true && b.classList.contains('true-btn')) ||
                    (correct === false && b.classList.contains('false-btn'))) {
                    b.classList.add('correct');
                }
            });
        }
        addScore(isCorrect);
    }

    // ---- MATCH ----
    function renderMatch(item) {
        const shuffledRight = [...item.pares].sort(() => Math.random() - 0.5);
        return `
            <div class="activity-badge">${getTypeIcon(item.type)} ${getTypeLabel(item.type)}</div>
            <h3 class="activity-question">${item.instruccion}</h3>
            <p class="activity-hint">Toca un elemento de la izquierda y luego su par de la derecha</p>
            <div class="activity-match-grid" data-match-data='${JSON.stringify(item.pares).replace(/'/g, "&#39;")}'>
                <div class="match-col match-left">
                    ${item.pares.map((p, i) => `
                        <div class="match-item" data-side="left" data-idx="${i}" data-key="${p.izq}" onclick="ActivitiesEngine.handleMatchClick(this)">${p.izq}</div>
                    `).join('')}
                </div>
                <div class="match-col match-right">
                    ${shuffledRight.map((p, i) => `
                        <div class="match-item" data-side="right" data-idx="${i}" data-key="${p.der}" onclick="ActivitiesEngine.handleMatchClick(this)">${p.der}</div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    let matchSelected = null;
    let matchPairsFound = 0;
    let matchTotalPairs = 0;
    let matchCorrectCount = 0;

    function handleMatchClick(el) {
        if (el.classList.contains('matched')) return;

        const grid = el.closest('.activity-match-grid');
        if (!grid) return;

        // If clicking same side, just select
        if (!matchSelected) {
            matchSelected = el;
            el.classList.add('selected');
            return;
        }

        // Must be different side
        if (matchSelected.dataset.side === el.dataset.side) {
            matchSelected.classList.remove('selected');
            matchSelected = el;
            el.classList.add('selected');
            return;
        }

        // Check match
        const leftEl = matchSelected.dataset.side === 'left' ? matchSelected : el;
        const rightEl = matchSelected.dataset.side === 'right' ? matchSelected : el;

        const data = JSON.parse(grid.dataset.matchData.replace(/&quot;/g, '"').replace(/&#39;/g, "'"));
        const leftKey = leftEl.dataset.key;
        const correctRight = data.find(p => p.izq === leftKey);

        if (correctRight && correctRight.der === rightEl.dataset.key) {
            // Correct match
            leftEl.classList.remove('selected');
            leftEl.classList.add('matched');
            rightEl.classList.add('matched');
            matchCorrectCount++;
            matchPairsFound++;
        } else {
            // Wrong match
            leftEl.classList.remove('selected');
            leftEl.classList.add('wrong');
            rightEl.classList.add('wrong');
            setTimeout(() => {
                leftEl.classList.remove('wrong');
                rightEl.classList.remove('wrong');
            }, 600);
            matchPairsFound++;
        }

        matchSelected = null;
        matchTotalPairs = data.length;

        // All matched?
        if (matchPairsFound >= matchTotalPairs) {
            const allCorrect = matchCorrectCount >= matchTotalPairs;
            addScore(allCorrect);
        }
    }

    // ---- SORT ----
    function renderSort(item) {
        const shuffled = [...item.elementos].sort(() => Math.random() - 0.5);
        return `
            <div class="activity-badge">${getTypeIcon(item.type)} ${getTypeLabel(item.type)}</div>
            <h3 class="activity-question">${item.instruccion}</h3>
            <p class="activity-hint">Toca un elemento y luego la categoría donde crees que pertenece</p>
            <div class="activity-sort" data-sort-data='${JSON.stringify(item.elementos).replace(/'/g, "&#39;")}' data-categories='${JSON.stringify(item.categorias).replace(/'/g, "&#39;")}'>
                <div class="sort-items">
                    ${shuffled.map((e, i) => `
                        <div class="sort-item" data-idx="${i}" data-text="${e.texto}" data-cat="${e.categoria}" onclick="ActivitiesEngine.handleSortClick(this)">${e.texto}</div>
                    `).join('')}
                </div>
                <div class="sort-categories">
                    ${item.categorias.map(cat => `
                        <div class="sort-category" data-cat-name="${cat}" onclick="ActivitiesEngine.handleSortCategory(this)">
                            <div class="sort-cat-title">${cat}</div>
                            <div class="sort-cat-items"></div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    let sortSelected = null;
    let sortPlaced = 0;
    let sortCorrect = 0;
    let sortTotal = 0;

    function handleSortClick(el) {
        if (el.classList.contains('placed')) return;
        document.querySelectorAll('.sort-item.selected').forEach(s => s.classList.remove('selected'));
        sortSelected = el;
        el.classList.add('selected');
    }

    function handleSortCategory(catEl) {
        if (!sortSelected) return;
        const catName = catEl.dataset.catName;
        const itemCat = sortSelected.dataset.cat;

        sortPlaced++;
        sortTotal = sortSelected.closest('.activity-sort').querySelectorAll('.sort-item').length;

        if (catName === itemCat) {
            sortCorrect++;
            const item = document.createElement('div');
            item.className = 'sort-placed-item correct';
            item.textContent = sortSelected.dataset.text;
            catEl.querySelector('.sort-cat-items').appendChild(item);
            sortSelected.classList.add('placed');
            sortSelected.classList.remove('selected');
            sortSelected.style.display = 'none';
        } else {
            sortSelected.classList.add('wrong');
            sortSelected.classList.remove('selected');
            setTimeout(() => sortSelected.classList.remove('wrong'), 600);
        }

        sortSelected = null;

        // All placed?
        if (sortPlaced >= sortTotal) {
            addScore(sortCorrect >= sortTotal);
        }
    }

    // ---- SEQUENCE ----
    function renderSequence(item) {
        const shuffled = [...item.pasos].sort(() => Math.random() - 0.5);
        return `
            <div class="activity-badge">${getTypeIcon(item.type)} ${getTypeLabel(item.type)}</div>
            <h3 class="activity-question">${item.instruccion}</h3>
            <p class="activity-hint">Toca los pasos en el orden correcto (1, 2, 3...)</p>
            <div class="activity-sequence" data-correct-order='${JSON.stringify(item.pasos).replace(/'/g, "&#39;")}'>
                <div class="sequence-items">
                    ${shuffled.map((p, i) => `
                        <div class="sequence-item" data-step="${p}" onclick="ActivitiesEngine.handleSequenceClick(this)">${p}</div>
                    `).join('')}
                </div>
                <div class="sequence-order">
                    <div class="sequence-label">Orden seleccionado:</div>
                    <div class="sequence-placed"></div>
                </div>
                <button class="btn btn-outline btn-sm" style="margin-top:0.5rem" onclick="ActivitiesEngine.resetSequence()">🔄 Reiniciar</button>
            </div>
        `;
    }

    let sequenceOrder = [];
    let sequenceTotal = 0;

    function handleSequenceClick(el) {
        if (el.classList.contains('placed')) return;

        const container = el.closest('.activity-sequence');
        const correctOrder = JSON.parse(container.dataset.correctOrder.replace(/&quot;/g, '"').replace(/&#39;/g, "'"));
        sequenceTotal = correctOrder.length;

        const step = el.dataset.step;
        sequenceOrder.push(step);
        el.classList.add('placed');
        el.style.opacity = '0.4';

        const placedDiv = container.querySelector('.sequence-placed');
        const num = sequenceOrder.length;
        const item = document.createElement('div');
        item.className = 'sequence-placed-item';
        item.textContent = `${num}. ${step}`;
        placedDiv.appendChild(item);

        // All placed?
        if (sequenceOrder.length >= sequenceTotal) {
            let allCorrect = true;
            for (let i = 0; i < sequenceTotal; i++) {
                if (sequenceOrder[i] !== correctOrder[i]) {
                    allCorrect = false;
                    break;
                }
            }
            addScore(allCorrect);
            // Show visual feedback
            placedDiv.querySelectorAll('.sequence-placed-item').forEach((el, i) => {
                if (sequenceOrder[i] === correctOrder[i]) {
                    el.classList.add('correct');
                } else {
                    el.classList.add('incorrect');
                }
            });
        }
    }

    function resetSequence() {
        sequenceOrder = [];
        document.querySelectorAll('.sequence-item').forEach(el => {
            el.classList.remove('placed');
            el.style.opacity = '1';
        });
        document.querySelectorAll('.sequence-placed').forEach(el => el.innerHTML = '');
    }

    // ============ PUBLIC API ============
    return {
        startActivities,
        getCurrentItem,
        nextItem,
        getProgress,
        getResults,
        getPassScore,
        renderItem,
        handleQuiz,
        handleTF,
        handleMatchClick,
        handleSortClick,
        handleSortCategory,
        handleSequenceClick,
        resetSequence,
        setOnCompleteCallback
    };
})();
