// Example code from
// Coding Train "Live Stream #3: p5.js Conditionals and Loops - Part 2"
// https://youtu.be/6G02PLQ8L7k

// flag for switching the background color
var on = false;

function isMouseOverRect() {
    return mouseX > width / 2 - 50 && mouseX < width / 2 + 50 &&
        mouseY > height / 2 - 50 && mouseY < height / 2 + 50;
}

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);
    stroke(255);
    strokeWeight(4);
    noFill();
    // if the mouse pointer is over the rectangle, change the fill
    if (isMouseOverRect()) {
        fill(255, 0, 200);
    }

    if (on) {
        background(0, 255, 0);
    }

    rectMode(CENTER);
    rect(300, 200, 100, 100);
}

function mousePressed() {
    if (isMouseOverRect()) {
        on = !on;
    }
}