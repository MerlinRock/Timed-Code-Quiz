// var timer = setInterval(myTimer, 1000)

// var questionsec = document.querySelector("#questionSectionEl")


var currentQuestion = 0
var currentChoices = 0
var correct = 0
var wrong = 0
var timer
var addBtn = document.createElement("button")

document.getElementById("startEl").addEventListener("click", addChoiceBtns);

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


function loopQuestions() {
    var question = document.getElementById("questionEl");
    if (currentQuestion <= arrayQuestions.length - 1) {
        question.textContent = arrayQuestions[currentQuestion].question;
        currentQuestion++
        loopAnswers()
    }
}

function loopAnswers() {
    if(currentChoices <= arrayQuestions.length -1) {
        var btn1 = document.getElementById("btn1El");
        btn1.textContent = arrayQuestions[currentChoices].choices[0]
        var btn2 = document.getElementById("btn2El");
        btn2.textContent = arrayQuestions[currentChoices].choices[1]
        var btn3 = document.getElementById("btn3El");
        btn3.textContent = arrayQuestions[currentChoices].choices[2]
        var btn4 = document.getElementById("btn4El");
        btn4.textContent = arrayQuestions[currentChoices].choices[3]
        console.log(btn1.textContent)
        currentChoices++
    } else {

    }
}
var timerEl = document.getElementById("timerEl");
function countDown() {
    var timeLeft = 45
    timer = setInterval(function() {
        if(timeLeft <= 0) {
            clearInterval(timer);
        }
        timeLeft--;
        timerEl.innerHTML = timeLeft;
        // console.log(timeLeft)
    } ,1000);
    
    
}
function addChoiceBtns(event)
var choices = arrayQuestions[currentQuestion].choices;
console.log(choices);
for(i = 0; i <= choices.length; i++) {
    console.log(choices.length);
    addBtn.textContent = choices[i];
}

// On clicking start, the question section appears and the first question and answer choices load.
// Also the tmer begins to count down.
// function startQuiz() {
//     var startBtn = document.getElementById("questionSectionEl");
//     startBtn.style.display = "block";
//     loopQuestions()
//     countDown()
// }
// Attach event listeners to buttons
// document.getElementById("btn1El").addEventListener("click",btn1El);

// Question handling
