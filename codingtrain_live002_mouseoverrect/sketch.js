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
    // if the mouse pointer is over the rectangle, change the fill
    if (mouseX > width / 2 - 50 && mouseX < width / 2 + 50 &&
        mouseY > height / 2 - 50 && mouseY < height / 2 + 50) {

        fill(188, 0, 225);
    }

    rectMode(CENTER);
    rect(300, 200, 100, 100);
}