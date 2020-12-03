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
        answer1: "alerts"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answer2: "console.log"
    },
    {
        question: "The condition in an if/else statement is enclosed within _____.",
        answer3: "parentheses"
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        answer4: "quotes"
    },
    {
        question: "Arrays in JavaScript can be used to store _____.",
        answer5: "all of the above"
    }
]

var allAnswers = ["booleans", "integers", "strings", "JavaScript", "terminal/bash", "all of the above", "alerts", "for loops", "console.log", "commas", "curly brackets", "quotes", "parentheses", "square brackets", ""]



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
    var answer1 = document.getElementById("btn1El");
    answer1.textContent = allAnswers[0]
    var answer2 = document.getElementById("btn2El");
    answer2.textContent = allAnswers[1]


}


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