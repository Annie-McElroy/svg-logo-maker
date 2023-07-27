// 
const inquirer = require ('inquirer');
const fs = require('fs');
const { Triangle, Square, Circle} = require('./lib/shapes.js')

class CLI {
    constructor() {

    }

    generateSVG() { 

    }

    run() {
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
                if (response.text.length > 3) {
                    console.log('Your text cannot be more than 3 characters.');
                    run();
                } else {
                    writeToFile('logo.svg', response)
                }
            })
    }
}
function writeToFile(response) {
    
    }

