// Example code from
// Coding Train "8.4: Handling DOM Events with Callbacks - p5.js Tutorial"
// https://youtu.be/NcCEzzd9BGE

let bgColor = 200;

function setup() {
    let i, b;
    createCanvas(255, 200);
    createP();
    createP("Click on gradient stripe to change background color.");
    // create a button for each gradient
    for (i = 0; i <= 255; i++) {
        let color = i;
        b = createButton("");
        b.style("padding", "0");
        b.style("cursor", "pointer");
        b.style("width", "1px");
        b.style("height", "16px");
        b.style("border", "none");
        b.style("background-color", "rgb(" + i + "," + i + "," + i + ")");
        b.mousePressed(function () {
            bgColor = color;
        });
    }
}

function draw() {
    background(bgColor);
}