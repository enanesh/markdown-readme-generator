// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function print() {
  console.log("Hola");
}

function renderLicenseBadge(license) {
  let badge = " ";
  if (license === "Apache 2.0 License") {
    badge =
      "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
  } else if (license === "Boost Software License 1.0") {
    badge =
      "![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)";
  } else if (license === "MIT") {
    badge =
      "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
  } else if (license === "Mozilla Public License 2.0") {
    badge =
      "![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)"; 
    
  } else {
    badge = " ";
  }
  return badge;
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = " ";
  if (license === "Apache 2.0 License") {
    link = "https://opensource.org/licenses/Apache-2.0";
  } else if (license === "Boost Software License 1.0") {
    link = "https://www.boost.org/LICENSE_1_0.txt";
  } else if (license === "MIT") {
    link = "https://img.shields.io/badge/License-MIT-yellow.svg";
  } else if (license === "Mozilla Public License 2.0") {
    link = "https://opensource.org/licenses/MPL-2.0";

  } else {
    link = " ";
  }
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = " ";
  if (licenseSection === "N/A") {
    license = " "
  } else {
    licenseSection = `License for this project: ${license}`
  }
  return licenseSection

}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `### **${data.title}**
  _________________


## ${renderLicenseBadge(data.license)}



## **Description**
_________________

${data.description}


## **Table of Contents**
________________

 - [Installation](#installation)  
 - [Usage](#usage) 
 - [Credits](#credits)  
 - [License](#license)
 - [Contributing](#contributing)  
 - [Test](#test)
 - [Questions](#questions)      



## **Installation**
_________________
${data.installation}



## **Usage**
_________________

${data.usage}



## **Credits**
_________________

${data.credits}


## **License**
_________________

${renderLicenseSection(data.license)}  ${renderLicenseLink(data.license)}


## **Contributing**
_________________

 ${data.contributions}


## **Tests**
_________________

To test this application run the following commands in your terminal:
 ${data.test}


## **Questions**
_________________

 If you have any questions, you may be able to contact me at either
 GitHub: https://github.com/${data.gitHub}
 or
 Email: ${data.email}

  
  `;
}

module.exports = { generateMarkdown };
