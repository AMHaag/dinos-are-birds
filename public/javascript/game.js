let user_id = document.getElementById('user-id').innerText;

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
  const writeScore = fetch('../api/scores/', {
    method: 'post',
    body: JSON.stringify({ score, user_id }),
    headers: { 'Content-Type': 'application/json' },
  });
  cactus.style.animation = 'none';
  dino.style.backgroundImage = 'url(images/Cassowary.png)';
  setTimeout(() => {
    document.location.replace('/gameover');
  }, 150);
}
//this function sets all cacti and dino variables back to their defaults
function newGame() {
  cactus.style.animation = 'block 1.5s infinite linear';
  dino.classList.remove('jump');
  dino.style.backgroundImage = `url('images/Cassowary.gif')`;
  score = 0;
}
document.addEventListener('keydown', function (event) {
  jump();
});
