// global variable declarations 
var highscoresEl = document.getElementById("highscoresBtn");
var timerEl = document.getElementById("timer");
var scoreEl = document.getElementById("currentScore")
var startBtnEl = document.getElementById("startBtn");
var quizFormEl = document.getElementById("quizForm");
var quizQuestion = document.getElementById("quizQuestion")
var quizAnswerA = document.getElementById("quizAnswerA");
var quizAnswerB = document.getElementById("quizAnswerB");
var quizAnswerC = document.getElementById("quizAnswerC");
var quizAnswerD = document.getElementById("quizAnswerD");
var quizAnswers = document.getElementsByClassName("quizAnswers");
var score = 0;
var time = 80;

// hide quiz form on page load
window.onload = function() {
    quizFormEl.style.display = "none";
    scoreEl.style.display = "none";
    timerEl.style.display = "none";

}

// QUESTIONS ARRAY
var questions = [
    // first question
    {question: "Which of the following is NOT a falsy value?", 
    answers: { a: "\"\"", b: "null", c: "0", d: "bigInt"}, 
    correctAnswer: "a"},
    // second question
    {question: "Where should you insert the <script> tag in the HTML document?", answers: {a: "<head>", b: "<main>", c: "<body>", d: "<section>"}, correctAnswer: "c"}, 
    // third question
    {question: "Which type of variable takes precedence over the other if names are the same?", answers: {a: "global variable", b: "local variable", c: "none of the above", d: "whichever variable is declared first"}, correctAnswer: "b"}, 
    // fourth question
    {question: "Which of the following methods removes the last element of an array?", answers: {a: ".push()", b: ".pop()", c: ".shift()", d: ".unshift()"}, correctAnswer: "b"},
    // fifth question
    {question: "To create a new repository in git, what should you type into the terminal?", answers: {a: "git start", b: "git clone <ssh key from github>", c: "git remote add <ssh key from github>", d: "git init"}, correctAnswer: "d"}
];
console.log(questions)



// End Quiz
var timesUp = function() {
    window.alert("game over biiiiitch!")
}

// Start Quiz
 startBtnEl.addEventListener("click", function(){
        startBtnEl.style.display = "none";
        quizFormEl.style.display = "block"
        timerEl.style.display = "flex";
        scoreEl.style.display = "flex";
        scoreEl.textContent = "Score: " + score;
        timer();
        // quiz timer function
function timer() {
    var timeInterval = setInterval(function() {
        timerEl.textContent = time;
        if (time >= 1) {
            time--;
        } else {
            clearInterval(timeInterval);
            timesUp();
        }
    var decrementTime = function() {
        return time - 5;
    }

    }, 1000)
    quizQuestions();
}
    })

    function quizQuestions() {
        for (var i = 0; i < questions.length; i++) {
            quizQuestion.textContent = questions[i].question;
            quizAnswerA.textContent = questions[i].answers.a;
            quizAnswerB.textContent = questions[i].answers.b;
            quizAnswerC.textContent = questions[i].answers.c;
            quizAnswerD.textContent = questions[i].answers.d;
            quizAnswerA.addEventListener(function(){
                if (questions[i].correctAnswer = "a") {
                    score
                } else {
                    decrementTime();
                }
            })

           }
        }

           // when user presses start button, box with quiz questions and answers appears
           // for loop containing questions and answers needs to iterate once correct quiz answer is selected
           // correct answers must be identifiable 
           // 
           
           
            // if (quizQuestion.textContent = questions[0].q && )

            //     }
        
