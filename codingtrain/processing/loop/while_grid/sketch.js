// Example code from
// Coding Train "6.2: Two Loops / Grid Exercise - Processing Tutorial"
// https://youtu.be/esKLU3dJo70

// the width of the circles
var spacing = 50;

function setup() {
    createCanvas(600, 400);
}

function draw() {
    var x, y;

    background(0);
    stroke(255);
    strokeWeight(2);
    spacing = spacing + random(-2, 2);

    x = 0;
    while (spacing > 0 && x < width) {
        line(x, 0, x, height);
        x = x + spacing;
    }

    y = 0;
    while (spacing > 0 && y < height) {
        line(0, y, width, y);
        y = y + spacing;
    }
}