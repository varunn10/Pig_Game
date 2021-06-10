'use strict';
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const rollDice = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const newGame = document.querySelector('.btn--new');
const diceImg = document.querySelector('.dice');

let score0 = 0;
let score1 = 0;
let currentScore = 0;
let diceNumber;
let activePlayer = 0;
let showCurrentScore0 = document.querySelector('#current--0');
let showCurrentScore1 = document.querySelector('#current--1');
let showScore0 = document.querySelector('#score--0');
let showScore1 = document.querySelector('#score--1');

showScore0.textContent = 0;
showScore1.textContent = 0;

const switchPlayer = function () {
  if (player0.classList.contains('player--active')) {
    player0.classList.remove('player--active');
    player1.classList.add('player--active');
    activePlayer = 1;
    showCurrentScore0.textContent = 0;
  } else {
    player1.classList.remove('player--active');
    player0.classList.add('player--active');
    activePlayer = 0;
    showCurrentScore1.textContent = 0;
  }
};
rollDice.addEventListener('click', function () {
  if (!document.querySelector('.player').classList.contains('player--winner')) {
    diceNumber = Math.trunc(Math.random() * 6) + 1;
    diceImg.src = 'dice-' + diceNumber + '.png';
    if (diceNumber == 1) {
      currentScore = 0;
      switchPlayer();
    } else {
      currentScore += diceNumber;
      if (activePlayer === 0) {
        showCurrentScore0.textContent = currentScore;
      } else {
        showCurrentScore1.textContent = currentScore;
      }
    }
  }
});

hold.addEventListener('click', function () {
  if (!document.querySelector('.player').classList.contains('player--winner')) {
    if (activePlayer === 0) {
      score0 += Number(showCurrentScore0.textContent);
      showScore0.textContent = score0;
    } else {
      score1 += Number(showCurrentScore1.textContent);
      showScore1.textContent = score1;
    }
    currentScore = 0;
    switchPlayer();

    if (score0 >= 30) {
      player1.classList.add('player--winner');
    } else if (score1 >= 30) {
      player0.classList.add('player--winner');
    }
  }
});

newGame.addEventListener('click', function () {
  showScore0.textContent = 0;
  showScore1.textContent = 0;
  showCurrentScore0.textContent = 0;
  showCurrentScore1.textContent = 0;
  score0 = 0;
  score1 = 0;
  currentScore = 0;
  if (player1.classList.contains('player--active')) {
    player1.classList.remove('player--active');
    player0.classList.add('player--active');
  }
  activePlayer = 0;

  if (player0.classList.contains('player--winner')) {
    player0.classList.remove('player--winner');
  } else if (player1.classList.contains('player--winner')) {
    player1.classList.remove('player--winner');
  }
});
