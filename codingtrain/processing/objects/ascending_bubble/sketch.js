// Example code from
// Coding Train "8.3: Defining a Class Part II - Processing Tutorial"
// https://youtu.be/XwfOVFelLoo
// 
// Coding Train "8.4: Constructor Arguments - Processing Tutorial"
// https://youtu.be/NrwaKOsplZk
//
// Coding Train "8.5: More on Objects - Processing Tutorial"
// https://youtu.be/V7k5bFQbhG0

var b1, b2, b3;

function setup() {
    createCanvas(600, 400);
    b1 = new Bubble();
    b2 = new Bubble();
    b3 = new Bubble();
}

function draw() {
    var red = 0;
    var green = 0;
    var blue = 0;
    if( b1.overlaps(b2) ) {
        red = 128;
    }
    if( b2.overlaps(b3) ) {
        green = 128;
    }
    if( b3.overlaps(b1) ) {
        blue = 128;
    }
    background(red, green, blue);
    b1.draw();
    b2.draw();
    b3.draw();
    b1.ascend();
    b2.ascend();
    b3.ascend();
}