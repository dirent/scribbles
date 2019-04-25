// A simple Flappy Bird game

var score;

function setup() {
    createCanvas(800, 600);
    noStroke();
    score = new Score("PRESS 1-9 TO START");
}

function draw() {
    background( 0, 136, 255 );
    score.show();
}
