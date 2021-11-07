let theBoard = document.querySelector('canvas'); //setting the game board as a variable
let ctx = theBoard.getContext('2d'); //context is the "pen" that draws on the canvas

theBoard.height = window.innerHeight;
theBoard.width = window.innerWidth;



// ctx.moveTo(x, y), changes starting point
// ctx.arcTo(x, y, x2, y2, radiusInRadians), start and end points with the angle between them(use 2 * Math.PI)
// ctx.lineTo(x, y), draws a line to the coordinates put in
// ctx.bezierCurveTo(), 
// ctx.quadraticCurveTo(), 
// ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise?), arc centered at x, y
// requestAnimationFrame(callback), tells the browser to call the function within the parameter again
// ctx.clearRect(x, y, width, height), essentially clears all drawings within defined rectangle

// const bodyPart = (a, b) => {
//     ctx.strokeStyle = '#ff0000';
//     ctx.beginPath();
//     ctx.rect(a, b, 25, 25);
//     ctx.stroke();
// }; //drawing test

// bodyPart(24, 30)

let x = theBoard.width/2 //sets starting point center
let y = theBoard.height/2 //sets starting point to center
let dx = 6 //the horizontal "velocity"; 5 pixels per 
let dy = 0 //the vertical "velocity"; starts at 0
//need to animate a rect going right and bouncing off
const animate = () => {
   ctx.strokeStyle = '#ff0000'; 
   ctx.lineWidth = 7;
   ctx.clearRect(0, 0, theBoard.width, theBoard.height); // clears before drawing, hitting the whole screen
   ctx.beginPath();//initiate the first square
   ctx.rect(x, y, 30, 30);//centers square
   ctx.stroke();
   x += dx; // increase the x value by 5, moving it right one pixel
   y += dy; // increase y value 
   if (x + 12 >= theBoard.width && dx === 6) {
       //detects when rectangle hits the RIGHT edge, x-position(center of square) plus half the width (15) 
       x = 0;
   }; //when the square hits the edge, it jumps to the other side
   //ctx.clearRect(), doesn't work as it clears right after drawing, effectively doing nothing

   if (y + 12 <= 0 && dy === -6) {
       //detects when rectangle hits the TOP 
       y = theBoard.height;
   };

   
   if (y + 12 >= theBoard.height && dy === 6) {
    //detects when rectangle hits the BOTTOM
    y = 0;
};


if (x + 12 <= 0 && dx === -6) {
    //detects when rectangle hits the LEFT
    x = theBoard.width;
};

   
   requestAnimationFrame(animate); //calls animate function again, works but need to clear previous rectangles before redrawing (done)
};

animate();

//add arrow key press detection
document.addEventListener("keydown", (direct) => {
    //"listens" for a key press and passes the key as a parameter into the following function
    //console.log(direct.key) // detects the code for key which was pressed; returns "ArrowRight", "ArrowLeft", "ArrowUp", and "ArrowDown"
    if (direct.key === "ArrowUp") {
        dx = 0;
        dy = -6;
    };

    if (direct.key === "ArrowDown") {
        dx = 0;
        dy = 6;
    }

    if (direct.key === "ArrowLeft") {
        dx = -6;
        dy = 0;
    }

    if (direct.key === "ArrowRight") {
        dx = 6;
        dy = 0;
    }
})






