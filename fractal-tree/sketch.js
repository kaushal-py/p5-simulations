// p5 functions
function setup(){
    createCanvas(700, 700);
    drawTree(350, 680, -90, 9);
    // line(350, 680, )
}

function draw(){
}

//user-functions
function drawTree(x1, y1, angle, depth){

    if (depth > 0){

        var x2 = x1 + Math.round(Math.cos(angle * Math.PI / 180) * depth * 10);
        var y2 = y1 + Math.round(Math.sin(angle * Math.PI / 180) * depth * 10);

        // console.log(x1 + " " + x2 + " " + y1 + " " + y2 + " " + " depth" + depth);

        line(x1, y1, x2, y2);

        drawTree(x2, y2, angle + 20, depth - 1);
        drawTree(x2, y2, angle - 20, depth - 1);
    }
}