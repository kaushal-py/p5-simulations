let circleX = 0

function preload(){
    flappy = loadImage("flappy.png")
}

function setup(){
    createCanvas(640, 480);
}

function draw(){

    if (circleX < 640+50){
        circleX+=2;
    }
    else{
        circleX = -50;
    }

    background(255);
    line(10,30, 200, 30);
    ellipse(circleX, 200, 50);

    image(flappy, 100, 50, 70, 70);
}