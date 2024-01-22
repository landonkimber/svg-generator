const fs = require('fs'); // Node.js file
const {Circle, Triangle, Square} = require('./lib/shapes.js');


// CREATE SHAPE MY SHAPE THEN USE SHAPE RENDER TO GENERATE SVG CODE
const myShape = new Triangle ('orange', 'yellow', 'ORA');
const svgContent = myShape.render();


//WRITE FILE TO logo.svg
fs.writeFileSync('logo.svg', svgContent);

console.log('SVG file created successfully');