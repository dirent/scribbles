// A simple Flappy Bird game

var score;
var bird;
var pipes;
// difficulty
var difficulty = 4;

function createBird() {
    var birdGap, birdSize;

    birdGap = width / 9 + 15 * difficulty;
    birdSize = height / 15 + difficulty;
    return new Bird(birdGap, birdSize);
}

function createPipe() {
    var birdSize, pipeSpeed, gapHeight, pipeWidth;

    birdSize = height / 15 + difficulty;
    pipeSpeed = difficulty;
    gapHeight = birdSize * 6;
    pipeWidth = width / 5 + difficulty;
    return new Pipe(pipeSpeed, gapHeight, pipeWidth);
}

function setup() {
    createCanvas(800, 600);
    noStroke();
    score = new Score("PRESS 1-9 TO START");
}

function draw() {
    var i;
    background(0, 136, 255);
    if (score.isRunning()) {
        if (pipes[pipes.length - 1].isSteppedAway()) {
            pipes.push(createPipe());
        }

        for (i = pipes.length - 1; i >= 0; i--) {
            pipes[i].show();

            // TODO: check collision

            // TODO: check score

            if (pipes[i].isExpired()) {
                pipes.splice(i, 1);
            }
        }
        bird.show();
    }
    score.show();
}

function keyPressed() {
    if (score.isReady()) {
        // choose difficulty between 1 and 9
        if (keyCode >= 49 && keyCode <= 57) {
            difficulty = keyCode - 48;

            bird = createBird();
            pipes = [];
            pipes.push(createPipe());
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