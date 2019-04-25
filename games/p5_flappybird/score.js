function Score(welcome) {
    this.welcome = welcome;
    this.gameStatus = 0;
    this.currentScore = 0;
    this.highScore = 0;

    this.isReadyToStart = function () {
        return this.gameStatus == 0;
    }

    this.show = function () {
        textFont("Verdana");
        textSize(height / 10);
        textAlign(CENTER);
        textStyle(BOLD);
        fill(255);
        stroke(0);
        strokeWeight(10);

        if (this.isReadyToStart()) {
            text(this.welcome, 0, height / 10, width, height);
        }
    }
}