// Example code from
// Coding Train "7.4: Reusability with Functions - Processing Tutorial"
// https://youtu.be/b9AYvekwKIg

let x,y;

function setup() {
    createCanvas(600, 480);
    x = random(width);
    y = random(height);
}

function draw() {
    background(0);
    star(x, y);
}

function star(x, y) {
    let r = 50;
    fill(128);
    stroke(255);
    beginShape();
    // upper half
    vertex(x + r, y);
    vertex(x + 2 * r / 5, y - r / 5);
    vertex(x + r / 2, y - 4 * r / 5)
    vertex(x, y - 2 * r / 5);
    vertex(x - r / 2, y - 4 * r / 5);
    vertex(x - 2 * r / 5, y - r / 5);
    vertex(x - r, y);
    // lower half
    vertex(x - 2 * r / 5, y + r / 5);
    vertex(x - r / 2, y + 4 * r / 5);
    vertex(x, y + 2 * r / 5);
    vertex(x + r / 2, y + 4 * r / 5);
    vertex(x + 2 * r / 5, y + r / 5);
    endShape(CLOSE);
}