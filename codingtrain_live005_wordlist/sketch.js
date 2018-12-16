// Example code from
// Coding Train "Live Stream #5: Arrays and Objects with p5.js"
// https://youtu.be/8v_D33uGUrU

// the words to display
var words = [ "rainbow", "love", "unicorn", "purple", "friendship" ];
// the index of the word to display
var index = 0;

function setup() {
	createCanvas( 400, 400 );
}

function draw() {
    background(0);
    fill(255);

    textSize(32);
    text( words[index], 12, 200 );
}

function mouseClicked() {
    index = (index+1) % words.length;
}