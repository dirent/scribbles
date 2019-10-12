let n = 6;
let d = 71;
let dSlider, nSlider;
let dLabel, nLabel;

function setup() {
    createCanvas(600, 600);
    angleMode(DEGREES);
    dLabel = createElement("label");
    dSlider = createSlider(1, 180, d);
    nLabel = createElement("label");
    nSlider = createSlider(1, 10, n);
}

function draw() {
    let scaleFactor = width / 3;
    translate(width / 2, height / 2);
    scale(scaleFactor, -scaleFactor);

    background(0);
    d = dSlider.value();
    n = nSlider.value();
    dLabel.html("d: " + d);
    nLabel.html("n: " + n);

    noFill();
    stroke(255);
    strokeWeight(1 / scaleFactor);
    beginShape();
    for (let a = 0; a < 360; a++) {
        let k = a * d;
        let r = sin(n * k);
        let x = r * sin(k);
        let y = r * cos(k);
        vertex(x, y);
    }
    endShape(CLOSE);

    noFill();
    stroke(255, 0, 228, 100);
    strokeWeight(3 / scaleFactor);
    beginShape();
    for (let a = 0; a < 360; a++) {
        let k = a;
        let r = sin(n * k);
        let x = r * sin(k);
        let y = r * cos(k);
        vertex(x, y);
    }
    endShape(CLOSE);

    stroke(255);
    fill(255);
    textSize(16 / scaleFactor);
    text("zyx", 1, 1);
}