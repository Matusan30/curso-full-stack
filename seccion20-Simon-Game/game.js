

// Declarar Variables
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;

// Crear objetos de audio
var blueSound = new Audio("./sounds/blue.mp3");
var greenSound = new Audio("./sounds/green.mp3");
var redSound = new Audio("./sounds/red.mp3");
var yellowSound = new Audio("./sounds/yellow.mp3");
var wrong = new Audio("./sounds/wrong.mp3");

function nextSequence() {
    $("h1").text("Level " + level);
    var rand = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[rand];
    gamePattern.push(randomChosenColour);
    
    var buttonRand = $("#" + randomChosenColour);
    buttonRand.fadeOut(200).fadeIn(200);
    playSound(randomChosenColour);

    // for (i=0; i < gamePattern.length ; i++) {
    //     var buttonRand = $("#" + randomChosenColour);
    //     var buttonRand = $("#" + gamePattern[i]);
    //     buttonRand.fadeOut(200).fadeIn(200);
    //     playSound(gamePattern[i]);
    // }

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

function checkAnswer() {
    var indice = userClickedPattern.length - 1;

    if (userClickedPattern[indice] === gamePattern[indice]) {

        if (userClickedPattern.length === gamePattern.length) {
            console.log("Success");

            setTimeout(nextSequence, 1000);

            userClickedPattern = []
        }
        
    } else {
        playWrong();
    }
}

$(".btn").click(function() {
    var userChosenColour = $(this).attr("id");
    playSound(userChosenColour);
    animatePress(this);
    userClickedPattern.push(userChosenColour);
    checkAnswer();
});

if (!started) {
    $(document).keypress(function() {
        nextSequence();
    });
    started = true;
}


function playWrong() {
    wrong.play();
    $("body").addClass("game-over");
    setTimeout(function() {
        $("body").removeClass("game-over");
    }, 200)
    $("h1").text("Game Over, Press Any Key to Restart");
    startOver();
}

function startOver() {
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
    started = false;
}