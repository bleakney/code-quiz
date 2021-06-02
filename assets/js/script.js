// global variable declarations 
var highscoresEl = document.getElementById("highscoresBtn");
var timerEl = document.getElementById("timer");
var currentScoreEl = document.getElementById("currentScore")
var startBtnEl = document.getElementById("startBtn");
var quizFormEl = document.getElementById("quizForm");

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
}
    })

    function quiz() {

    }
