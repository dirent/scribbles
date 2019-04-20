// Example code from
// Coding Train "Live Stream #6: More about Arrays and Objects with p5.js"
// https://youtu.be/PgGFv44bz9E

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