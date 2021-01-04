var startBtn = document.getElementById("startEl")
var questionBlock = document.getElementById("questionSectionEl")

var currentQuestion = 0
var currentChoices = 0
var correct = 0
var wrong = 0
var timer
var timeLeft = 45
var buttonNum = 0


// var questionBtnEl = document.getElementById("")

startBtn.addEventListener("click", quiz);

// list of available questions
var arrayQuestions = [
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["booleans", "integers", "strings", "alerts"],
        answer: "alerts",
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "terminal/bash", "console.log", "for loops"],
        answer: "console.log",
    },
    {
        question: "The condition in an if/else statement is enclosed within _____.",
        choices: ["curly brackets", "quotes", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        question: "Strings values must be enclosed within _____ when being assigned to variables.",
        choices: ["for loops", "commas", "curly brackets", "quotes"],
        answer: "quotes"
    },
    {
        question: "Arrays in JavaScript can be used to store _____.",
        choices: ["strings", "booleans", "integers", "all of the above"],
        answer: "all of the above"
    }
]

function quiz(event) {
    // event.preventDefault();
    startBtn.style.display = "none";

    var choices = arrayQuestions[currentQuestion].choices
    var questions = arrayQuestions[currentQuestion].question
    var answers = arrayQuestions[currentQuestion].answer

    if (currentQuestion <= arrayQuestions.length - 1) {

        var addQuestion = document.createElement("p")
        addQuestion.textContent = arrayQuestions[currentQuestion].question;
        addQuestion.setAttribute("id", "questionEl")
        console.log(addQuestion.textContent);
        questionBlock.appendChild(addQuestion);
        currentQuestion++

        for (i = 0; i <= choices.length - 1; i++) {
            console.log(choices)
            addBtn = document.createElement("button")
            console.log(i);
            addBtn.textContent = choices[i];
            addBtn.setAttribute("id", "btnEl" + i)
            addBtn.addEventListener("click", nextQuestion)
            questionBlock.appendChild(addBtn);
            currentChoices++

            if (document.querySelectorAll("btnEl").click == true) {
                console.log("Clicked!")
                questionBlock.removeChild(addQuestion);

            }
        }
    }
}

function nextQuestion(event) {
    event.preventDefault();
    if (document.getElementById("btnEl0")) {
        var questionBtn = document.getElementById("questionEl")
        var btn1 = document.getElementById("btnEl0")
        var btn2 = document.getElementById("btnEl1")
        var btn3 = document.getElementById("btnEl2")
        var btn4 = document.getElementById("btnEl3")

        console.log("Clicked!")
        questionBlock.removeChild(questionBtn);
        questionBlock.removeChild(btn1);
        questionBlock.removeChild(btn2);
        questionBlock.removeChild(btn3);
        questionBlock.removeChild(btn4);
        quiz()
    }
}





// On clicking start, the question section appears and the first question and answer choices load.
// Also the tmer begins to count down.
function startQuiz() {

    // countDown()
}

// function hideStartBtn() {
//     startBtn.classList.add("hidden")

// }
// Attach event listeners to buttons
// document.getElementById("btn1El").addEventListener("click",btn1El);


// Question handling


// Timer countdown
var timerEl = document.getElementById("timerEl");
var timer = setInterval(countDown, 1000);

function countDown(event) {
    timeLeft--;
    if (timeLeft <= 0) {
        clearInterval(timer);
        console.log("here!")
    }
    timerEl.innerHTML = timeLeft;
}