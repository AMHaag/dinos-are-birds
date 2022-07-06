// const { get } = require('../../controllers/home-routes');

const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');
let score = 0;

function jump() {
  if (dino.classList != 'jump') {
    dino.classList.add('jump');

    setTimeout(function () {
      dino.classList.remove('jump');
    }, 400);
  }
}

let isAlive = setInterval(function () {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue('left')
  );

  // detect collision
  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop > 120) {
    gameOver(score);
    // TODO: post score to database
    // TODO: bring the user to game over screen
  } else if (cactusLeft <= 0) {
    score += 10;
  }
  if (score >= 400) {
    cactus.style.animation = 'block 1.25s infinite linear';
  }
  if (score >= 600) {
    cactus.style.animation = 'block 1.125s infinite linear';
  }
}, 10);

function gameOver(currentscore) {
  let newScore = {
    score: currentscore,
    user_id: 1,
  };
  const writeScore = fetch('../api/scores/', {
    method: 'post',
    body: `{"score":${currentscore},"user_id":1}`,
    headers: { 'Content-Type': 'application/json' },
  });

  // this is just for the demo
  let thirdScore = document.getElementById('score3');
  thirdScore.innerText = `amhaag   ${currentscore}`;

  cactus.style.animation = 'none';
  dino.style.backgroundImage = 'url(img/Cassowary.png)';
  setTimeout(() => {
    let playAgain = confirm(`Game over! Score ${currentscore} \n Play again?`);
    if (playAgain) {
      newGame();
    }
  }, 150);
}
//this function sets all cacti and dino variables back to their defaults
function newGame() {
  cactus.style.animation = 'block 1.5s infinite linear';
  dino.classList.remove('jump');
  dino.style.backgroundImage = `url('img/Cassowary.gif')`;
  score = 0;
}
document.addEventListener('keydown', function (event) {
  jump();
});
