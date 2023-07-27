// 
const inquirer = require ('inquirer');
const fs = require('fs');
const { Triangle, Square, Circle} = require('./lib/shapes.js')
const SVG = require('./svg.js');


class CLI {
    constructor() {

    }

    questions() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    message: 'What text do you want to display in the logo? (Enter up to  3 characters)',
                    name: 'text',
                },
                {
                    type: 'input',
                    message: 'What color do you want for the text in the logo? (Enter color keyword or a hexadecimal number)',
                    name: 'text-color',
                },
                {
                    type: 'list',
                    message: 'Which shape would you prefer for the logo?',
                    name: 'shape',
                    choices: ['Triangle', 'Square', 'Circle']
                },
                {
                    type: 'input',
                    message: 'What color do you want for the shape? (Enter color keyword or a hexadecimal number)',
                    name: 'shape-color',
                },
            ])
            .then((response) => {
                generateSVG()

                if (response.text.length > 3) {
                    console.log('Your text cannot be more than 3 characters.');
                    questions();
                } else {
                    writeToFile('logo.svg', svgString)
                }
            })
        }
    }
    
let svgString = "";

function generateSVG(response) {

    let shape_option;
    if (response.shape === 'Triangle') {
        shape_option = new Triangle();
    } else if (response.shape === 'Square') {
        shape_option = new Square()
    } else if (response.shape === 'Circle') {
        shape_option = new Circle()
    } else {
        console.log("Invalid shape!")
    }

    shape_option.setColor(response.shape-color);


    const svg = new SVG.render()
    svg.setTextString(response.text, response.text-color);
    svg.setShapeOption(shape_option)
    svgString = svg.render()
}

function writeToFile(filename, data) {
    fs.writeFile(filename, data, (err) =>
    err ? console.log(err) : console.log('Logo created!!'))
}

