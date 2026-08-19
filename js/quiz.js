/* ========================================
   Quiz Engine
   ======================================== */
const QuizEngine = (() => {
    let quizzes = null;
    let currentModule = null;
    let currentQuestions = [];
    let currentIndex = 0;
    let score = 0;
    let answers = [];
    const PASS_SCORE = 80;

    async function loadQuizzes() {
        if (quizzes) return quizzes;
        if (typeof QUIZZES_DATA !== 'undefined') {
            quizzes = QUIZZES_DATA;
            return quizzes;
        }
        try {
            const res = await fetch('data/quizzes.json');
            quizzes = await res.json();
            return quizzes;
        } catch (e) {
            console.error('Error loading quizzes:', e);
            return null;
        }
    }

    function shuffleArray(arr) {
        const shuffled = [...arr];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    async function startQuiz(moduleNum) {
        await loadQuizzes();
        const key = `modulo${moduleNum}`;
        if (!quizzes || !quizzes[key]) return null;

        currentModule = moduleNum;
        currentQuestions = shuffleArray(quizzes[key]);
        currentIndex = 0;
        score = 0;
        answers = [];

        return currentQuestions;
    }

    function getCurrentQuestion() {
        if (currentIndex >= currentQuestions.length) return null;
        return currentQuestions[currentIndex];
    }

    function getTotalQuestions() {
        return currentQuestions.length;
    }

    function answerQuestion(optionIndex) {
        const question = getCurrentQuestion();
        if (!question) return null;

        const isCorrect = optionIndex === question.correcta;
        if (isCorrect) score++;

        answers.push({
            questionId: question.id,
            selected: optionIndex,
            correct: question.correcta,
            isCorrect
        });

        return {
            isCorrect,
            correctIndex: question.correcta,
            explanation: question.explicacion
        };
    }

    function nextQuestion() {
        currentIndex++;
        return currentIndex < currentQuestions.length;
    }

    function getProgress() {
        return {
            current: currentIndex + 1,
            total: currentQuestions.length,
            percent: Math.round(((currentIndex + 1) / currentQuestions.length) * 100)
        };
    }

    function getResults() {
        const total = currentQuestions.length;
        const percent = Math.round((score / total) * 100);
        const passed = percent >= PASS_SCORE;

        return {
            module: currentModule,
            score,
            total,
            percent,
            passed,
            answers
        };
    }

    function getPassScore() {
        return PASS_SCORE;
    }

    return {
        loadQuizzes,
        startQuiz,
        getCurrentQuestion,
        getTotalQuestions,
        answerQuestion,
        nextQuestion,
        getProgress,
        getResults,
        getPassScore
    };
})();
