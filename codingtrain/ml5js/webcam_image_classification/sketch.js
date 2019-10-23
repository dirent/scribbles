let mobilenet;
let video;
let label = "";

function modelReady() {
    console.log("Model is ready.");
    mobilenet.predict(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        label = results[0].label;
        mobilenet.predict(gotResults);
    }
}

function setup() {
    createCanvas(640, 480);
    background(0);
    video = createCapture(VIDEO);
    video.hide();
    console.log("ml5js version: " + ml5.version);
    mobilenet = ml5.imageClassifier("MobileNet", video, modelReady);
}

function draw() {
    image(video, 0, 0);
    // display current classification
    fill(0);
    textSize(24);
    text(label, 10, 30);
}