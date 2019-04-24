let snake;

function setup() {
    createCanvas( 600, 400 );
    
    snake = new Snake();
}

function draw() {
    background(0);

    snake.display();
    snake.move();
}
