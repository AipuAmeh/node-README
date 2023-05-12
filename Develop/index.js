// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
    "What is the title of this project?",
    "How would you describe this project?",
    "What is required to install your project?",
    "How is your project used?",
    "Who did you collaborate with?",
    "What license did you use?",
    "Any cool features?",

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    for (const input of questions) {
        inquirer
        .prompt([
            {
                type: "input",
                message: questions[0],
                name: "answers",
            }
        ])
        .then((data) => {
            console.log(data);
        })
    }   
}

writeToFile();

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
