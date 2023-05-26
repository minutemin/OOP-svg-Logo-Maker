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
        if (answers.shape === 'circle') {
            const circle = new Circle(answers.shape_color)
            // createSVG(circle.render())
            writeToFile('logo.svg', createSVG(answers.text, answers.text_color,circle.render()))
        } else if (answers.shape === 'triangle') {
            const triangle = new Triangle(answers.shape_color)
            // createSVG(triangle.render())
            writeToFile('logo.svg', createSVG(answers.text, answers.text_color,triangle.render()))
        } else if (answers.shape === 'square') {
            const square = new Square(answers.shape_color)
            // createSVG(answers.text, answers.text_color, square.render())
            writeToFile('logo.svg', createSVG(answers.text, answers.text_color, square.render()))
        } else {
            console.log("Invalid shape!");
        } 
    });
}

function createSVG(text, text_color, shape) {
    return `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shape}
    <text x="150" y="125" font-size="40" text-anchor="middle" fill="${text_color}">${text}</text>
    </svg>
    `;

}


function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data)
};

init();


// <svg width="200" height="100">
//   <rect x="0" y="0" width="200" height="100" stroke="red" stroke-width="3px" fill="white"/>
//   <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">TEXT</text>    
// </svg>

// <g>
// <rect x={x} y={y} width={width} height={height} />
// <text
//     x={x + width / 2}
//     y={y + height / 2}
//     dominant-baseline="middle"
//     text-anchor="middle"
// >
//     {label}
// </text>
// </g>