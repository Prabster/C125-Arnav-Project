noseX = -10;
noseY = -10;

distance = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(200, 200);

    canvas = createCanvas(700, 550);
    canvas.position(1000, 200);
    canvas.background("white");

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotResult);
}

function draw() {
    background("#9232d1");
    textSize(distance);
    fill("#3e8727");
    text("Arnav", noseX, noseY);
}

function modelLoaded() {
    console.log("Your Model Is Loaded");
}

function gotResult(results) {
    if (results.length > 0) {
        console.log(results);

        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;

        distance = leftWristX - rightWristX;
        distance = Math.floor(distance);
        console.log(distance);
    }
}