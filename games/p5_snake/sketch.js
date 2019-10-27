const BLOCK_WIDTH = 20;

let snake;
let food;

/**
 * Creates food
 */
function seed() {
    // create food
    let foodX = int(random(0, width / BLOCK_WIDTH)) * BLOCK_WIDTH + BLOCK_WIDTH / 2,
        foodY = int(random(0, height / BLOCK_WIDTH)) * BLOCK_WIDTH + BLOCK_WIDTH / 2;
    food = [foodX, foodY];
}

function setup() {
    createCanvas(600, 600);
    frameRate(5);
    snake = new Snake(BLOCK_WIDTH);
    seed();
}

function draw() {
    background(0);
    snake.move();
    snake.display();
    rectMode(CENTER);
    fill(255, 0, 100);
    square(food[0], food[1], BLOCK_WIDTH);
}

function keyPressed() {
    snake.keyPressed();
}