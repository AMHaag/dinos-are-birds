const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
let score = 0;

function jump() {
    if (dino.classList != "jump") {

        dino.classList.add("jump");

        setTimeout(function () {
            dino.classList.remove("jump");
        }, 400);
    }
    
}

let isAlive = setInterval(function () {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    // detect collision
    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop > 120) {
        alert("Game Over! Score:" + score);
        // TODO: end game somehow 
    }
    else if (cactusLeft <= 0) {
        score += 10;
    }
}, 10);

document.addEventListener("keydown", function (event) {
    jump();

});