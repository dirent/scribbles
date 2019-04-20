// Example code from
// Coding Train "7.7: Deleting Objects Using splice() - p5.js Tutorial"
// https://youtu.be/HXOD_XDA-KU

// the array of bubble objects
var bubbles = [];

function setup() {
    createCanvas(600, 400);
}

function mousePressed() {
    bubbles.push(new Bubble(mouseX, mouseY));
}

function draw() {
    background(0);

    for (var i = bubbles.length - 1; i >= 0; i--) {
        bubbles[i].display();
        bubbles[i].update();
        if (!bubbles[i].isVisible()) {
            bubbles.splice(i, 1);
        }
    }
}