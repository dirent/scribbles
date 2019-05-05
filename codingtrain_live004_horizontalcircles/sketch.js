// Example code from
// Coding Train "Live Stream #4: p5.js Lessons About Loops"
// https://youtu.be/xyclhIu2WDY
// and
// Coding Traing "6.1: While Loop - Processing Tutorial"
// https://youtu.be/RtAPBvz6k0Y

// the width of the circles
var w = 40;
var radius = w/2;
var spacing = 50;

function setup() {
	createCanvas( 600, 400 );
}

function draw() {
    background(0);
    stroke(255);
    strokeWeight(4);

    // add a spacing that depends on the mouse position
    if( mouseX > 0 ) {
        spacing = 50 + mouseX / 10;
    }

    // draw a first horizontal line of circles using the while loop
    fill( 223, 25, 179 );
    var x = 0;
    while( x < width+radius ) {
        ellipse( x, 100, w );
        x = x+spacing;
    }

    // draw a second horizonal line of circles below the first one,
    // but now using the for loop
    fill( 0, 200, 225 );
    for( x = 0; x < width+radius; x += spacing ) {
        ellipse( x, 250, w );
    }
}