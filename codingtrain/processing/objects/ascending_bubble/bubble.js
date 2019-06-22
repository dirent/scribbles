function Bubble() {

    this.x = width / 2;
    this.y = height;

    this.draw = function () {
        stroke(255);
        fill(128);
        ellipse(this.x, this.y, 36, 36);
    }

    this.ascend = function () {
        this.y--;
        this.y = max(18, this.y);
        this.x += random(-2, 2);
    }
}