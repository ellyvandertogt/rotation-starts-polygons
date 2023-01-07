//https://www.youtube.com/watch?v=aO1VcJ5WpKI&ab_channel=Frankslaboratory

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
ctx.fillStyle = "red";
ctx.lineWidth = 10;

function drawShape(radius, inset, n) {
    ctx.beginPath();//putting pancil on canvas
    ctx.save(); // to save all the point of drawing (ctx.moveTo and ctx.lineTo) 
    ctx.translate(canvas.width/2, canvas.height/2);// moving/add the starting points of X and y coordinations
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
drawShape(150, 0.5, 50);