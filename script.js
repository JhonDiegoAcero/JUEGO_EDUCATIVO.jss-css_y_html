const topics = {
    1: [
        "Reconocimiento de números del 1 al 100",
        "Sumas y restas simples (sin llevar)",
        "Formas geométricas básicas",
        "Comparación de cantidades (mayor, menor, igual)"
    ],
    2: [
        "Sumas y restas con y sin llevadas",
        "Números hasta el 1000",
        "Introducción a la multiplicación (tablas del 1 al 5)",
        "Medidas de longitud y tiempo",
        "Reconocimiento de figuras geométricas (triángulos, cuadrados, círculos)"
    ],
    3: [
        "Multiplicación y división básicas (tablas hasta el 10)",
        "Sumas y restas con números grandes",
        "Fracciones simples (mitades y cuartos)",
        "Perímetro de figuras geométricas",
        "Uso de la regla y otras unidades de medida (cm, m)"
    ],
    4: [
        "Operaciones con números mayores (hasta 10,000)",
        "Multiplicación y división con varias cifras",
        "Fracciones equivalentes y comparación de fracciones",
        "Área y perímetro de figuras",
        "Introducción a decimales y su relación con fracciones"
    ],
    5: [
        "Operaciones con números decimales",
        "Sumas, restas, multiplicación y división de fracciones",
        "Cálculo de áreas de figuras complejas (rectángulos, triángulos)",
        "Introducción a los ángulos",
        "Problemas con porcentajes"
    ],
    6: [
        "Números enteros y operaciones con ellos",
        "Ecuaciones simples y resolución de problemas",
        "Introducción al álgebra básica (uso de variables)",
        "Volumen de cuerpos geométricos (cubos, prismas)",
        "Cálculo de porcentajes y proporciones"
    ]
};

const exercises = {
    "Reconocimiento de números del 1 al 100": [
        { question: "¿Cuál es el número que sigue al 5?", answer: "6" },
        { question: "¿Qué número es mayor, 7 o 9?", answer: "9" },
        { question: "¿Cuál es el número anterior al 10?", answer: "9" },
        { question: "¿Cuál es el número que precede al 15?", answer: "14" },
        { question: "¿Qué número es 20 menos 3?", answer: "17" },
        { question: "¿Cuál es el número que sigue al 30?", answer: "31" },
        { question: "¿Qué número está entre el 25 y el 27?", answer: "26" },
        { question: "¿Cuál es el número que precede al 40?", answer: "39" },
        { question: "¿Cuál es el número que sigue al 50?", answer: "51" },
        { question: "¿Qué número es mayor, 60 o 70?", answer: "70" }
    ],
    "Sumas y restas simples (sin llevar)": [
        { question: "¿Cuánto es 2 + 3?", answer: "5" },
        { question: "¿Cuánto es 7 - 4?", answer: "3" },
        { question: "¿Qué es 5 + 6?", answer: "11" },
        { question: "¿Cuánto es 8 - 2?", answer: "6" },
        { question: "¿Qué es 9 + 1?", answer: "10" },
        { question: "¿Cuánto es 4 - 1?", answer: "3" },
        { question: "¿Qué es 6 + 2?", answer: "8" },
        { question: "¿Cuánto es 10 - 5?", answer: "5" },
        { question: "¿Qué es 3 + 3?", answer: "6" },
        { question: "¿Cuánto es 7 - 3?", answer: "4" }
    ],
    "Formas geométricas básicas": [
        { question: "¿Cómo se llama una figura con 3 lados?", answer: "Triángulo" },
        { question: "¿Qué forma tiene 4 lados iguales?", answer: "Cuadrado" },
        { question: "¿Cuál es el nombre de la figura redonda?", answer: "Círculo" },
        { question: "¿Cómo se llama una figura con 4 lados y ángulos rectos?", answer: "Rectángulo" },
        { question: "¿Qué figura tiene 6 lados?", answer: "Hexágono" },
        { question: "¿Cuál es la forma de una pelota?", answer: "Esfera" },
        { question: "¿Cómo se llama una figura con 5 lados?", answer: "Pentágono" },
        { question: "¿Qué figura tiene 8 lados?", answer: "Octágono" },
        { question: "¿Cuál es la figura con 4 lados de diferentes longitudes?", answer: "Trapecio" },
        { question: "¿Cómo se llama una figura con 7 lados?", answer: "Heptágono" }
    ],
    "Comparación de cantidades (mayor, menor, igual)": [
        { question: "¿Qué es mayor, 8 o 6?", answer: "8" },
        { question: "¿Cuál es menor, 3 o 5?", answer: "3" },
        { question: "¿Son iguales 7 y 7?", answer: "Sí" },
        { question: "¿Qué es mayor, 12 o 15?", answer: "15" },
        { question: "¿Cuál es menor, 9 o 11?", answer: "9" },
        { question: "¿Son iguales 4 y 4?", answer: "Sí" },
        { question: "¿Qué es mayor, 20 o 18?", answer: "20" },
        { question: "¿Cuál es menor, 2 o 6?", answer: "2" },
        { question: "¿Son iguales 10 y 10?", answer: "Sí" },
        { question: "¿Qué es mayor, 5 o 3?", answer: "5" }
    ]
};

