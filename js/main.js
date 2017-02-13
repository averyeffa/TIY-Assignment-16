var timerCountdown = document.querySelector('.numerical-counter')
var timedTask = document.querySelector('.input-task')
var userText = document.querySelector('.column-container input')
//Victor helped me here :) --> YOU DIDNT GIVE THE INPUT A CLASS AND WAS TRYING TO TARGET THE TYPE NOT THE CLASS!!!!!
var button = document.querySelector('.column-container button')
var footer = document.querySelector('.footer-container')


var clickedButton = document.querySelector('.footer-container button').addEventListener('click', function(){

  // Input text moving to the tomato
  // console.log(userText.value)
  timedTask.textContent = userText.value;
  userText.value = '';

  // Hiding the footer
  userText.className = 'hidden';
  button.className = 'hidden';
  footer.className = 'new-footer';

  // Timer Countdown



  

})
