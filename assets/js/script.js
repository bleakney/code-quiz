// global variable declarations 
var highscoresEl = document.getElementById("highscoresBtn");
var highScores = [];
var timerEl = document.getElementById("timer");
var scoreEl = document.getElementById("currentScore");
var startBtnEl = document.getElementById("startBtn");
var quizFormEl = document.getElementById("quizForm");
var quizQuestion = document.getElementById("quizQuestion")
var quizAnswerA = document.getElementById("quizAnswerA");
var quizAnswerB = document.getElementById("quizAnswerB");
var quizAnswerC = document.getElementById("quizAnswerC");
var quizAnswerD = document.getElementById("quizAnswerD");
var quizAnswers = document.getElementsByClassName("quizAnswers");
var submitScoreBtnEl = document.getElementById("submitScoreBtn");
var tryAgainBtnEl = document.getElementById("tryAgainBtn");
var submitScoreFormEl = document.getElementById("submitScoreForm")
var highScoresEl = document.getElementById("highScores")
var highScoresListEl = document.getElementById("highScoresList");
var playerInfo = {
    score: 0,
    incrementScore: function() {
        this.score += 10;
        scoreEl.textContent = "Score: " + this.score;
    }
}
var time = 80;
var index = 0;

// hide quiz form and high scores on page load
window.onload = function() {
    quizFormEl.style.display = "none";
    scoreEl.style.display = "none";
    timerEl.style.display = "none";
    highScoresEl.style.display = "none";
    submitScoreFormEl.style.display = "none";
    scoreEl.textContent = "Score: 0";
    
    
    startBtnEl.textContent = "Begin Quiz";

}

// quizContent ARRAY
var quizContent = [
    // first question
    {question: "Which of the following is NOT a falsy value?", 
    answers: { a: "\"\"", b: "null", c: "0", d: "bigInt"}, 
    correctAnswer: "d"},
    // second question
    {question: "Where should you insert the <script> tag in the HTML document?", answers: {a: "<head>", b: "<main>", c: "<body>", d: "<section>"}, correctAnswer: "c"}, 
    // third question
    {question: "Which type of variable takes precedence over the other if names are the same?", answers: {a: "global variable", b: "local variable", c: "none of the above", d: "whichever variable is declared first"}, correctAnswer: "b"}, 
    // fourth question
    {question: "Which of the following methods removes the last element of an array?", answers: {a: ".push()", b: ".pop()", c: ".shift()", d: ".unshift()"}, correctAnswer: "b"},
    // fifth question
    {question: "To create a new repository in git, what should you type into the terminal?", answers: {a: "git start", b: "git clone <ssh key from github>", c: "git remote add <ssh key from github>", d: "git init"}, correctAnswer: "d"}
];
console.log(quizContent);

function initializeQuestions() {
    if (index < quizContent.length && time > 0 && startBtnEl.style.display === "none") {
        quizQuestion.textContent = quizContent[index].question;
        quizAnswerA.textContent = quizContent[index].answers.a;
        quizAnswerB.textContent = quizContent[index].answers.b;
        quizAnswerC.textContent = quizContent[index].answers.c;
        quizAnswerD.textContent = quizContent[index].answers.d;
    } else {gameOver()}
};


// Start Quiz
 startBtnEl.addEventListener("click", function(){
        startBtnEl.style.display = "none";
        quizFormEl.style.display = "block"
        timerEl.style.display = "flex";
        scoreEl.style.display = "flex";
        timer();
        initializeQuestions();
    });
        // quiz timer function
function timer() {
    var timeInterval = setInterval(function() {
        timerEl.textContent = time;
        if (time >= 1) {
            time--;
        } else {
            clearInterval(timeInterval);
        }

    }, 1000);

    };

    // EVENT LISTENERS FOR QUIZ ANSWERS
    quizAnswerA.addEventListener("click", function(){
        if (quizContent[index].correctAnswer ==="a"){
           playerInfo.incrementScore();
    } else {
        time = time - 10;
    }
    index++;
    initializeQuestions();
});
    quizAnswerB.addEventListener("click", function(){
        if (quizContent[index].correctAnswer ==="b"){
            playerInfo.incrementScore();
    } else {
       time = time - 10;
    }
    index++;
    initializeQuestions();
});
    quizAnswerC.addEventListener("click", function(){
        if (quizContent[index].correctAnswer ==="c"){
            playerInfo.incrementScore();
    } else {
        time = time - 10;
    }
    index++;
    initializeQuestions();
    
})
    quizAnswerD.addEventListener("click", function(){
        if (quizContent[index].correctAnswer ==="d"){
          playerInfo.incrementScore();
    } else {
        time = time - 10
    }
    index++;
    initializeQuestions();
});


    


function gameOver() { 
    // stop timer
    var finalTime = time;
    clearInterval(timer);
    // hide quiz content and display user's final score
    quizFormEl.style.display = "none";
    scoreEl.style.display = "none";
    timerEl.style.display = "none";
    submitScoreFormEl.style.display = "flex";
    var finalScore = playerInfo.score + finalTime;
    var gameOverTextEl = document.getElementById("gameOverText");
    if (time > 0 && index >= quizContent.length) {
        gameOverTextEl.textContent = "You finished the quiz with a final score of " + finalScore + "!" + " Please enter a username to submit your score:"
    } else {
        gameOverTextEl.textContent = "Time's up! Your final score is " + finalScore + document.createElement("br") + "To submit your score anyways, enter a username:"
    }
    submitScoreBtnEl.addEventListener("click", function() {
        var usernameInput = document.querySelector("input[name='username']").value;
        if (!usernameInput) {
            window.alert("Please enter a valid username!")
            return false;
        }
        var highScoresDataObj = {name: usernameInput, score: finalScore};
        highScores.push(highScoresDataObj);
        localStorage.setItem("highScores", JSON.stringify(highScores));
        var savedScores = [localStorage.getItem("highScores")];
    savedScores = JSON.parse(savedScores);
    for (i = 0; i < savedScores.length; i++) {
        var userHighScoreEl = document.createElement("li");
        userHighScoreEl.className = "list-group-item";
        highScoresListEl.appendChild(userHighScoreEl);
        userHighScoreEl.textContent = savedScores[i].name + " - " + savedScores[i].score;
        displayHighscores();

    }


});
}

// high scores display screen
function displayHighscores(){
    submitScoreFormEl.style.display = "none";
    highScoresEl.style.display = "flex";
}
