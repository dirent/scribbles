// A simple Flappy Bird game

var score;
// difficulty
var pipeSpeed = 4;

function setup() {
    createCanvas(800, 600);
    noStroke();
    score = new Score("PRESS 1-9 TO START");
}

function draw() {
    background(0, 136, 255);
    score.show();
}

function keyPressed() {
    if (score.isReady()) {
        // choose difficulty between 1 and 9
        if (keyCode >= 49 && keyCode <= 57) {
            score.start();
            pipeSpeed = keyCode - 48;
        }
    } else if (score.isRunning()) {
        // jump
        if (keyCode === 32 || keyCode === UP_ARROW) {
            // jump
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