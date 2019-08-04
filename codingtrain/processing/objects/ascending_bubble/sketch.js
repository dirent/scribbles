// Example code from
// Coding Train "8.3: Defining a Class Part II - Processing Tutorial"
// https://youtu.be/XwfOVFelLoo
// 
// Coding Train "8.4: Constructor Arguments - Processing Tutorial"
// https://youtu.be/NrwaKOsplZk
//
// Coding Train "8.5: More on Objects - Processing Tutorial"
// https://youtu.be/V7k5bFQbhG0
//
// Coding Train "8.6: Pass by Value vs. Pass by Reference - Processing Tutorial"
// https://youtu.be/hNR6fsksEu8

let b1, b2, b3;

function init() {
    b1 = new Bubble();
    b2 = new Bubble();
    b3 = new Bubble();
}

function resetColors() {
    b1.color(color(256, 0, 0, 128));
    b2.color(color(0, 256, 0, 128));
    b3.color(color(0, 0, 256, 128));
}

function setup() {
    let button;
    createCanvas(600, 400);
    init();
    button = createButton("Restart");
    button.mousePressed(function () {
        init();
    });

}

function draw() {
    resetColors();
    if (b1.overlaps(b2)) {
        b1.color(color(256, 256, 0, 128));
    }
    if (b2.overlaps(b3)) {
        b2.color(color(0, 256, 256, 128));
    }
    if (b3.overlaps(b1)) {
        b3.color(color(256, 0, 256, 128))
    }
    background(0);
    b1.draw();
    b2.draw();
    b3.draw();
    b1.ascend();
    b2.ascend();
    b3.ascend();
}