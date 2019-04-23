// Example code from
// Coding Train "7.8: Objects and Images - p5.js Tutorial"
// https://youtu.be/FVYGyaxG4To

// the array of bubble objects
var bubbles = [];
var flowers = [];

function preload() {
    flowers[0] = loadImage("images/flower0.png");
    flowers[1] = loadImage("images/flower1.png");
    flowers[2] = loadImage("images/flower2.png");
}

function setup() {
    createCanvas(600, 400);
}

function mousePressed() {
    var flower = random(flowers);
    bubbles.push(new Bubble(mouseX, mouseY, flower));
}

function draw() {
    background(0);

    for (var i = 0; i < bubbles.length; i++) {
        bubbles[i].display();
        bubbles[i].move();
    }
}