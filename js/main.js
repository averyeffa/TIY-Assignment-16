var timerCountdown = document.querySelector('.numerical-counter')
var timedTask = document.querySelector('.input-task')
var userText = document.querySelector('.input-text')
var counterValMin = 25
var counterValSec = 59

var clickedButton = document.querySelector('.footer-container button').addEventListener('click', function(){

  timedTask.textContent = userText.value;


})