let currentGrade = 0;
let currentTopic = "";
let currentQuestionIndex = 0;
let score = 0;

function showGradeSelection(section) {
    document.getElementById('menu').classList.add('hidden');
    document.getElementById(`gradeSelection${section}`).classList.remove('hidden');
}

function showTopics(grade) {
    currentGrade = grade;
    document.querySelectorAll('.levels, #menu').forEach(el => el.classList.add('hidden'));
    document.getElementById('topics').classList.remove('hidden');
    
    const gradeTitle = ["Primer Grado", "Segundo Grado", "Tercer Grado", "Cuarto Grado", "Quinto Grado", "Sexto Grado"][grade - 1];
    document.getElementById('gradeTitle').innerText = `Temas de ${gradeTitle}`;
    
    const topicButtons = topics[grade].map(topic => `<button onclick="startGame('${topic}')">${topic}</button>`).join('');
    document.getElementById('topicButtons').innerHTML = topicButtons;
}

function backToGradeSelection() {
    document.getElementById('topics').classList.add('hidden');
    document.getElementById(`gradeSelection${Math.ceil(currentGrade / 2)}`).classList.remove('hidden');
}

function startGame(topic) {
    currentTopic = topic;
    document.querySelectorAll('.levels, #menu, #topics').forEach(el => el.classList.add('hidden'));
    document.getElementById('game').classList.remove('hidden');

    document.getElementById('exercise-title').innerText = topic;
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    const questions = exercises[currentTopic];

    if (questions && currentQuestionIndex < questions.length) {
        const question = questions[currentQuestionIndex];
        document.getElementById('question-text').innerText = question.question;
        document.getElementById('answer-input').value = '';
        document.getElementById('result').classList.add('hidden');
        document.getElementById('question-container').classList.remove('hidden');
    } else {
        document.getElementById('question-container').classList.add('hidden');
        document.getElementById('result').innerHTML = `Puntuación Final: ${score} / ${exercises[currentTopic].length * 2}`;
        document.getElementById('result').classList.remove('hidden');
    }
}

function submitAnswer() {
    const questions = exercises[currentTopic];
    const answerInput = document.getElementById('answer-input');
    const correctAnswer = questions[currentQuestionIndex].answer;

    if (answerInput.value.trim() === correctAnswer) {
        score += 2;
    }

    currentQuestionIndex++;
    showQuestion();
}

function backToTopics() {
    document.getElementById('game').classList.add('hidden');
    document.getElementById('topics').classList.remove('hidden');
}

function backToMenu() {
    document.querySelectorAll('.levels').forEach(level => level.classList.add('hidden'));
    document.getElementById('menu').classList.remove('hidden');
}
