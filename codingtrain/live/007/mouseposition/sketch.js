// Example code from
// Coding Train "Live Stream #7: HTML / CSS / DOM with p5.js"
// https://youtu.be/rEC9U9dgxkA

var windowWidth = window.innerWidth || document.clientWidth,
    windowHeight = window.innerHeight || document.clientHeight;

var info;

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    info = createP('Mouse position:');
    info.position(0, 0);
}

function draw() {
    clear();

    // draw mouse pointer
    stroke(0);
    circle(mouseX, mouseY, 2);

    // adjust relative position of info element
    var offsetX = 10,
        offsetY = -40;
    if (mouseX > width - 100) {
        offsetX = -100;
    }
    if (mouseY < 40) {
        offsetY = -10;
    }
    info.position(mouseX + offsetX, mouseY + offsetY);

    // draw info text
    info.html("Mouse position: (" + mouseX + "," + mouseY + ")");
}