var startBtn = document.getElementById("startEl")
// var addBtn = document.createElement("button")
var currentQuestion = 0
var currentChoices = 0
var correct = 0
var wrong = 0
var timer

// var nameEl = document.querySelector("#name");
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

// This section was my first attemp at loading my questions and answer choices.
// function loopQuestions() {
//     var question = document.getElementById("questionEl");
//     if (currentQuestion <= arrayQuestions.length - 1) {
//         question.textContent = arrayQuestions[currentQuestion].question;
//         currentQuestion++
//         loopAnswers()
//     }
// }

// function loopAnswers() {
//     if(currentChoices <= arrayQuestions.length -1) {
//         var btn1 = document.getElementById("btn1El");
//         btn1.textContent = arrayQuestions[currentChoices].choices[0]
//         var btn2 = document.getElementById("btn2El");
//         btn2.textContent = arrayQuestions[currentChoices].choices[1]
//         var btn3 = document.getElementById("btn3El");
//         btn3.textContent = arrayQuestions[currentChoices].choices[2]
//         var btn4 = document.getElementById("btn4El");
//         btn4.textContent = arrayQuestions[currentChoices].choices[3]
//         console.log(btn1.textContent)
//         currentChoices++
//     } else {

//     }
// }




function quiz(event) {
    event.preventDefault();
    // startBtn.style.display = "none";

    var choices = arrayQuestions[currentQuestion].choices
    var questions = arrayQuestions[currentQuestion].question
    var answers = arrayQuestions[currentQuestion].answer

    if (currentQuestion <= arrayQuestions.length - 1) {
        var addQuestion = document.createElement("p")
        addQuestion.textContent = arrayQuestions[currentQuestion].question;
        console.log(addQuestion.textContent);
        document.body.appendChild(addQuestion);
        currentQuestion++

        for (i = 0; i <= choices.length - 1; i++) {
            console.log(choices)
            addBtn = document.createElement("button")
            addBtn
            console.log(i);
            addBtn.textContent = choices[i];
            // addBtn.addEventListener("click", "w")
            addBtn.style.color = "red"
            document.body.appendChild(addBtn);
            currentChoices++
        }
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
    function countDown() {
        var timeLeft = 45
            timer = setInterval(function () {
                timeLeft--;
                if (timeLeft <= 0) {
                    clearInterval(timer);
                    console.log("here!")
                }
                timerEl.innerHTML = timeLeft;
            }, 1000);
        }