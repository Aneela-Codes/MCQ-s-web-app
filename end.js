
let playerPoints=sessionStorage.getItem('points');
let playerName=sessionStorage.getItem('Player');
let gameTime = sessionStorage.getItem('time')
document.getElementById('playerName').innerHTML = playerName;
document.getElementById('playerPoints').innerHTML = playerPoints;
document.getElementById('playerTime').innerHTML = gameTime;