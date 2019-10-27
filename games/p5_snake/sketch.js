let snake;

function setup() {
    createCanvas( 600, 600 );
    frameRate(5);
    snake = new Snake();
}

function draw() {
    background(0);
    snake.move();
    snake.display();
}

function keyPressed() {
    snake.keyPressed();
}
