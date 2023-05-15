// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (data.license === "MIT License") {
    fs.appendFile(`${data.title}.md`, `${"https://img.shields.io/badge/License-MIT-yellow.svg"}`, (err)=> 
    err ? console.log(err) : console.log("Badge attached"))
  } else if (data.license === "ISC License") {
    fs.appendFile(`${data.title}.md`, `${"https://img.shields.io/badge/License-ISC-blue.svg"}`, (err)=> 
    err ? console.log(err) : console.log("Badge attached"))
  } else if (data.license === "IBM Public License") {
    fs.appendFile(`${data.title}.md`, `${"https://img.shields.io/badge/License-IPL_1.0-blue.svg"}`, (err)=> 
    err ? console.log(err) : console.log("Badge attached"))
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
