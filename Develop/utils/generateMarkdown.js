
function renderLicenseBadge(license) {
  if (license === "MIT License") {
   return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)"
  } 
  if (license === "ISC License") {
   return "![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)"
  } 
  if (license === "IBM Public License") {
    return "![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)"
  } 
  return "";
  }

function renderLicenseLink(license) {
  if (license === "MIT License") {
    return "https://opensource.org/licenses/MIT";
  }
  if (license === "ISC License") {
    return "https://opensource.org/licenses/ISC";
  }
  if (license === "IBM Public License") {
    return "https://opensource.org/licenses/IPL-1.0";
  }
    return "";
  }

function renderLicenseSection(license) {
  if(license == "None"){
    return ""
  }
  return `
  ${renderLicenseLink(license)}`
  }

function generateMarkdown(data) {
  console.log("Data", data);
  return `# ${data.title}
${renderLicenseBadge(data.license)}

  ## Description 
${data.description}

  ## Table of Contents
[Installation](#installation)

[Usage](#usage)

[Credits](#credits)

[License](#license)

[Features](#features)

[Tests](#tests)

[Questions](#questions)
                
  ## Installation 
${data.installation}
                
  ## Usage 
${data.usage}
                
  ## Credits 
${data.collab}
               
  ## License 
${data.license}
${renderLicenseSection(data.license)}

  ## Features 
${data.features}
    
  ## Tests
${data.tests}

  ## Questions? 
[Visit my Github!](https://github.com/${data.github})  

If you have any further questions, please email me at: ${data.email}
`;
}

module.exports = generateMarkdown;

