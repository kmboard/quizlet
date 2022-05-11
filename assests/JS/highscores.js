var initialsEl = document.getElementById('initialslist');
function getScores(){
    var savedScores = JSON.parse(localStorage.getItem('scores')) || [] ; 
    savedScores.forEach(player => {
    var playerEl = document.createElement('li');
    playerEl.textContent = `${player.initials} -- ${player.score}`
    initialsEl.append(playerEl);
    });
}
getScores()
