// Example code from
// Coding Train "Live Stream #2: p5.js Conditionals and Loops"
// https://youtu.be/uEVJRE_6v0A

var x = 0;
var d = 3;
var w = 100;

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);
    stroke(255);
    strokeWeight(4);
    noFill();

    // draw ball
    ellipse(x, 200, w);

    // move ball
    x = x + d;

    if (x < 0 || x > width) {
        d = -1 * d;
    }
}