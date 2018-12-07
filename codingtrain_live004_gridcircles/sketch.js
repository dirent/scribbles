// Example code from
// Coding Train "Live Stream #4: p5.js Lessons About Loops"
// https://youtu.be/xyclhIu2WDY

// the radius of the circles
var radius = 40;

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);
    stroke(255);
    strokeWeight(4);

    var x = 0;
    y = 0;
    for (x = 0; x < width + radius; x += 50) {
        for (y = 0; y < height + radius; y += 50) {
            fill( random(200), 20, random(200) );
            ellipse(x, y, radius, radius);
        }
    }
}