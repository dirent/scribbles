// Example code from
// Coding Train "Live Stream #5: Arrays and Objects with p5.js"
// https://youtu.be/8v_D33uGUrU

// the radii of the circles
var radii = [ 14, 76, 26, 46 ];
// the colors of the circles,
// note: the length of the both arrays must be equal
var colors = [ [126, 0, 134], 
               [45, 123, 175],
               [212, 245, 212],
               [198, 24, 123] ];

function setup() {
	createCanvas( 500, 400 );
}

function draw() {
    background(0);
    for( var i=0; i<radii.length; i++ ) {
        fill( colors[i][0], colors[i][1], colors[i][2] );
        ellipse( i*100 + 100, 200, radii[i], radii[i] );
    }
}