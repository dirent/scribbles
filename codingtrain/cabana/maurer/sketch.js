let n = 2;
let d = 29;

function setup() {
    createCanvas(600, 600);
    angleMode(DEGREES);
}

function draw() {
    let scaleFactor = width / 3;
    translate(width / 2, height / 2);
    scale(scaleFactor, -scaleFactor);
    strokeWeight(1 / scaleFactor);

    background(0);
    stroke(255);
    noFill();
    beginShape();
    for (let a = 0; a < 360; a++) {
        let k = a * d;
        let r = sin(n * k);
        let x = r * sin(k);
        let y = r * cos(k);
        vertex(x, y);
    }
    endShape(CLOSE);
}