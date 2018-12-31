// Example code from
// Coding Train "Live Stream #5: Arrays and Objects with p5.js"
// https://youtu.be/8v_D33uGUrU

// the array of bubble objects
var bubbles = [];
// the radius of a bubble
var radius = 25;

function setup() {
    createCanvas( 600, 400 );
    
    // set up the array of bubble objects
    for( var i=0; i<200; i++ ) {
        bubbles[i] = new Bubble();
    }
}

function draw() {
    background(0);

    for( var i=0; i<bubbles.length; i++ ) {
        bubbles[i].display();
        bubbles[i].move();
    }
}

function Bubble() {
    this.x = random(width);
    this.y = random(height);
    
    this.display = function() {
        stroke(255);
        fill(245, 96, 248, 65);
        ellipse( this.x, this.y, 25, 25 );
    };
    
    this.move = function() {
        this.x += random( -1, 1 );
        this.y += random( -1, 1 );
    };
}