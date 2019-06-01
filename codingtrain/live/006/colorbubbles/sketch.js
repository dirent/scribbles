// Example code from
// Coding Train "Live Stream #6: More about Arrays and Objects with p5.js"
// https://youtu.be/PgGFv44bz9E

// the array of bubble objects
var bubbles = [];

function setup() {
    createCanvas(600, 400);

    // set up the array of bubble objects
    for (var i = 0; i < 50; i++) {
        bubbles[i] = new Bubble(random(width), random(height));
    }
}

function mousePressed() {
    for (var i = 0; i < bubbles.length; i++) {
        bubbles[i].clicked();
    }
}

function draw() {
    background(0);

    for (var i = 0; i < bubbles.length; i++) {
        bubbles[i].display();
        bubbles[i].move();
    }

    // remove bubbles that leaves the window
    for (var i = bubbles.length - 1; i >= 0; i--) {
        if (bubbles[i].hasLeftWindow()) {
            bubbles.splice(i, 1);
        }
    }

}