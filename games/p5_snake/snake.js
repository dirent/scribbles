// This object represents a snake.

const RIGHT = [1, 0];
const LEFT = [-1, 0];
const UP = [0, -1];
const DOWN = [0, 1];

function Snake() {

    // the radius of a single block within the snake
    this.blockWidth = 20;
    this.direction = RIGHT;
    this.blocks = [];
    this.blocks[0] = [(width-this.blockWidth) / 2, (height-this.blockWidth) / 2];

    /**
     * Extends the snake by one to the current direction
     */
    this.eat = function () {
        let headX = this.blocks[0][0],
            headY = this.blocks[0][1]
        dirX = this.direction[0],
            dirY = this.direction[1];

        this.blocks.push([headX + this.blockWidth * dirX, headY + this.blockWidth * dirY]);
    }

    // let the snake grow initially
    this.eat();
    this.eat();
    this.eat();
    this.eat();

    this.display = function () {
        rectMode(CENTER);
        stroke(255);
        fill(0, 0, 248);
        this.blocks.forEach(block => {
            square(block[0], block[1], this.blockWidth);
        });
    };

    this.move = function () {
        // calculate the new head location
        let dirX = this.direction[0],
            dirY = this.direction[1],
            headX = constrain(this.blocks[0][0] + this.blockWidth * dirX, this.blockWidth/2, width - this.blockWidth/2),
            headY = constrain(this.blocks[0][1] + this.blockWidth * dirY, this.blockWidth/2, height - this.blockWidth/2);

        if (headX != this.blocks[0][0] || headY != this.blocks[0][1]) {
            // move body of the snake
            for (let i = this.blocks.length - 1; i > 0; i--) {
                this.blocks[i] = this.blocks[i - 1];
            }
            // move the head of the snake
            this.blocks[0] = [headX, headY];
        }
    };

    this.keyPressed = function () {
        if (keyCode === UP_ARROW) {
            this.direction = UP;
        }
        if (keyCode === DOWN_ARROW) {
            this.direction = DOWN;
        }
        if (keyCode === LEFT_ARROW) {
            this.direction = LEFT;
        }
        if (keyCode === RIGHT_ARROW) {
            this.direction = RIGHT;
        }
    }
}