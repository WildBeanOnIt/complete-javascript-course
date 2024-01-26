'use strict';

// console.log(document.querySelector(".message").textContent);

// document.querySelector(".message").textContent = " 🎉 Correct Number!";

// document.querySelector(".number").textContent = 12;
// document.querySelector(".score").textContent = 512;

// document.querySelector(".guess").value = 23
// console.log(document.querySelector(".guess").value);

let secretNumber = Math.trunc(Math.random() * 3) + 1;

let score = 20;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = ' ⛔️ No Number!';

    //Usr selects the right number
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = ' 🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    //Usr selects a higher Num than the guess
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = ' 📈 Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        ' 💥 You lost the game L.';
      document.querySelector('.score').textContent = 0;
    }

    //Usr selects a lower Num than the guess
  } else if (guess < secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.message').textContent = ' 📉 Too Low!';
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        ' 💥 You lost the game L.';
    document.querySelector('body').style.backgroundColor = '#C41E3A';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 3) + 1;

  document.querySelector('.message').textContent = "Start guessing...";
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = "?";
  document.querySelector('.guess').value = "";
  document.querySelector('body').style.backgroundColor = "#222";
});
