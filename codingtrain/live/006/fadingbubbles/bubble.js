// This object represents a bubble.
// It provides functions to display
// and to update a bubble.
// As a bubble fades out over time, 
// it also provides a function to 
// check the visbility.

// the radius of a bubble
var radius = 12;

function Bubble(x, y) {
    this.x = x;
    this.y = y;
    this.lifespan = 255;

    this.display = function () {
        noStroke();
        fill(color(200, this.lifespan));
        ellipse(this.x, this.y, 2 * radius);
    };

    this.update = function () {
        this.x += random(-1, 1);
        this.y += random(-1, 1);
        this.lifespan = this.lifespan - 1;
    };

    this.isVisible = function () {
        return this.lifespan >= 0;
    };
}