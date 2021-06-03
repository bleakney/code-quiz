// global variable declarations 
var highscoresEl = document.getElementById("highscoresBtn");
var timerEl = document.getElementById("timer");
var currentScoreEl = document.getElementById("currentScore")
var startBtnEl = document.getElementById("startBtn");
var quizFormEl = document.getElementById("quizForm");
var quizQuestion = document.getElementById("quizQuestion")
var quizAnswerA = document.getElementById("quizAnswerA");
var quizAnswerB = document.getElementById("quizAnswerB");
var quizAnswerC = document.getElementById("quizAnswerC");
var quizAnswerD = document.getElementById("quizAnswerD");


// hide quiz form on page load
window.onload = function() {
    quizFormEl.style.display = "none";
}

var questions = [
    {q: "Which of the following is NOT a falsy value?", a: "\"\"", b: "null", c: "0", d: "bigInt"}
]
console.log(questions[0]);


// End Quiz
var timesUp = function() {
    window.alert("game over biiiiitch!")
}

// Start Quiz
 startBtnEl.addEventListener("click", function(){
        startBtnEl.style.display = "none";
        quizFormEl.style.display = "block"
        timer();
        // quiz timer function
function timer() {
    var time = 80;
    var timeInterval = setInterval(function() {
        timerEl.textContent = time;
        if (time >= 1) {
            time--;
        } else {
            clearInterval(timeInterval);
            timesUp();
        }

    }, 1000)
    quiz();
}
    })

    function quiz() {
        for (var i = 0; i < questions.length; i++) {
            quizQuestion.textContent = questions[i].q;
            for (var j = 0; j < questions.length; j++) {
                quizAnswerA.textContent = questions[j].a;
                quizAnswerB.textContent = questions[j].b;
                quizAnswerC.textContent = questions[j].c;
                quizAnswerD.textContent = questions[j].d;
            }

        }

    }
