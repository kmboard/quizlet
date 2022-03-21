var questions = document.querySelector (".questions");
var answers = Array.from(document.querySelectorAll (".answers"));
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector (".start-button");
var nextButton = document.querySelector (".next-button");
var passTest = document.querySelector (".pass-test");
var failedTest = document.querySelector (".failed-test");
var highScores = document.querySelector ("high-scores");


var currentQuestion = {};
var acceptingAnswers = true;
var score = 0;
var availableQuestions = [];
var questionCounter = 0;
var startQuiz = {};
var getNewQuestion = {};

var questions = [
    {
    question: "Where is the correct place to place a javascript tag?",
    answers: {
        a: 'body',
        b: 'header',
        c: 'dont need one',
        d: 'both header and body'
    },
        correctAnswer: 'D'
    },
        {
            question: "Is Java Script Case Sensative?",
            Answer: {
                a: 'yes',
                b: 'no',
            },
            correctAnswer: 'Yes'
        },
        {
        question: 'Which is the operater to assign a variable?',
        Answer: {
            a:'*',
            b:'+',
            c:'=',
            d: '/',
        },
            correctAnswer: 'C',
    },
    {
        question: "What company implemented JavaScript language?",
        Answer: {
            a: 'Netscape Communitcations Corp',
            b: 'Microsoft',
            c: 'Apple',
            d: 'Amazon',
        },
        correctAnswer: 'A',
    },

        {
            question: 'What does "this" mean in javascript',
            Answer: {
                a: 'the current object',
                b: 'the previous object',
                c: 'The variable that contains a value',
                d: 'None of the above',
            },
                correctAnswer: 'A',
            },
              
]

const MAX_QUESTIONS = 5

startButton.addEventListener("click",startQuiz);

function startQuiz () {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions];
    getNewQuestion();
    console.log(availableQuestions);
}

function getNewQuestion () {
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex]
    question.innerText = currentQuestion.question;
}

function forEach(choice) {
    const number = choice.dataset['number']
    choice.innerText = currentQuestion['choice' + number]
}

availableQuestions.splice(questionIndex,1)

acceptingAnswers = true

var timerCount = 10;

function startTimer() {
    var timerInterval = setInterval(function() {
        if (timeCount > 1) {
        timerElement.textContent = timerCount + "time left";
        timerCount--;
    } else if (isRight && timerCount > 0) {
                clearInterval(timer);
                passTest();
            }
    else if (timerCount ===0) {
            clearInterval(timerInterval);
            sendMessage();
     }

    }, 1000);
}


viewHighScoresEl.addEventListener ("click",function() {
    var quizUsers ="";
    var highScores = "";
    localStorage.setItem("studentGrade", JSON.stringify(studentGrade));

    for (var i=0; i < localStorage.length; i++) 
        var checkUserValue = [];
    
    window.alert(highScores);
})


submitSocreEl.addEventListener("click",function() {
    var quizLocalStorage = "quiz";
    var quizUsuerDetails ="";
    var value = [];
})
startQuiz()