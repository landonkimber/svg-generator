const fs = require('fs'); // Node.js file
const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./lib/shapes.js');


// CREATE SHAPE MY SHAPE THEN USE SHAPE RENDER TO GENERATE SVG CODE

const questions = [
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape to generate:',
        choices: [
            'Circle',
            'Triangle',
            'Square',
        ],
    }, {
        type: 'input',
        name: 'fillColor',
        message: 'Please type a color keyword or a hexidecimal color value for the shapes color:'
    }, {
        type: 'input',
        name: 'text',
        message: 'Please type up to three characters to be placed in the shape:',
        validate: function (input) {
            return input.length <= 3 || 'Please enter up to three characters.';
        }
    }, {
        type: 'input',
        name: 'textColor',
        message: 'Please type a color keyword or a hexidecimal color value for the text color:',
    }
]

inquirer.prompt(questions)
    .then((answers) => {
        const shapeInfo = [answers.fillColor, answers.textColor, answers.text];
        let myShape;
        let svgContent;

        switch (answers.shape) {
            case 'Circle': myShape = new Circle(...shapeInfo); break;
            case 'Triangle': myShape = new Triangle(...shapeInfo); break;
            case 'Square': myShape = new Square(...shapeInfo); break;
            default:
                console.log('Invalid shape');
                return;
        }
        svgContent = myShape.render();
        
        //WRITE FILE TO logo.svg
        fs.writeFileSync('logo.svg', svgContent, (err) => {
            if (err) {
                console.error('ERROR while writing SVG file: ', err);
            }
        });
        console.log('Generated logo.svg');
    }
    ).catch((error) =>
    console.error(error)
);
