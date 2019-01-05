// Example code from
// Coding Train "Live Stream #5: Arrays and Objects with p5.js"
// https://youtu.be/8v_D33uGUrU

// the widths of the circles
var widths = [];
// the colors of the circles,
var colors = [];

// Note: we have to wait for initializing 
// the arrays until p5 is ready!

function setup() {
    createCanvas(500, 400);

    // note: the length of the both arrays must be equal
    widths = [14, 76, 26, 46];
    colors = [
        color(126, 0, 134),
        color(45, 123, 175),
        color(212, 245, 212),
        color(198, 24, 123)
    ];
}

function draw() {
    background(0);
    for (var i = 0; i < widths.length; i++) {
        fill(colors[i]);
        ellipse(i * 100 + 100, 200, widths[i]);
    }
}