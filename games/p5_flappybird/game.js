// A simple Flappy Bird game

var score;
var bird;
var pipes;
var difficulty = 4;

function createBird() {
    var diffCount = difficulty + 4,
        birdGap, birdSize;

    birdGap = width / 9 + 15 * diffCount;
    birdSize = height / 15 + diffCount;
    return new Bird(birdGap, birdSize);
}

function createPipe() {
    var diffCount = difficulty + 4,
        birdSize, pipeSpeed, gapHeight, pipeWidth;

    birdSize = height / 15 + diffCount;
    pipeSpeed = diffCount + score.gameTime / 10;
    gapHeight = birdSize * 6 - 5 * diffCount;
    console.log("Ratio of Gap and Bird Size: " + gapHeight / birdSize);
    pipeWidth = width / 5 + diffCount;
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

            // check collision
            if (pipes[i].collides(bird)) {
                score.gameOver();
            }

            // check score
            if (pipes[i].hasPassed(bird)) {
                score.increase(difficulty);
            }

            // remove expired pipes
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