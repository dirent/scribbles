// Example code from
// Coding Train "7.6: Checking Objects Intersection Part I - p5.js Tutorial"
// https://youtu.be/uAfw-ko3kB8
// and
// Coding Train "7.7: Checking Objects Intersection Part II - p5.js Tutorial"
// https://youtu.be/GY-c2HO2liA

// some bubble objects
var bubbles = [];
var diameter = 32;

function setup() {
    createCanvas(600, 400);
    for (var i = 0; i < 50; i++) {
        bubbles[i] = new Bubble(
            random(diameter, width - diameter),
            random(diameter, height - diameter),
            random(5, diameter) / 2);
    }
}

function draw() {
    background(0);

    for (var i = 0; i < bubbles.length; i++) {
        bubbles[i].update();
        bubbles[i].display();
        for (var j = i + 1; j < bubbles.length; j++) {
            if (bubbles[i].intersects(bubbles[j])) {
                bubbles[i].changeColor();
                bubbles[j].changeColor();
            }
        }
    }
}