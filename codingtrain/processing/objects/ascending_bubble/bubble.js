function Bubble() {

    this.x = random(width);
    this.y = height;
    this.r = random(50, 150);

    this.draw = function () {
        stroke(255);
        fill(128);
        ellipse(this.x, this.y, this.r, this.r);
    }

    this.ascend = function () {
        this.y--;
        this.y = max(this.r/2, this.y);
        this.x += random(-2, 2);
    }
}