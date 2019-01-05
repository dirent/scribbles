// Example code from
// Coding Train "Live Stream #5: Arrays and Objects with p5.js"
// https://youtu.be/8v_D33uGUrU

// the array of bubble objects
var bubbles = [];

// flag, if the mouse dragging has been stopped
var draggingStopped = true;

function setup() {
    createCanvas( 600, 400 );
    
    // set up the array of bubble objects
    for( var i=0; i<5; i++ ) {
        bubbles[i] = new Bubble( random(width), random(height) );
    }
}

function mouseDragged() {

    if( draggingStopped ) {
        draggingStopped = false;
        bubbles.splice( 0, bubbles.length );
    }

    bubbles.push( new Bubble( mouseX, mouseY ) );
}

function mouseReleased() {
    draggingStopped = true;
}

function keyTyped() {
    if( key === 'x' ) {
        bubbles.splice( 0, bubbles.length );
    }
}

function draw() {
    background(0);

    for( var i=0; i<bubbles.length; i++ ) {
        bubbles[i].display();
        bubbles[i].move();
    }

    if( bubbles.length > 100 ) {
        bubbles.splice(0,1);
    }

    // remove bubbles that leaves the window
    for( var i=bubbles.length-1; i>=0; i-- ) {
        if( bubbles[i].hasLeftWindow() ) {
            bubbles.splice(i,1);
        }
    }
}
