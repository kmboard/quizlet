var questionEl = document.querySelector ("#questions");
var answers = Array.from(document.querySelectorAll ("#answers"));
var timerEl = document.querySelector(".timer-count");
var startBtn = document.querySelector ("#start-btn");
var failedTest = document.querySelector (".failed-test");
var highScoresEl = document.querySelector ("high-scores");
var submitSocreEl = document.querySelector ("#submit-scores")
var gameEl = document.getElementById('game')
var saveBtn = document.getElementById('save-btn')
var initialsInput = document.getElementById('initials-input')
var correctAnswer = document.getElementById('correctAnswer')


var timerInterval;
var currentQuestion;
var acceptingAnswers = true;
var score = 0;
var availableQuestions = [];
var questionCounter = 0;

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

const MAX_QUESTIONS = questions.length


function startQuiz () {
    questionCounter = 0;
    startTimer();
    getNewQuestion();
    console.log(availableQuestions);
}

function checkAnswer( ){
    if (questions[questionCounter].correctAnswer != this.textContent) {
        timerCount -= 10;
    };
    questionCounter++;
    if (questionCounter != MAX_QUESTIONS) {
        getNewQuestion();
    } else {
        endTest();
    }
    
    }


function getNewQuestion () {
    startBtn.classList.add('hidden');
    currentQuestion = questions[questionCounter]
    questionEl.textContent = ''
    console.log(currentQuestion)
    questionEl.textContent = currentQuestion.question
    let answers = currentQuestion.answers
    // let correctAnswer = currentQuestion.correctAnswer
    gameEl.innerHTML = ''
    answers.forEach (answer => {
        let answerEl = document.createElement('div')
        answerEl.setAttribute('class','choice-container justify-content')
        gameEl.appendChild(answerEl)
        let answerBtn = document.createElement('button');
        answerBtn.setAttribute('class','choice-text justify-content', 'id');
        answerBtn.textContent = answer;
        answerBtn.onclick = checkAnswer;
        answerEl.appendChild(answerBtn)

    })
};

var timerCount = 100;

function startTimer() {
     timerInterval = setInterval(function() {
        timerEl.textContent = timerCount + "time left";
        timerCount--;
     if (timerCount <= 0) { 
                endTest();
            }
   
    }, 1000);
}

function endTest () {
   gameEl.classList.add('hidden');
   questionEl.classList.add('hidden');
   submitSocreEl.classList.remove('hidden')
   clearInterval(timerInterval);
}

    
// function passTest () {
//     highScoresEl.addEventListener
//     var quizUsers ="";
//     var highScores = "";
//     localStorage.setItem("studentGrade", JSON.stringify(studentGrade));

//     for (var i=0; i < localStorage.length; i++) 
//         var checkUserValue = [];
    
//     window.alert(highScores);
// }
function saveScore(){
    var initials = initialsInput.value.trim();
    var score = timerCount;
    // get the value of the score
    // put scores into newplayer object
    var newPlayer = {initials , score}
    var savedScores = JSON.parse(localStorage.getItem('scores')) || [] ; 

    savedScores.push(newPlayer)
    console.log(savedScores)
    localStorage.setItem('scores', JSON.stringify(savedScores))
    // create an array for the newplayer to go into or use already stored score
    // push updated array to local storage as JSON
    initials.textContent = savedScores.appendChild("");
    
}
startBtn.addEventListener("click", startQuiz);
saveBtn.addEventListener('click', saveScore);
submitSocreEl.classList.add('hidden');