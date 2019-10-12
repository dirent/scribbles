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
        let r = 1;
        let x = r * cos(a);
        let y = r * sin(a);
        vertex(x, y);
    }
    endShape(CLOSE);
}