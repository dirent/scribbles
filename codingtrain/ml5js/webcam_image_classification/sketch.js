let mobilenet;
let video;

function modelReady() {
    console.log("Model is ready.");
}

function setup() {
    createCanvas(640, 480);
    background(0);
    video = createCapture(VIDEO);
    video.hide();
    console.log("ml5js version: " + ml5.version);
    mobilenet = ml5.imageClassifier("MobileNet", modelReady);
}

function draw() {
    image(video, 0, 0);
}