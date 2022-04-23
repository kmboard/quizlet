var userInput = document.querySelector('#intials')
var scoreList = document.querySelector('scoreList')



saveBtn.addEventListener('click', savedScores)

function savedScores() {
    var createList = document.createElement('list')
    createList.textContent = 'intials' + 'score'
    scoreList.appendChild(createList)

}