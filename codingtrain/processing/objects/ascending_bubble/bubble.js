function Bubble() {

    this.x = random(width);
    this.y = height;
    this.r = random(100, 200);

    this.draw = function () {
        stroke(255);
        strokeWeight(2);
        fill(128, 128, 128, 128);
        ellipse(this.x, this.y, this.r, this.r);
    }

    this.ascend = function () {
        this.y--;
        this.y = max(this.r / 2, this.y);
        this.x += random(-2, 2);
    }

    this.overlaps = function (other) {
        var d = dist(this.x, this.y, other.x, other.y);
        return d < (this.r + other.r) / 2;
    }
}