// Example code from
// Coding Train "Live Stream #4: p5.js Lessons About Loops"
// https://youtu.be/xyclhIu2WDY

// the width of the circles
var w = 40;
var radius = w/2;

function setup() {
	createCanvas( 600, 400 );
}

function draw() {
    background(0);
    stroke(255);
    strokeWeight(4);

    // draw a first horizontal line of circles using the while loop
    fill( 223, 25, 179 );
    var x = 0;
    while( x < width+radius ) {
        ellipse( x, 100, w );
        x = x+50;
    }

    // draw a second horizonal line of circles below the first one,
    // but now using the for loop
    fill( 0, 200, 225 );
    for( x = 0; x < width+radius; x += 50 ) {
        ellipse( x, 250, w );
    }
}