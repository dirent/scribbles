let mobilenet;
let bird;

function modelReady() {
    console.log("Model is ready.");
    mobilenet.predict(bird, gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        let label = results[0].label;
        fill(0);
        textSize(24);
        text(label, 10, 30);
        let confidence = results[0].confidence;
        createP(label);
        createP(confidence);
    }
}

function imageReady() {
    image(bird, 0, 0, width, height);
}

function setup() {
    createCanvas(640, 480);
    background(0);
    let choice = random(2);
    if (choice < 1) {
        bird = createImg("images/puffin.jpg", imageReady);
    } else {
        bird = createImg("images/seagull.jpg", imageReady);
    }
    bird.hide();
    console.log("ml5js version: " + ml5.version);
    mobilenet = ml5.imageClassifier("MobileNet", modelReady);
}