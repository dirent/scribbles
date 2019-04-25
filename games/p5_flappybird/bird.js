function Bird(gap, size) {
    this.x = gap;
    this.y = height / 4;
    this.size = size;
    this.speed = 0;
    this.acceleration = 0.4;

    this.show = function () {
        if (this.speed < 10) {
            this.speed += this.acceleration;
        }
        this.y += this.speed;
        if (this.y > height - this.size / 2 && this.speed > 0) {
            this.jump();
            this.y = height - this.size / 2;
        }
        stroke(35, 75, 89);
        strokeWeight(5);
        fill(247, 183, 49);
        // render ball
        fill(252, 233, 3);
        arc(this.x, this.y, this.size, this.size,
            this.speed / 20 + QUARTER_PI / 2,
            this.speed / 20 - QUARTER_PI / 2, PIE);
    }

    this.jump = function () {
        if (this.y > 0) {
            this.speed = -7.5;
        }
        //console.log( this.speed );
    }
}