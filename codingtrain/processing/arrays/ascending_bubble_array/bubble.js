function Bubble() {

    this.x = random(width);
    this.y = height;
    this.r = random(15, 80);
    this.col = color(0);

    this.draw = function () {
        stroke(255);
        strokeWeight(2);
        fill(this.col);
        ellipse(this.x, this.y, this.r, this.r);
    }

    this.ascend = function () {
        this.y -= 2.7 - this.r/50;
        if( this.y < -(this.r / 2) ) {
            this.y = height + (this.r/2);
        }
        this.x += random(-2, 2);
    }

    this.overlaps = function (other) {
        var d = dist(this.x, this.y, other.x, other.y);
        return d < (this.r + other.r) / 2;
    }

    this.color = function (col) {
        this.col = col;
    }
}