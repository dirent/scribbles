// Example code from
// Coding Train "7.4: Reusability with Functions - Processing Tutorial"
// https://youtu.be/b9AYvekwKIg

let stars = [],
    clearStars = false;

function setup() {
    let b;
    createCanvas(600, 480);
    addStar(random(width), random(height));
    b = createButton("Clear stars");
    b.mousePressed(function () {
        clearStars = true;
    });
}

function draw() {
    let i;
    background(0);
    if (clearStars) {
        stars = [];
        clearStars = false;
    } else {
        for (i = 0; i < stars.length; i++) {
            star(stars[i].x, stars[i].y);
        }
    }
}

function mousePressed() {
    addStar(mouseX, mouseY);
}

function addStar(x, y) {
    stars.push({
        x: x,
        y: y
    });
}

function star(x, y) {
    let r = 50;
    fill(128);
    stroke(255);
    beginShape();
    // upper half
    vertex(x + r, y);
    vertex(x + 2 * r / 5, y - r / 5);
    vertex(x + r / 2, y - 4 * r / 5)
    vertex(x, y - 2 * r / 5);
    vertex(x - r / 2, y - 4 * r / 5);
    vertex(x - 2 * r / 5, y - r / 5);
    vertex(x - r, y);
    // lower half
    vertex(x - 2 * r / 5, y + r / 5);
    vertex(x - r / 2, y + 4 * r / 5);
    vertex(x, y + 2 * r / 5);
    vertex(x + r / 2, y + 4 * r / 5);
    vertex(x + 2 * r / 5, y + r / 5);
    endShape(CLOSE);
}