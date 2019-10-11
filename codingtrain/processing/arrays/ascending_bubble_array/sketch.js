// Example code from
// Coding Train "9: Arrays - Processing Tutorial"
// https://www.youtube.com/playlist?list=PLRqwX-V7Uu6bO9RKxHObluh-aPgrrvb4a

const SIZE = 120;
let total, bubbles;

function init() {
    let i;
    total = random(0.25 * SIZE, 0.75 * SIZE);
    bubbles = new Array();
    for (i = 0; i < SIZE; i++) {
        bubbles.push(new Bubble());
    }
}

function resetColors() {
    let i;
    for (i = 0; i < bubbles.length; i++) {
        if (i % 3 == 0) {
            bubbles[i].color(color(256, 0, 0, 128));
        }
        if (i % 3 == 1) {
            bubbles[i].color(color(0, 256, 0, 128));
        }
        if (i % 3 == 2) {
            bubbles[i].color(color(0, 0, 256, 128));
        }
    }
}

function setup() {
    let button;
    createCanvas(600, 400);
    init();
    button = createButton("Restart");
    button.mousePressed(function () {
        init();
    });
}

function draw() {
    let index = 0;
    resetColors();
    background(0);
    bubbles.forEach(function (bubble) {
        if (index < total) {
            bubble.draw();
            bubble.ascend();
        }
        index++;
    });
}