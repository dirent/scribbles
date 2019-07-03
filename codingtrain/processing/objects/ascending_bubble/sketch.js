// Example code from
// Coding Train "8.3: Defining a Class Part II - Processing Tutorial"
// https://youtu.be/XwfOVFelLoo
// 
// Coding Train "8.4: Constructor Arguments - Processing Tutorial"
// https://youtu.be/NrwaKOsplZk

var b1,b2;

function setup() {
    createCanvas(600, 400);
    b1 = new Bubble();
    b2 = new Bubble();
}

function draw() {
    background(0);
    b1.draw();
    b2.draw();
    b1.ascend();
    b2.ascend();
}