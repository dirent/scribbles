// Example code from
// Coding Train "Live Stream #1: p5.js Video Lesson Recording Session"
// https://youtu.be/TdUC3JgwUJY
var spot = {
    x: 100,
    y: 200,
    r: 25
}

var col = {
    r: 200,
    g: 0,
    b: 200
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
}

function draw() {
    // randomly choose position and radius of the next ellipse
    spot.x = random(0, width);
    spot.y = random(0, height);
    spot.r = random(20, 40);
    // randomly choose the color of the next ellipse
    col.r = random(128, 255);
    col.g = 0;
    col.b = random(100, 200);
    // paint the next ellipse
    fill(col.r, col.g, col.b, 100);
    noStroke();
    ellipse(spot.x, spot.y, spot.r, spot.r);
}