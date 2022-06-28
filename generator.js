function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function createscores() {
  for (i = 0; i < 100; i++) {
    let user = getRandomInt(0, 6);
    let score = getRandomInt(1000, 1000000);
    console.log(`(${score},${user}),`);
  }
}
createscores();
