'use strict';

// document.querySelector('.guess').value = 10;

// let num = Math.trunc(Math.random() * 20 + 1);
// console.log(num);
let num = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

//function to implement DRY principle in order not to repeat my code
const displayMessage = function (message) {
  document.querySelector('.message').textContent = `${message}`;
};

//CHECK event listener
document.querySelector('.check').addEventListener('click', function () {
  let x = Number(document.querySelector('.guess').value);
  console.log(num, x);
  // if score is above zero game runs
  if (score != 0) {
    //if no number entered
    if (!x) {
      // document.querySelector('.message').textContent = '⛔ Enter A Number';
      displayMessage('⛔ Enter A Number');

      // number too low
    } else if (x < num) {
      displayMessage('Guess Too Low');

      //if number is equal to secret number (IMPORTANT)
    } else if (x === num) {
      displayMessage('🎉 Correct');
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = `${num}`;
      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = `${highScore}`;
      }

      //if number is greater than secret number
    } else if (x > num) {
      displayMessage('Guess Too High');
    }

    //changing highscores
    if (x != num) {
      document.querySelector('.score').textContent = `${--score}`;
    }
  } else {
    displayMessage('You Lost The Game');
  }
});

//AGAIN event listener
document.querySelector('.again').addEventListener('click', function () {
  num = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = `?`;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = `${20}`;
  document.querySelector('.guess').value = '';
});
