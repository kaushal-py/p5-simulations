var center_x = 250;
var center_y = 250;
var radius = 200;

var mx = 250;
var my = 250;

var c_angle = 0;
var cx = center_x + radius*Math.cos(c_angle);
var cy = center_y + radius*Math.sin(c_angle);

function setup(){
    createCanvas(500, 500);
    frameRate(60);
}

function draw(){

    background(255);
    fill(0,0);
    circle(center_x, center_y, 2*radius);

    drawMouse(mx, my);
    drawCat(Math.round(cx), Math.round(cy));
    moveMouse();
}

function drawMouse(x, y){
    fill('brown');
    circle(x, y, 10);
}

function drawCat(x, y){
    fill('gray');
    circle(x, y, 30);
}


function moveMouse(){
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