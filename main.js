function setup(){
    canvas=createCanvas(300,300)
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotposes);
}

function modelLoaded(){
    console.log("model has loaded")
}

nosex=0
nosey=0

function gotposes(results){
    if(results.length > 0)
    {
    console.log(results);
    nosex=results[0].pose.nose.x;
    nosey=results[0].pose.nose.y;
    console.log("nose x= " + results[0].pose.nose.x);
    console.log("nose y= " + results[0].pose.nose.y);
    }
}

function draw(){
    image(video,0,0,300,300);
    //fill(255,0,0);
    //stroke(255,0,0);
    //circle(nosex,nosey,20)
    image(clownnose,nosex,nosey,30,30)
}

function take_snapshot(){
    save("srishty.png");
}

function preload(){
    clownnose=loadImage("https://i.postimg.cc/fygS9HPd/images-2.png");
}
