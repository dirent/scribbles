function Pipe(pipeSpeed, gapHeight, pipeWidth) {
    // start at the right border of the screen
    this.x = width;
    this.pipeSpeed = pipeSpeed;
    this.pipeWidth = pipeWidth;
    this.pipeDistance = this.pipeWidth * 2;
    this.gapHeight = gapHeight;
    this.gapMargin = height / 10;
    // y coordinate of current gap
    this.gap = random(this.gapMargin, height - this.gapHeight - this.gapMargin);

    this.show = function () {
        stroke(80, 61, 72);
        strokeWeight(3);
        fill(130, 168, 65);
        // upper half of the pipe
        rect(this.x, 0, this.pipeWidth, this.gap);
        // lower half of the pipe
        rect(this.x, this.gap + this.gapHeight, this.pipeWidth, height);
        // move
        this.x -= this.pipeSpeed;
    }

    this.isExpired = function () {
        return this.x < -this.pipeWidth;
    }

    this.isSteppedAway = function () {
        return this.x < width - this.pipeWidth - this.pipeDistance;
    }
}