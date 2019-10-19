let mobilenet;
let puffin;

function modelReady() {
    console.log("Model is ready.");
}

function imageReady() {
    image(puffin, 0, 0, width, height);
}

function setup() {
    createCanvas(640, 480);
    background(0);
    puffin = createImg("images/puffin.jpg", imageReady);
    puffin.hide();
    console.log("ml5js version: " + ml5.version);
    mobilenet = ml5.imageClassifier("MobileNet", modelReady);
}