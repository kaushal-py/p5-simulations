var center_x = 250;
var center_y = 250;
var radius = 200;

var mx = 250;
var my = 250;

var c_angle = 0;
var cx = center_x + radius*Math.cos(c_angle);
var cy = center_y + radius*Math.sin(c_angle);

var b1;
var b2;
var b3;

var mode = 2;

// var tracer = [[mx, my]];

function setup(){
    createCanvas(600, 500);
    frameRate(1);

    b1 = createButton('Keyboard movement');
    b1.position(500, 30);
    b1.mouseClicked(function(){changeMode(1)});

    b2 = createButton('Move away');
    b2.position(500, 60);
    b2.mouseClicked(function(){changeMode(2)});

    b3 = createButton('TODO');
    b3.position(500, 90);
    b3.mouseClicked(function(){changeMode(3)});
}

function draw(){

    background(255);
    fill(0,0);
    circle(center_x, center_y, 2*radius);


    // for(var i=0; i<tracer.length; i++){
    //     point(tracer[i][0], tracer[i][1]);
    // }
    // if(tracer.length)

    // console.log(tracer);

    drawCat(Math.round(cx), Math.round(cy));
    drawMouse(mx, my);
    tracer.push([mx,my]);

    switch (mode) {
        case 1:
            moveMouse1();
            break;
        case 2:
            moveMouse2();
            break;
    
        default:
            moveMouse2();
            break;
    }
    // moveMouse1();
}

function drawMouse(x, y){
    fill('brown');
    circle(x, y, 10);
}

function drawCat(x, y){
    fill('gray');
    circle(x, y, 30);
}


function moveMouse1(){
    if (keyIsDown(LEFT_ARROW)) {
        mx -= 1;
        updateCat();
    }
    
    if (keyIsDown(RIGHT_ARROW)) {
        mx += 1;
        updateCat();        
    }

    if (keyIsDown(UP_ARROW)) {
        my -= 1;
        updateCat();
        // moveCat(-4);
    }

    if (keyIsDown(DOWN_ARROW)) {
        my += 1;
        updateCat();
        // moveCat(4);
    }
    
}

function moveMouse2(){
    var angle = Math.atan2((my-cy), (mx-cx));
    // console.log(angle*180/Math.PI);
    mx = mx + Math.cos(angle);
    my = my + Math.sin(angle);
    updateCat();
}

function moveCat(l){
    c_angle = c_angle + (l/radius);
    cx = center_x + radius*Math.cos(c_angle);
    cy = center_y + radius*Math.sin(c_angle);
}

function updateCat(){

    old_dist = Math.pow(cx-mx,2) + Math.pow(cy-my, 2);
    moveCat(4);
    pos_dist = Math.pow(cx-mx,2) + Math.pow(cy-my, 2);
    moveCat(-8);
    neg_dist = Math.pow(cx-mx,2) + Math.pow(cy-my, 2);

    if (pos_dist - old_dist < neg_dist - old_dist){
        moveCat(8);
    }
}

function changeMode(input_mode){
    mode = input_mode;
}