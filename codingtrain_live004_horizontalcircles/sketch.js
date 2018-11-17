// Example code from
// Coding Train "Live Stream #4: p5.js Lessons About Loops"
// https://youtu.be/xyclhIu2WDY

// the radius of the circles
var radius = 40;

function setup() {
	createCanvas( 600, 400 );
}

function draw() {
    background(0);
    stroke(255);
    strokeWeight(4);

    fill( 223, 25, 179 );
    var x = 0;
    while( x < width+radius ) {
        ellipse( x, 200, radius, radius );
        x = x+50;
    }
}