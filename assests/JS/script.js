var questionEl = document.querySelector ("#questions");
var answers = Array.from(document.querySelectorAll (".answers"));
var timerEl = document.querySelector(".timer-count");
var startBtn = document.querySelector (".start-btn");
var nextBtn = document.querySelector (".next-btn");
var passTest = document.querySelector (".pass-test");
var failedTest = document.querySelector (".failed-test");
var highScoresEl = document.querySelector ("high-scores");
var submitSocreEl = document.querySelector (".submit-scores")
var gameEl = document.getElementById('game')

var currentQuestion;
var acceptingAnswers = true;
var score = 0;
var availableQuestions = [];
var questionCounter = 0;
// var startQuiz = {};
// var getNewQuestion = {};

var questions = [
    {
    question: "Which language is not a Javascript frame work?",
    answers: [
        'NodeJs',
        'Python',
        'Django',
        'JQuery'
    ],
        correctAnswer: 'Django'
    },
        {
            question: "What does HTML stand for?",
            answers: [
             'Hyper Text Preprocessor',
            'Hyper Text Markup Language',
             'Hype Test Multiple Language',
            'Hyper Tool Multi Language',
            ],
            correctAnswer: 'Hyper Text Markup Language'
        },
        {
        question: 'Which is the operater to assign a variable?',
        answers: [
            '*',
            '+',
            '=',
            '/',
         ],
            correctAnswer: '=',
    },
    {
        question: "What company implemented JavaScript language?",
        answers: [
             'Netscape Communitcations Corp',
             'Microsoft',
             'Apple',
             'Amazon',
    ],
        correctAnswer: 'A',
    },

        {
            question: 'What does "this" mean in javascript',
            answers: [
                 'the current object',
                 'the previous object',
                'The variable that contains a value',
                 'None of the above',
            ],
                correctAnswer: 'the current object',
            },
              
        ]

const MAX_QUESTIONS = 5


function startQuiz () {
    questionCounter = 0
    startTimer();
    getNewQuestion();
    console.log(availableQuestions);
}

function checkAnswer( ){
    questionCounter++;
    getNewQuestion()
}

function getNewQuestion () {
    currentQuestion = questions[questionCounter]
    questionEl.textContent = ''
    console.log(currentQuestion)
    questionEl.textContent = currentQuestion.question
    let answers = currentQuestion.answers
    gameEl.innerHTML = ''
    answers.forEach (answer => {
        let answerEl = document.createElement('div')
        answerEl.setAttribute('class','choice-container justify-content')
        gameEl.appendChild(answerEl)
        let answerBtn = document.createElement('button');
        answerBtn.setAttribute('class','choice-text justify-content');
        answerBtn.textContent = answer;
        answerBtn.onclick = checkAnswer;
        answerEl.appendChild(answerBtn)

    
    });


    // questions.innerText = currentQuestion.question;
}

// function forEach(choice) {
//     const number = choice.dataset['number']
//     choice.innerText = currentQuestion['choice' + number]
// }



var timerCount = 10;

function startTimer() {
    var timerInterval = setInterval(function() {
        if (timerCount > 1) {
        timerEl.textContent = timerCount + "time left";
        timerCount--;
    } else if (timerCount > 0) {
                clearInterval(timer);
                passTest();
            }
    else if (timerCount ===0) {
            clearInterval(timerInterval);
            sendMessage();
     }

    }, 1000);
}

startBtn.addEventListener("click",startQuiz);

// highScoresEl.addEventListener ("click",function() {
//     var quizUsers ="";
//     var highScores = "";
//     localStorage.setItem("studentGrade", JSON.stringify(studentGrade));

//     for (var i=0; i < localStorage.length; i++) 
//         var checkUserValue = [];
    
//     window.alert(highScores);
// });


// submitSocreEl.addEventListener("click",function() {
//     var quizLocalStorage = "quiz";
//     var quizUsuerDetails ="";
//     var value = [];
// });