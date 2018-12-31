// Example code from
// Coding Train "Live Stream #5: Arrays and Objects with p5.js"
// https://youtu.be/8v_D33uGUrU

// the array of bubble objects
var bubbles = [];

function setup() {
    createCanvas( 600, 400 );
    
    // set up the array of bubble objects
    for( var i=0; i<500; i++ ) {
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
        noFill();
        ellipse( this.x, this.y, 15, 15 );
    };
    
    this.move = function() {
        this.x += random( -1, 1 );
        this.y += random( -1, 1 );
    };
}