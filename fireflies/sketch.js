var fireflies = [];
var count = 30;
var screenSize = 700;
var timePeriod = 1;


function setup(){
    createCanvas(screenSize, screenSize);
    for(var i=0; i<count; i++){
        var clock = floor(random(0, 255*timePeriod));
        // console.log(clock);
        var x = random(0, screenSize);
        var y = random(0, screenSize);
        fireflies.push([x, y, clock]);
    }
    frameRate(60);
}

function draw(){

    background(0);

    for(var i=0; i<fireflies.length; i++){
        var lumens = 255-abs((fireflies[i][2] - 255*timePeriod/2)*2/timePeriod);
        // console.log("lumens="+lumens);
        fill(lumens);
        ellipse(fireflies[i][0], fireflies[i][1], 10);
        updateTimer(i);
    }

}

function updateTimer(i){

    if(fireflies[i][2] >= 255*timePeriod){
        fireflies[i][2] = 0;
    }
    else{
        fireflies[i][2]+=3;
    }
}