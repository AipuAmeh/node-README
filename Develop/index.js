// TODO: Include packages needed for this application
// console.log(process.argv);
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
    {
        name: "title",
        message: "What is the title of this project?",
    },
    {
        name: "description", 
        message:   "How would you describe this project?",
    },
    {
        name: "installation",
        message: "What is required to install your project?",
    },
    {
        name: "usage",
        message:  "How is your project used?",
    },
    {
        name: "collab",
        message: "Who did you collaborate with?",
    },
    {
        name: "license",
        type: "list",
        message:  "What license(s) did you use?",
        choices: ["MIT License", "ISC License", "IBM Public License"],
    },
    {
        name: "features",
        message: "Did you add any features?",
    }

];

// TODO: Create a function to write README file
function writeToFile(data) {
    const prompt = inquirer.createPromptModule();
    prompt(questions).then((data) => {
        console.log(data)
        // const fileName = process.argv[2]
        const readMe = 
`# ${data.title}
                       
## Description 
    ${data.description}
                
## Installation 
    ${data.installation}
                
## Usage 
    ${data.usage}
                
## Collaboration 
    ${data.collab}
                
## License 
    ${data.license}
                
## Features 
    ${data.features}`

        fs.writeFileSync(`${data.title}.md`, readMe, (err) =>
        err ? console.log(err) : console.log('Success!') )
    }
    );
}

writeToFile();

