// This object represents a bubble.
// It provides functions to display
// and to move a bubble.

function Bubble( x, y ) {
    this.x = x;
    this.y = y;
    
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