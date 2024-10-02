function showGradeSelection(grado) {
    const topicContainer = document.getElementById("topic-container");
    const menu = document.getElementById("menu");
    const gradeImage = document.getElementById("grade-image");

    menu.classList.add("hidden");
    topicContainer.classList.remove("hidden");

    // Si seleccionamos Primer Grado, mostramos la imagen del Primer Grado
    if (grado === 1) {
        gradeImage.src = "1roGrado.jpg";  // Ruta correcta de la imagen
        gradeImage.classList.remove("hidden");
    } else {
        gradeImage.src = "1roGrado.jpg";  // Si no es Primer Grado, ocultamos la imagen
        gradeImage.classList.add("hidden");
    }
}




// Datos de los temas y preguntas para 1° y 2° Grado
const temasPorGrado = {
    1: {
        nombre: "Primer Grado",
        temas: [
            {
                nombre: "Reconocimiento de números (del 1 al 100)",
                preguntas: [
                    { texto: "1.- ¿Cuál es el número siguiente después de 99?", respuestaCorrecta: "100" },
                    { texto: "2.-¿Cuál es el número que sigue del 5?", respuestaCorrecta: "6" },
                    { texto: "3.-¿Qué número es mayor, 12 o 15?", respuestaCorrecta: "15" },
                    { texto: "4.-¿Cuál es el número que viene antes de 20?", respuestaCorrecta: "19" },
                    { texto: "5.-¿Cuál de los siguientes números es par (10 o 11) ?", respuestaCorrecta: "10" },
                    { texto: "6.-¿Cuál es el número que viene después de 30?", respuestaCorrecta: "31" },
                    { texto: "7.-¿Cuál de los siguientes números es impar (15 o 20) ?", respuestaCorrecta: "15" },
                    { texto: "8.-¿Que numero sigue despues del 11 ?", respuestaCorrecta: "12" },
                    { texto: "9.-¿Cuál es el número que sigue después de 88?", respuestaCorrecta: "89" },
                    { texto: "10.-¿Que numero es mayor 56 o 65?", respuestaCorrecta: "65" },
                ]
            },
            {
                nombre: "Sumas y restas simples",
                preguntas: [
                    { texto: "¿Cuál es el número siguiente después de 99?", respuestaCorrecta: "100" },
                    { texto: "¿Cuánto es 1 + 1?", respuestaCorrecta: "2" }
                ]
            },
            {
                nombre: "Formas geométricas básicas",
                preguntas: [
                    { texto: "¿Cuál es el número siguiente después de 99?", respuestaCorrecta: "100" },
                    { texto: "¿Cuánto es 1 + 1?", respuestaCorrecta: "2" }
                ]
            }
        ]
    },
    2: {
        nombre: "Segundo Grado",
        temas: [
            {
                nombre: "Sumas simples",
                preguntas: [
                    { texto: "¿Cuánto es 5 + 3?", respuestaCorrecta: "8" },
                    { texto: "¿Cuánto es 7 - 2?", respuestaCorrecta: "5" }
                ]
            }
        ]
    },
    3: {
        nombre:"Tercer Grado",
        Temas:[
            { 
                nombre: " ",
                preguntas: [
                    { texto: "¿Que es esto ?", respuestaCorrecta: "nose" },

                ]
            }
        ]
    },
    4: {
        nombre:"Cuarto Grado",
        Temas:[
            { 
                nombre: " ",
                preguntas: [
                    { texto: "¿   ?", respuestaCorrecta: " " },

                ]
            }
        ]
    },
    5: {
        nombre:"Quinto Grado",
        Temas:[
            { 
                nombre: " ",
                preguntas: [
                    { texto: "¿   ?", respuestaCorrecta: " " },

                ]
            }
        ]
    },
    6: {
        nombre:"Sexto Grado",
        Temas:[
            { 
                nombre: " ",
                preguntas: [
                    { texto: "¿   ?", respuestaCorrecta: " " },

                ]
            }
        ]
    },
};

// Variables para el puntaje y la pregunta actual
let puntajeTotal = 0;
let preguntaActualIndex = 0;
let gradoActual = 0;
let temaActualIndex = 0;

// Función para mostrar los temas del grado seleccionado
function showGradeSelection(grado) {
    document.getElementById("menu").classList.add("hidden");
    const topicContainer = document.getElementById("topic-container");
    topicContainer.classList.remove("hidden");

    const topicList = document.getElementById("topic-list");
    topicList.innerHTML = ""; // Limpiamos la lista

    const temas = temasPorGrado[grado].temas;

    temas.forEach((tema, index) => {
        const li = document.createElement("li");
        const button = document.createElement("button");
        button.textContent = tema.nombre;
        button.onclick = () => startQuiz(grado, index);
        li.appendChild(button);
        topicList.appendChild(li);
    });
}

// Función para iniciar el cuestionario del tema seleccionado
function startQuiz(grado, temaIndex) {
    gradoActual = grado;
    temaActualIndex = temaIndex;
    preguntaActualIndex = 0;
    puntajeTotal = 0;

    document.getElementById("topic-container").classList.add("hidden");
    const questionContainer = document.getElementById("question-container");
    questionContainer.classList.remove("hidden");

    const topicTitle = document.getElementById("topic-title");
    topicTitle.textContent = temasPorGrado[grado].temas[temaIndex].nombre;

    showQuestion();
}

// Función para mostrar la pregunta actual
function showQuestion() {
    const preguntas = temasPorGrado[gradoActual].temas[temaActualIndex].preguntas;
    const questionText = document.getElementById("question-text");

    if (preguntaActualIndex < preguntas.length) {
        questionText.textContent = preguntas[preguntaActualIndex].texto;
        document.getElementById("answer-input").value = "";
        document.getElementById("result").textContent = "";
    } else {
        finalizarCuestionario();
    }
}

// Función para verificar la respuesta
function checkAnswer() {
    const input = document.getElementById("answer-input").value;
    const result = document.getElementById("result");
    const preguntas = temasPorGrado[gradoActual].temas[temaActualIndex].preguntas;

    if (input === preguntas[preguntaActualIndex].respuestaCorrecta) {
        result.textContent = "¡Correcto!";
        result.style.color = "green";
        puntajeTotal += 2; // Cada pregunta vale 2 puntos
    } else {
        result.textContent = "Respuesta incorrecta. Intenta de nuevo.";
        result.style.color = "red";
    }
}

// Función para pasar a la siguiente pregunta
function nextQuestion() {
    preguntaActualIndex++;
    showQuestion();
}

// Función para finalizar el cuestionario
function finalizarCuestionario() {
    document.getElementById("question-container").classList.add("hidden");
    document.getElementById("end-container").classList.remove("hidden");

    // Mostrar el puntaje total
    document.getElementById("total-score").textContent = puntajeTotal;
}

// Función para volver al menú principal
function volverAlMenu() {
    document.getElementById("menu").classList.remove("hidden");
    document.getElementById("topic-container").classList.add("hidden");
    document.getElementById("question-container").classList.add("hidden");
    document.getElementById("end-container").classList.add("hidden");
}

// Función para volver al menú de temas del grado
function volverATemas() {
    document.getElementById("end-container").classList.add("hidden");
    document.getElementById("topic-container").classList.remove("hidden");
}


