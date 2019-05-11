// Example code from
// Coding Train "6.5: Loop vs. Draw - Processing Tutorial"
// https://youtu.be/Z8s-7beNP1c

// right border for vertical lines
var endX = 0;
var increment = 2;

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);
    stroke(255);
    strokeWeight(2);

    var x = 0;
    while (x < endX) {
        line(x, 0, x, height);
        x = x + 20;
    }

    // move border
    endX = endX + increment;

    // check if border runs out of screen
    if (endX < 0 || endX > width) {
        // send the border the other way back
        increment *= -1;
        endX += increment;
    }
}