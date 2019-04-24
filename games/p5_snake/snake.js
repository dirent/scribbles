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

    this.eat = function () {
        let headPos = this.blocks.length - 1,
            headX = this.blocks[headPos][0],
            headY = this.blocks[headPos][1],
            dirX = this.direction[0],
            dirY = this.direction[1];

        this.blocks.push( [headX + this.blockWidth*dirX, headY + this.blockWidth*dirY] );
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

    };

}