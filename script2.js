//https://www.youtube.com/watch?v=aO1VcJ5WpKI&ab_channel=Frankslaboratory 29.00 minutes

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
ctx.strokeStyle = "#black";
ctx.lineWidth = 3;
ctx.shadowOffsetX = 10;
ctx.shadowOffsetY = 10;
ctx.shadowBlur = 10;
ctx.shadowColor = "black";
let hue = 0;
let drawing = false;
// ctx.globalCompositeOperation = "destination-over"; // drawing backward or you can put on  "lighter"


function drawShape(x, y, radius, inset, n) {
    // ctx.fillStyle = "red"; 
    ctx.beginPath();//putting pancil on canvas
    ctx.save(); // to save all the point of drawing (ctx.moveTo and ctx.lineTo) 
    ctx.translate(x, y);// moving/add the starting points of X and y coordinations
    ctx.moveTo(0, 0 - radius);//x and y coordinates starting point

    for (let i = 0; i < n; i++) {
        ctx.rotate(Math.PI / n);// 1/3 of a half circle/180 degrees
        ctx.lineTo(0, 0 - (radius * inset)); //to set ending coordinate of the line / the next point of the shape
        ctx.rotate(Math.PI / n);// 1/3 of a half circle/180 degrees
        ctx.lineTo(0, 0 - radius);
    }
    
    ctx.restore();// to reset to the global setting after changes
    ctx.closePath();//connect the begin and the end points. if it commented out. the line will not be closed
    ctx.stroke();
    ctx.fill();
}

const radius = 40;
const inset = 0.4;
const n = 5;
drawShape(80, 80, radius * .95, 1, 5);
drawShape(120, 120, radius, inset, n);

let angle = 0;
window.addEventListener("mousemove", function(e) { // Why (e)?
    if (drawing) {
        ctx.save();
        ctx.translate(e.x, e.y);

        ctx.rotate(angle * 3);
        ctx.fillStyle = "red";
        drawShape(0, 0, radius * 0.95, 1, 5);
      
        ctx.rotate(-angle * 7);// (- , oposite direction) speed-rotate = rotate to oposite derection
        ctx.fillStyle = "blue";
        drawShape(radius, radius, radius * 0.35, 1, 7);//above 0, the rotation is outside the (innitial) shape

        ctx.rotate(angle * 4);
        ctx.fillStyle = "red";
        drawShape(0, 0, radius * 0.95, 1, 5);
        
        angle += 0.05;
        ctx.restore();
    }
});

window.addEventListener("mousedown", function() {
    drawing = true;
});

window.addEventListener("mouseup", function() {
    drawing = false;
});