// var timer = setInterval(myTimer, 1000)

// var questionsec = document.querySelector("#questionSection")

var score = 0

// list of available questions
var arrayQuestions = [
    "Commonly used data types DO NOT include:",
     "A very useful tool used during development and debugging for printing content to the debugger is:",
     "The condition in an if/else statement is enclosed within _____.",
     "String values must be enclosed within _____ when being assigned to variables.",
     "Arrays in JavaScript can be used to store _____."
]



// function.promt() {
//     // Go through a collection of questions
//     var question = document.getElementById("question");
//     var answer1 = document.getElementById("answer1");
//     var answer2 = document.getElementById("answer2");
//     var answer3 = document.getElementById("answer3");

//     question.innerHTML = 


// }

function loopQuestions() {
    for (i = 0; i <= arrayQuestions.length; i++) {
        var question = document.getElementById("question");
        question.innerHTML = arrayQuestions[i].question;
    }


}


function startQuiz() {
    var startBtn = document.getElementById("questionSection");
    if (startBtn.style.display == "none") {
        startBtn.style.display = "block";
    }
    else {
        startBtn.style.display = "block";
    }
}
