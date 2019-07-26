var elevator = 0;
var increasing = true;

// p5 functions
function setup(){
    createCanvas(700, 700);
    frameRate(30);
}

function draw(){

    background(255);

    if (increasing && elevator <= 90){
        elevator+= 0.5;
    }
    else if (elevator > 90){
        increasing = false;
    }
    if (!increasing && elevator >= 0){
        elevator-= 0.5;
    }
    else if (elevator < 0){
        increasing = true;
    }
    drawTree(350, 600, -90, 9, elevator);
}

//user-functions
function drawTree(x1, y1, angle, depth, width_angle){

    if (depth > 0){

        var x2 = x1 + Math.round(Math.cos(angle * Math.PI / 180) * depth * 10);
        var y2 = y1 + Math.round(Math.sin(angle * Math.PI / 180) * depth * 10);

        // console.log(x1 + " " + x2 + " " + y1 + " " + y2 + " " + " depth" + depth);

        line(x1, y1, x2, y2);

        drawTree(x2, y2, angle + width_angle, depth - 1, width_angle);
        drawTree(x2, y2, angle - width_angle, depth - 1, width_angle);
    }
}