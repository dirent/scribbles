function Score(welcome) {
    this.welcome = welcome;
    this.gameStatus = 0;
    this.currentScore = 0;
    this.highScore = 0;

    this.isReady = function () {
        return this.gameStatus === 0;
    }

    this.isRunning = function () {
        return this.gameStatus === 1;
    }

    this.isGameOver = function () {
        return this.gameStatus === 2;
    }

    this.show = function () {
        var scoreText = this.welcome;
        textFont("Verdana");
        textSize(height / 10);
        textAlign(CENTER);
        textStyle(BOLD);
        fill(255);
        stroke(0);
        strokeWeight(10);

        if (this.isRunning()) {
            scoreText = this.currentScore + " / " + this.highScore;
        }
        if (this.isGameOver()) {
            scoreText = this.currentScore + " / " + this.highScore + "\n\nGAME OVER";
        }
        text(scoreText, 0, height / 10, width, height);
    }

    this.start = function () {
        this.gameStatus = 1;
        this.currentScore = 0;
    }

    this.increase = function (score) {
        this.currentScore += score;
    }

    this.gameOver = function () {
        this.gameStatus = 2;
        if (this.currentScore > this.highScore) {
            this.highScore = this.currentScore;
        }
    }

    this.reset = function () {
        this.gameStatus = 0;
    }
}