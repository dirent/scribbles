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
        // draw upper half of the pipe
        rect(this.x, 0, this.pipeWidth, this.gap);
        // draw lower half of the pipe
        rect(this.x, this.gap + this.gapHeight, this.pipeWidth, height);
        // move to left
        this.x -= this.pipeSpeed;
    }

    /**
     * Checks if the pipe is expired, i.e. has left the screen
     */
    this.isExpired = function () {
        return this.x < -this.pipeWidth;
    }

    /**
     * Checks if the pipe is out of the way for the next pipe to start
     */
    this.isSteppedAway = function () {
        return this.x < width - this.pipeWidth - this.pipeDistance;
    }

    /**
     * Checks if the pipe collides against a bird
     */
    this.collides = function (bird) {
        // Check upper pipe
        if (collideRectCircle(this.x, 0, this.pipeWidth, this.gap,
                bird.x, bird.y, bird.size)) {
            return true;
        }
        // Check lower pipe
        if (collideRectCircle(this.x, this.gap + this.gapHeight, this.pipeWidth, height,
                bird.x, bird.y, bird.size)) {
            return true;
        }
        return false;
    }

    /**
     * Checks if a bird has passed by
     */
    this.hasPassed = function (bird) {
        return this.x + this.pipeWidth / 2 <= bird.x &&
            this.x + this.pipeWidth / 2 + this.pipeSpeed > bird.x;
    }

}