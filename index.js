// require js files, inquirer and fs here:
const Circle = require('./lib/Circle');
const Triangle = require('./lib/Triangle');
const Square = require('./lib/Square');
const Shape = require('./lib/Shape');
const inquirer = require('inquirer');
const fs = require('fs');

// array of SVG logo questions using inquirer here:
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Please enter 3 characters:',
        validate: function (text) {
            if (2 < text.length && text.length < 4) {
                return true
            } else {
                console.log(' Wrong input length')
                return false
            }}
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

// function init to prompt questions and run answers for shape chosen from user
function init() {
    inquirer.prompt(questions)
    .then(function(answers) {
        // const newText = answers.text.toUpperCase();
        if (answers.shape === 'circle') {
            const circle = new Circle(answers.shape_color)
            writeToFile('logo.svg', createSVG(answers.text.toUpperCase(), answers.text_color,circle.render()))
        } else if (answers.shape === 'triangle') {
            const triangle = new Triangle(answers.shape_color)
            writeToFile('logo.svg', createSVG(answers.text.toUpperCase(), answers.text_color,triangle.render()))
        } else if (answers.shape === 'square') {
            const square = new Square(answers.shape_color)
            writeToFile('logo.svg', createSVG(answers.text.toUpperCase(), answers.text_color, square.render()))
        } else {
            console.log("Invalid shape!");
        } 
        console.log('Generated SVG logo file!!');
    });
}

// function to create the SVG file with SVG code template:
function createSVG(text, text_color, shape) {
    return `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shape}
    <text x="150" y="125" font-size="40" text-anchor="middle" fill="${text_color}">${text}</text>
    </svg>
    `;
}

//function to write file;
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data)
};

//initiate the init function here:
init();
