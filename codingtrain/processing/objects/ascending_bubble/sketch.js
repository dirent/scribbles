// Example code from
// Coding Train "8.3: Defining a Class Part II - Processing Tutorial"
// https://youtu.be/XwfOVFelLoo

var b;

function setup() {
    createCanvas(600, 400);
    b = new Bubble();
}

function draw() {
    background(0);
    b.draw();
    b.ascend();
}