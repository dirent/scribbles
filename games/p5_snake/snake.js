// This object represents a snake.

const RIGHT = [1, 0];
const LEFT = [-1, 0];
const UP = [-1, 0];
const DOWN = [1, 0];

function Snake() {

    // the radius of a single block within the snake
    this.blockWidth = width / 50;
    this.direction = RIGHT;
    this.blocks = [];
    this.blocks[0] = [width / 2, height / 2];

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
            headX = constrain(this.blocks[0][0] + this.blockWidth * dirX, 0, width - this.blockWidth),
            headY = constrain(this.blocks[0][1] + this.blockWidth * dirY, 0, height - this.blockWidth);

        if (headX != this.blocks[0][0] || headY != this.blocks[0][1]) {
            // move body of the snake
            for (let i = this.blocks.length - 1; i > 0; i--) {
                this.blocks[i] = this.blocks[i - 1];
            }
            // move the head of the snake
            this.blocks[0] = [headX, headY];
        }
    };

}