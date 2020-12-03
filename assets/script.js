// var timer = setInterval(myTimer, 1000)

// var questionsec = document.querySelector("#questionSectionEl")


var currentQuestion = 0
var currentAnswer = 0
correct = 0
wrong = 0

// list of available questions
var arrayQuestions = [
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["booleans", "integers", "strings", "alerts"],
        answer1: "alerts",
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "terminal/bash", "console.log", "for loops"],
        answer2: "console.log",
    },
    {
        question: "The condition in an if/else statement is enclosed within _____.",
        choices: ["curly brackets", "quotes", "parentheses", "square brackets"],
        answer3: "parentheses"
    },
    {
        question: "Strings values must be enclosed within _____ when being assigned to variables.",
        choices: ["for loops", "commas", "curly brackets", "quotes"],
        answer4: "quotes"
    },
    {
        question: "Arrays in JavaScript can be used to store _____.",
        choices: ["strings", "booleans", "integers", "all of the above"],
        answer5: "all of the above"
    }
]


function loopQuestions() {
    var question = document.getElementById("questionEl");
    if (currentQuestion <= arrayQuestions.length - 1) {
        question.textContent = arrayQuestions[currentQuestion].question;
        console.log(question.textContent)
        console.log(arrayQuestions.length)
        console.log(currentQuestion)
        currentQuestion++
    }
}

function loopAnswers() {

    for (i = 0; i <= 3; i++) {
        for (j = 1; j <= 4; j++) {
            var choices = document.getElementById("btn" + j + "El")
        }
        choices.textContent = arrayQuestions[currentQuestion].choices[i];
    }


}

// On clicking start, the question section appears and the first question and answer choices load.
// Also the tmer begins to count down.
function startQuiz() {
    var startBtn = document.getElementById("questionSectionEl");
    startBtn.style.display = "block";
    loopQuestions()
    loopAnswers()
}
// Attach event listeners to buttons
// document.getElementById("btn1El").addEventListener("click",btn1El);

// Question handling


// 