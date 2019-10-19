let mobilenet;
let puffin;

function modelReady() {
    console.log("Model is ready.");
    mobilenet.predict(puffin, gotResults);
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