// global variable declarations 
var highscoresEl = document.getElementById("highscoresBtn");
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
var score =  + currentScore;
scoreEl.textContent = "Score: " + score;
var time = 80;
var index = 0;

// hide quiz form on page load
window.onload = function() {
    quizFormEl.style.display = "none";
    scoreEl.style.display = "none";
    timerEl.style.display = "none";
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
    } else {displayScore()}
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
 // track index   
// initialize questions
    // set up onclick() handlers
    // set textcontent to whatever the index is
// onclick() handler
    // check if answer is correct, increment score or decrement time
// increment index
// is there another question for that index --> if yes, set textcontent for question to whatever index is, if not display final score screen

function incrementScore() {
    score = score + 10;
    scoreEl.textContent = "Score: " + score;
    

}


    // EVENT LISTENERS FOR QUIZ ANSWERS
    quizAnswerA.addEventListener("click", function(){
        if (quizContent[index].correctAnswer ==="a"){
           incrementScore();
    } else {
        time = time - 10;
    }
    index++;
    initializeQuestions();
});
    quizAnswerB.addEventListener("click", function(){
        if (quizContent[index].correctAnswer ==="b"){
            incrementScore();
    } else {
       time = time - 10;
    }
    index++;
    initializeQuestions();
});
    quizAnswerC.addEventListener("click", function(){
        if (quizContent[index].correctAnswer ==="c"){
            incrementScore();
    } else {
        time = time - 10;
    }
    index++;
    initializeQuestions();
    
})
    quizAnswerD.addEventListener("click", function(){
        if (quizContent[index].correctAnswer ==="d"){
          incrementScore();
    } else {
        time = time - 10
    }
    index++;
    initializeQuestions();
});

    


function displayScore() {
    window.alert("You did it!")
};


// 


// quizAnswerA.addEventListener("click", function(){
//     if (quizContent[i].correctAnswer === "a") {
//         score + 10;
//     } else {
//         time - 10;
//     }
//     i++;
//     quizQuestions();
// });
// quizAnswerB.addEventListener("click", function(){
//     if (quizContent[i].correctAnswer === "b") {
//         score + 10;
//     } else {
//         time - 10;
//     }

// });
// quizAnswerC.addEventListener("click", function(){
// if (quizContent[i].correctAnswer === "c") {
//     score + 10;
// } else {
//     time - 10;
// }
// });
// quizAnswerD.addEventListener("click", function(){
// if (quizContent[i].correctAnswer === "d") {
//     score + 10;
// } else {
//     time - 10;
// }
// }