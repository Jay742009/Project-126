song = "";

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotposes);
}

function gotposes() {

}

function modelloaded() {
    console.log("Posenet is initialized");
}

function draw() {
    image(video, 0, 0, 600, 500);
}