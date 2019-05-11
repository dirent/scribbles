// Example code from
// Coding Train "6.6: Nested Loops - Processing Tutorial"
// https://youtu.be/H7frvcAHXps

// the width of a recangle
var w = 20;

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);
    stroke(255);
    strokeWeight(2);

    for (var x = 0; x < width; x = x + w) {
        for (var y = 0; y < height; y = y + w) {
            // calculate the fill color from the distance between the 
            // recangle and the mouse pointer
            fill(map(dist(x, y, mouseX, mouseY), 0, 600, 0, 255));
            rect(x, y, w, w);
        }
    }
}