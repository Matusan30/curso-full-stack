

// Declarar Variables
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;

// Crear objetos de audio
var blueSound = new Audio("./sounds/blue.mp3")
var greenSound = new Audio("./sounds/green.mp3")
var redSound = new Audio("./sounds/red.mp3")
var yellowSound = new Audio("./sounds/yellow.mp3")

function nextSequence() {
    $("h1").text("Level " + level);
    var rand = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[rand];
    gamePattern.push(randomChosenColour);

    var buttonRand = $("#" + randomChosenColour);
    buttonRand.fadeOut(200).fadeIn(200);
    playSound(randomChosenColour);

    level++;
    
}

function playSound(colour) {
    switch (colour) {

        case "blue":
            blueSound.play();
        break;

        case "green":
            greenSound.play();
        break;

        case "red":
            redSound.play();
        break;

        case "yellow":
            yellowSound.play();
        break;

        default: console.log(colour);
    }
}

function animatePress(element) {
    $(element).addClass("pressed");
    setTimeout(function() {
        $(element).removeClass("pressed");
    }, 100);
}

$(".btn").click(function() {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(this)
});

$(document).keypress(function() {
    nextSequence();
});