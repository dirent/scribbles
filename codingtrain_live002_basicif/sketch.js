// Example code from
// Coding Train "Live Stream #2: p5.js Conditionals and Loops"
// https://youtu.be/uEVJRE_6v0A

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);
    stroke(255);
    strokeWeight(4);
    noFill();
    // set the fill dependent on the x coordinate
    // of the mouse pointer
    if (mouseX > width / 2) {
        fill(188, 0, 225);
    }
    // draw a rectangle if the mouse is in the bottom half
    if (mouseY > height / 2) {
        rectMode(CENTER);
        rect(300, 200, 100, 100);
    }
    // draw an ellipse if the mouse is in the upper half
    if (mouseY <= height / 2) {
        ellipse(300, 200, 100, 100);
    }
}