
difference=0;
rightWristX=0;
leftWristX=0;
function setup(){
video=createCapture(VIDEO); 
video.size(550,500);

canvas=createCanvas(550,550);
canvas.position(560,120);

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function draw(){
background('#ADD8E6');
document.getElementById("font_size").innerHTML="The size of the font will be="+ difference+"px";
fill('#87C1FF');
stroke('#AEC6CF');
font_size(leftWristX,rightWristY,difference);
}

function modelLoaded(){
    console.log('PoseNet is Initialized!');
}

function gotPoses(results){
    if(results.length>0); {
        console.log(results);
        leftWristX= results[0].pose.leftWrist.x;
        rightWristX= results[0].pose.rightWrist.x;
        difference=floor(leftWristX- rightWristX);
        console.log("leftWristX="+ leftWristX+ "rightWristX="+ rightWristX+ "difference="+ difference);
    }
}