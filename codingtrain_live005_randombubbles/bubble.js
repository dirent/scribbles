// This object represents a bubble.
// It provides functions to display
// and to move a bubble.

// the radius of a bubble
var radius = 12;

function Bubble(x, y) {
    this.x = x;
    this.y = y;

    this.display = function () {
        stroke(255);
        fill(245, 96, 248, 65);
        ellipse(this.x, this.y, 2 * radius);
    };

    this.move = function () {
        this.x += random(-1, 1);
        this.y += random(-1, 1);
    };

    this.hasLeftWindow = function() {
        return this.x - radius < 0 || this.x + radius > width ||
            this.y - radius < 0 || this.y + radius > height;
    };
}