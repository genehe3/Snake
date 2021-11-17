let theBoard = document.querySelector('canvas'); //setting the game board as a variable
let ctx = theBoard.getContext('2d'); //context is the "pen" that draws on the canvas

theBoard.height = window.innerHeight; //full height
theBoard.width = window.innerWidth; //full width

// // ctx.moveTo(x, y), changes starting point
// // ctx.arcTo(x, y, x2, y2, radiusInRadians), start and end points with the angle between them(use 2 * Math.PI)
// // ctx.lineTo(x, y), draws a line to the coordinates put in
// // ctx.bezierCurveTo(), 
// // ctx.quadraticCurveTo(), 
// // ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise?), arc centered at x, y
// // requestAnimationFrame(callback), tells the browser to call the function within the parameter again
// // ctx.clearRect(x, y, width, height), essentially clears all drawings within defined rectangle

// // const bodyPart = (a, b) => {
// //     ctx.strokeStyle = '#ff0000';
// //     ctx.beginPath();
// //     ctx.rect(a, b, 25, 25);
// //     ctx.stroke();
// // }; //drawing test

// // bodyPart(24, 30)

// let x = theBoard.width/2 //sets starting point center
// let y = theBoard.height/2 //sets starting point to center
// let dx = 6 //the horizontal "velocity"; 5 pixels per 
// let dy = 0 //the vertical "velocity"; starts at 0
// //need to animate a rect going right and bouncing off
// const animate = () => {
//    ctx.strokeStyle = '#ff0000'; 
//    ctx.lineWidth = 7;
//    ctx.clearRect(0, 0, theBoard.width, theBoard.height); // clears before drawing, hitting the whole screen
//    ctx.beginPath();//initiate the first square
//    ctx.rect(x, y, 30, 30);//centers square
//    ctx.stroke();
//    x += dx; // increase the x value by 5, moving it right one pixel
//    y += dy; // increase y value 
//    if (x + 15 >= theBoard.width && dx === 6) {
//        //detects when rectangle hits the RIGHT edge, x-position(center of square) plus half the width (15) 
//        x = 0;
//    }; //when the square hits the edge, it jumps to the other side
//    //ctx.clearRect(), doesn't work as it clears right after drawing, effectively doing nothing

//    if (y + 15 <= 0 && dy === -6) {
//        //detects when rectangle hits the TOP 
//        y = theBoard.height;
//    };

   
//    if (y + 15 >= theBoard.height && dy === 6) {
//     //detects when rectangle hits the BOTTOM
//     y = 0;
// };


// if (x + 15 <= 0 && dx === -6) {
//     //detects when rectangle hits the LEFT
//     x = theBoard.width;
// };

   
//    requestAnimationFrame(animate); //calls animate function again, works but need to clear previous rectangles before redrawing (done)
// };

// animate();

// //add arrow key press detection
// document.addEventListener("keydown", (direct) => {
//     //"listens" for a key press and passes the key as a parameter into the following function
//     console.log(direct.key) // detects the code for key which was pressed; returns "ArrowRight", "ArrowLeft", "ArrowUp", and "ArrowDown"
//     if (direct.key === "ArrowUp" || direct.key === "w") {
//         dx = 0;
//         dy = -6;
//     };

//     if (direct.key === "ArrowDown" || direct.key === "s") {
//         dx = 0;
//         dy = 6;
//     };

//     if (direct.key === "ArrowLeft" || direct.key === "a") {
//         dx = -6;
//         dy = 0;
//     };

//     if (direct.key === "ArrowRight" || direct.key === "d") {
//         dx = 6;
//         dy = 0;
//     };

//     if (direct.key === " ") {
//         dx = 0;
//         dy = 0;
//     };
// });

//every line of code before this is commented out, except for sizing of canvas element
//revision of this 'snake' project began today, November 15, 2021
const drawCircle = (x, y) => {
    //function to draw a circle with two arguments for position
    ctx.clearRect(0, 0, theBoard.width, theBoard.height);
    //clears board before drawing circle, allowing for 'movement'
    ctx.strokeStyle = 'white';
    ctx.beginPath();
    ctx.arc(x, y, 15, 0, Math.PI * 2, false);
    ctx.stroke();
}
const mouse = {
    //an object for tracking where the x and y coordinates of the mouse is
    x:null,
    y:null,
}

theBoard.addEventListener('mousemove', (event) => {
    //detects mouse movement and passes the properties of the 'mousemove' as an argument to the following function
    //console.log(event); //check for what is actually passed; the 'x' and 'y' property is what I need
    mouse.x = event.x;
    mouse.y = event.y;
    drawCircle(mouse.x, mouse.y); //the circle follows the mouse. Should hide cursor when a click happens
})

cursorShown = false;

theBoard.addEventListener('mousedown', (event) => {
    //need a css ruling for hiding mouse in the canvas, clicking changes the variable
    if (cursorShown === false) {
        document.querySelector(':root').style.setProperty('--hideCursor', 'show'); //shows cursor
        cursorShown = true;
    } else {
        document.querySelector(':root').style.setProperty('--hideCursor', 'none'); //hides cursor 
        cursorShown = false;
    }
}) //working








