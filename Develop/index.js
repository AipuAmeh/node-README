const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

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
        choices: ["MIT License", "ISC License", "IBM Public License", "None"],
    },
    {
        name: "features",
        message: "Did you add any features?",
    },
    {
        name: "tests",
        message: "Did you do any tests?"
    },
    {
        name: "github",
        message: "Please enter your GitHub name.",
    },
    {
        name: "email",
        message: "Please enter your email."
    }
];

function writeToFile(data) {
    const prompt = inquirer.createPromptModule();
    prompt(questions).then((data) => {
        console.log(data)
        fs.writeFileSync(`${data.title}.md`, generateMarkdown(data), (err) =>
        err ? console.log(err) : console.log('Success!') )
    }
    );
}

writeToFile();

