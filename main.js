function setup() {
    video = createCapture(VIDEO);
    video.size(500, 550);

    canvas = createCanvas(700, 410);
    canvas.position(680, 170);

    poseNet = ml5.poseNet(video, modalLoaded);
    poseNet.on('pose', gotPoses);
}

function modalLoaded() {
    console.log('PoseNet Is Now Initialised!!');
}

function draw() {
    background("#3792cb")
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
    }
}