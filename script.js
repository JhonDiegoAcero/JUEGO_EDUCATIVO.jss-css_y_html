const exercises = {
    "Comparación de Números": [
        { question: "1.-¿Cuál es mayor, 5 o 8?", answer: "8" },
        { question: "2-.¿Cuál es menor, 12 o 10?", answer: "10" },
        { question: "3.-¿Cuál es igual a 7, 7 o 9?", answer: "7" },
        { question: "4.-¿Cuál es mayor, 15 o 14?", answer: "15" },
        { question: "5.-¿Cuál es menor, 20 o 25?", answer: "20" },
        { question: "6.-¿Cuál es igual a 3, 2 o 3?", answer: "3" },
        { question: "7.-¿Cuál es mayor, 30 o 25?", answer: "30" },
        { question: "8.-¿Cuál es menor, 9 o 11?", answer: "9" },
        { question: "9.-¿Cuál es igual a 4, 4 o 6?", answer: "4" },
        { question: "10.-¿Cuál es mayor, 50 o 49?", answer: "50" }
    ]
};

let currentQuestionIndex = 0;
let score = 0;

function showLevels(grade) {
    document.getElementById('menu').classList.add('hidden');
    document.querySelectorAll('.levels').forEach(level => level.classList.add('hidden'));
    document.getElementById(`level${grade}`).classList.remove('hidden');
}

function startGame(exercise) {
    document.getElementById('menu').classList.add('hidden');
    document.querySelectorAll('.levels').forEach(level => level.classList.add('hidden'));
    document.getElementById('game').classList.remove('hidden');

    document.getElementById('exercise-title').innerText = exercise;
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    const exercise = document.getElementById('exercise-title').innerText;
    const questions = exercises[exercise];

    if (questions && currentQuestionIndex < questions.length) {
        const question = questions[currentQuestionIndex];
        document.getElementById('question-text').innerText = question.question;
        document.getElementById('answer-input').value = '';
        document.getElementById('result').classList.add('hidden');
        document.getElementById('question-container').classList.remove('hidden');
    } else {
        document.getElementById('question-container').classList.add('hidden');
        document.getElementById('result').innerHTML = `Puntuación Final: ${score} / ${exercises[exercise].length * 2}`;
        document.getElementById('result').classList.remove('hidden');
    }
}

function submitAnswer() {
    const exercise = document.getElementById('exercise-title').innerText;
    const questions = exercises[exercise];
    const answerInput = document.getElementById('answer-input');
    const correctAnswer = questions[currentQuestionIndex].answer;

    if (answerInput.value.trim() === correctAnswer) {
        score += 2;
    }

    currentQuestionIndex++;
    showQuestion();
}

function nextQuestion() {
    submitAnswer();
}

function backToLevels() {
    document.getElementById('game').classList.add('hidden');
    document.querySelectorAll('.levels').forEach(level => {
        if (!level.classList.contains('hidden')) {
            level.classList.add('hidden');
        }
    });
    document.getElementById('menu').classList.remove('hidden');
}

function backToMenu() {
    document.querySelectorAll('.levels').forEach(level => level.classList.add('hidden'));
    document.getElementById('menu').classList.remove('hidden');
}
