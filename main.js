function setup(){
canvas= createCanvas(450, 450);
canvas.position(900, 130)

video = createCapture(VIDEO);
video.size(550, 500);
video.position(200,130);
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);

}

function modelLoaded(){
console.log('posenet is initialized');
}
function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
    }
}