
song1=""
song2=""

function setup(){
    
     canvas = createCanvas(550, 550);
     canvas.centre;

     video = createCapture(VIDEO);
 video.hide();

 poseNet = ml5.poseNet(video, modelLoaded);
 poseNet.on('pose', gotPoses);
}



function modelLoaded(){
     console.log('poseNet Is Initialized');
}

function preload(){
     song1 = loadSound("BTS-Mikrokosmos-(HiphopKit.com).mp3");
     song2 = loadSound("Life-Goes-On---BTS-320(PagalWorld).mp3");
}

function draw(){
     image(video, 0, 0, 600, 500);
}

leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;


function gotPoses()
{
     if(results.length > 0)
     {
          console.log(results);
          leftWristX = result[0].pose.leftWrist.x;
          leftWristY = result[0].pose.leftWrist.y;
          console.log("leftWristX =" + leftWristY +"leftWristY =" +leftWristY )

          rightWristX = result[0].pose.rightWrist.x;
          rightWristY = result[0].pose.rightWrist.y;
          console.log("rightWristX =" + rightWristY +"rightWristY =" +rightWristY )
     }
}
