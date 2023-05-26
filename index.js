const Circle = require('./lib/Circle');
const Triangle = require('./lib/Triangle');
const Square = require('./lib/Square');
const Shape = require('./lib/Shape');
const inquirer = require('inquirer');
const fs = require('fs');


const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Please enter 3 characters:',
    },
    {
        type: 'input',
        name: 'text_color',
        message: 'What color do you want the text to be?',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What shape do you want to use?',
        choices: [
            'circle',
            'triangle',
            'square',
        ]
    },
    {
        type: 'input',
        name: 'shape_color',
        message: 'what color do you want the shape to be?',
    },

]

function init() {
    inquirer.prompt(questions).then(function(answers) {
        // console.log(answers);
        if (answers.shape == 'circle') {
            const circle = new Circle(answers.shape_color)
            createSVG(circle.render())
            writeToFile('logo.svg', createSVG(circle.render()))
        } else if (answers.shape == 'triangle') {
            const triangle = new Triangle(answers.shape_color)
            createSVG(triangle.render())
            writeToFile('logo.svg', createSVG(triangle.render()))
        } else if (answers.shape == 'square') {
            const square = new Square(answers.shape_color)
            createSVG(square.render())
            writeToFile('logo.svg', createSVG(square.render()))
        } else {
            console.log("Invalid shape!");
        } 
        answers.shape.setColor(shape_color);

    });
}

function createSVG(text, text_color, shape) {
    return `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shape}
    <text x="150" y="125" font-size-"60" fill="${data.text_color}>${data.text}</text></

    </svg>
    `;

}


function writeToFile(fileName, data) {
    console.log("writing")
    fs.writeFileSync(fileName, data)
};

init();