
// Generar dos números aleatorios entre 1-6
var randomNumer1 = Math.random() * 6;
randomNumer1 = Math.floor(randomNumer1) + 1;

var randomNumer2 = Math.random() * 6;
randomNumer2 = Math.floor(randomNumer2) + 1;

// Cambiar los dados según el número random
document.querySelector(".img1").setAttribute("src", "./images/dice" + randomNumer1 + ".png");
document.querySelector(".img2").setAttribute("src", "./images/dice" + randomNumer2 + ".png");

// Cambiar el título para que diga quién ganó
if (randomNumer1 === randomNumer2) {
    document.querySelector("h1").textContent = "Draw!";
} else if (randomNumer1 > randomNumer2) {
    document.querySelector("h1").textContent = "Player 1 Wins!";
} else {
    document.querySelector("h1").textContent = "Player 2 Wins!";
}