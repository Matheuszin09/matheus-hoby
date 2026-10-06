// ===============================
// QUIZ FUTEBOL HUB
// ===============================

const questions = [

    {
        category: "Futebol brasileiro",
        question: "Qual clube é conhecido como 'Verdão'?",
        answers: [
            "Palmeiras",
            "Flamengo",
            "Santos",
            "Grêmio"
        ],
        correct: 0
    },

    {
        category: "Copa do Mundo",
        question: "Qual país possui mais títulos de Copa do Mundo?",
        answers: [
            "Alemanha",
            "Brasil",
            "Argentina",
            "Itália"
        ],
        correct: 1
    },

    {
        category: "Jogadores",
        question: "Qual jogador brasileiro é conhecido como 'Rei do Futebol'?",
        answers: [
            "Neymar",
            "Ronaldo",
            "Pelé",
            "Ronaldinho"
        ],
        correct: 2
    },

    {
        category: "Futebol brasileiro",
        question: "Qual clube é conhecido como 'Mengão'?",
        answers: [
            "Flamengo",
            "Botafogo",
            "Vasco",
            "Fluminense"
        ],
        correct: 0
    },

    {
        category: "Copa do Mundo",
        question: "Em qual país foi realizada a Copa do Mundo de 2014?",
        answers: [
            "Rússia",
            "Brasil",
            "França",
            "Alemanha"
        ],
        correct: 1
    },

    {
        category: "Regras",
        question: "Quantos jogadores cada time começa normalmente em campo?",
        answers: [
            "9",
            "10",
            "11",
            "12"
        ],
        correct: 2
    },

    {
        category: "Futebol mundial",
        question: "Qual seleção é conhecida como 'La Albiceleste'?",
        answers: [
            "Argentina",
            "Uruguai",
            "Espanha",
            "Chile"
        ],
        correct: 0
    },

    {
        category: "Jogadores",
        question: "Qual destes jogadores é conhecido como CR7?",
        answers: [
            "Lionel Messi",
            "Cristiano Ronaldo",
            "Kylian Mbappé",
            "Neymar"
        ],
        correct: 1
    },

    {
        category: "Estádios",
        question: "Em qual estádio o Flamengo costuma mandar seus jogos?",
        answers: [
            "Maracanã",
            "Mineirão",
            "Morumbi",
            "Beira-Rio"
        ],
        correct: 0
    },

    {
        category: "Futebol mundial",
        question: "Qual país ficou conhecido pela seleção 'Azzurra'?",
        answers: [
            "Espanha",
            "Portugal",
            "Itália",
            "França"
        ],
        correct: 2
    }

];


let currentQuestion = 0;

let score = 0;

let answered = false;


// ELEMENTOS

const questionNumber =
    document.getElementById("questionNumber");

const question =
    document.getElementById("question");

const category =
    document.getElementById("category");

const answers =
    document.getElementById("answers");

const scoreElement =
    document.getElementById("score");

const progressBar =
    document.getElementById("progressBar");

const nextBtn =
    document.getElementById("nextBtn");

const feedback =
    document.getElementById("feedback");

const result =
    document.getElementById("result");

const finalScore =
    document.getElementById("finalScore");

const resultTitle =
    document.getElementById("resultTitle");

const resultText =
    document.getElementById("resultText");

const restartBtn =
    document.getElementById("restartBtn");


// ===============================
// CARREGAR PERGUNTA
// ===============================

function loadQuestion() {

    answered = false;

    nextBtn.disabled = true;

    feedback.textContent = "";

    const current = questions[currentQuestion];

    questionNumber.textContent =
        `Pergunta ${currentQuestion + 1} de ${questions.length}`;

    category.textContent =
        current.category;

    question.textContent =
        current.question;

    progressBar.style.width =
        `${((currentQuestion + 1) / questions.length) * 100}%`;

    answers.innerHTML = "";


    current.answers.forEach((answer, index) => {

        const button =
            document.createElement("button");

        button.type = "button";

        button.className = "answer";

        button.textContent =
            `${String.fromCharCode(65 + index)}. ${answer}`;

        button.addEventListener(
            "click",
            () => selectAnswer(index, button)
        );

        answers.appendChild(button);

    });

}


// ===============================
// RESPONDER
// ===============================

function selectAnswer(index, selectedButton) {

    if (answered) {
        return;
    }

    answered = true;

    const current =
        questions[currentQuestion];

    const allButtons =
        document.querySelectorAll(".answer");


    allButtons.forEach(button => {
        button.disabled = true;
    });


    if (index === current.correct) {

        selectedButton.classList.add("correct");

        score++;

        scoreElement.textContent =
            score;

        feedback.textContent =
            "✓ Resposta correta!";

        feedback.style.color =
            "#16c172";

    } else {

        selectedButton.classList.add("wrong");

        allButtons[current.correct]
            .classList.add("correct");

        feedback.textContent =
            "✕ Resposta incorreta.";

        feedback.style.color =
            "#ef5350";
    }


    nextBtn.disabled = false;

}


// ===============================
// PRÓXIMA PERGUNTA
// ===============================

nextBtn.addEventListener("click", () => {

    currentQuestion++;

    if (currentQuestion >= questions.length) {

        showResult();

        return;
    }

    loadQuestion();

});


// ===============================
// RESULTADO
// ===============================

function showResult() {

    answers.style.display = "none";

    document.querySelector(".question-area")
        .style.display = "none";

    document.querySelector(".progress-container")
        .style.display = "none";

    document.querySelector(".quiz-footer")
        .style.display = "none";

    document.querySelector(".quiz-header")
        .style.display = "none";


    result.classList.add("active");

    finalScore.textContent =
        `${score}/${questions.length}`;


    const percentage =
        (score / questions.length) * 100;


    if (percentage === 100) {

        resultTitle.textContent =
            "Lenda do futebol! 🏆";

        resultText.textContent =
            "Você acertou todas as perguntas. Seu conhecimento é impressionante!";

    } else if (percentage >= 70) {

        resultTitle.textContent =
            "Craque! 🔥";

        resultText.textContent =
            "Você mostrou que conhece bastante de futebol.";

    } else if (percentage >= 50) {

        resultTitle.textContent =
            "Bom jogo! ⚽";

        resultText.textContent =
            "Você foi bem, mas ainda pode melhorar sua pontuação.";

    } else {

        resultTitle.textContent =
            "Hora de treinar! 💪";

        resultText.textContent =
            "Que tal estudar um pouco mais e tentar novamente?";
    }

}


// ===============================
// REINICIAR
// ===============================

restartBtn.addEventListener("click", () => {

    currentQuestion = 0;

    score = 0;

    scoreElement.textContent = "0";


    answers.style.display = "grid";

    document.querySelector(".question-area")
        .style.display = "block";

    document.querySelector(".progress-container")
        .style.display = "block";

    document.querySelector(".quiz-footer")
        .style.display = "flex";

    document.querySelector(".quiz-header")
        .style.display = "flex";


    result.classList.remove("active");


    loadQuestion();

});


// ===============================
// MENU MOBILE
// ===============================

const menuBtn =
    document.getElementById("menuBtn");

const nav =
    document.querySelector("nav");


menuBtn.addEventListener("click", () => {

    nav.classList.toggle("active");

    menuBtn.textContent =
        nav.classList.contains("active")
            ? "✕"
            : "☰";

});


document.querySelectorAll("nav a")
    .forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("active");

            menuBtn.textContent = "☰";

        });

    });


// ===============================
// INICIAR
// ===============================

loadQuestion();
