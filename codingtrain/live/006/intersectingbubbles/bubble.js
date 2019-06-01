// This object represents a bubble.
// It provides functions to display
// and to update a bubble.
// It also provides a function to check
// if the the bubble intersects another
// bubble.

function Bubble(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.col = color(200, 100);

    this.display = function () {
        stroke(255);
        fill(this.col);
        ellipse(this.x, this.y, 2 * this.radius);
    };

    this.update = function () {
        this.x += random(-1, 1);
        this.y += random(-1, 1);
    };

    this.intersects = function (b) {
        var d = dist(this.x, this.y, b.x, b.y);
        return d < this.radius + b.radius;
    };

    this.changeColor = function () {
        this.col = color(random(255), random(255), random(255));
    };
}