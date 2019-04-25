// A simple Flappy Bird game

var score;
var bird;
// difficulty
var difficulty = 4;

function setup() {
    createCanvas(800, 600);
    noStroke();
    score = new Score("PRESS 1-9 TO START");
}

function draw() {
    background(0, 136, 255);
    score.show();
    if( score.isRunning() ) {
        bird.show();
    }
}

function keyPressed() {
    if (score.isReady()) {
        // choose difficulty between 1 and 9
        if (keyCode >= 49 && keyCode <= 57) {
            difficulty = keyCode - 48;
            bird = new Bird(width / 9 + 15*difficulty, height/15 + difficulty);
            score.start();            
        }
    } else if (score.isRunning()) {
        // jump
        if (keyCode === 32 || keyCode === UP_ARROW) {
            bird.jump();
        }
        // finish
        if (keyCode === ESCAPE) {
            score.gameOver();
        }
    } else if (score.isGameOver()) {
        // restart
        if (keyCode === ESCAPE) {
            score.reset();
        }
    }
}