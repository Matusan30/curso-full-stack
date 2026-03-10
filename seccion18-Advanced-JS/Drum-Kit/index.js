
// Generar una lista con todos los botones
var lista = document.querySelectorAll("button.drum");

// Crear un objeto por sonido
var tom1 = new Audio("./sounds/tom-1.mp3")
var tom2 = new Audio("./sounds/tom-2.mp3")
var tom3 = new Audio("./sounds/tom-3.mp3")
var tom4 = new Audio("./sounds/tom-4.mp3")
var snare = new Audio("./sounds/snare.mp3")
var crash = new Audio("./sounds/crash.mp3")
var kickBass = new Audio("./sounds/kick-bass.mp3")

// Detecta si se toca un botón
for (i=0; i < lista.length; i++) {
    lista[i].addEventListener("click", function () {
        
        // Rescatar el texto de cada botón
        var buttonInnerHTML = this.innerHTML;
        
        // Según el texto dentro del botón, reproducir el sonido
        playSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
});
}

// Al presionar una tecla en el teclado
document.addEventListener("keydown", function(event) {
    playSound(event.key);
    buttonAnimation(event.key);
});

// Según la letra que se le pase, reproduce un sonido
function playSound(key) {
        switch (key) {
        
        case "w":
            tom1.play();
        break;

        case "a":
            tom2.play();
        break;

        case "s":
            tom3.play();
        break;

        case "d":
            tom4.play();
        break;

        case "j":
            snare.play();
        break;

        case "k":
            crash.play();
        break;

        case "l":
            kickBass.play();
        break;

        default: console.log(buttonInnerHTML)
    }
}

function buttonAnimation(key) {
    // Le agrega la clase "pressed" (que tiene un CSS creado)
    var activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");

    // Espera 0.1s y le saca la clase
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}