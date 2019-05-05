// Example code from
// Coding Train "Live Stream #1: p5.js Video Lesson Recording Session"
// https://youtu.be/TdUC3JgwUJY

var r = 0;
var g = 0;
var b = 0;

function setup() {
    createCanvas(600, 400);
}

function draw() {
    // map the x coordinate
    // of the mouse pointer to a color
    r = map(mouseX, 0, 600, 0, 255);
    b = map(mouseX, 0, 600, 255, 0);    
    background(r, g, b);
    // visualize current position
    fill(233, 88, 236);
    ellipse(mouseX, 200, 50, 50);
}