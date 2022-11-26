
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  let badge = " ";
  if (license === "Apache 2.0 License") {
    badge = "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]"
  } else if (license === "Boost Software License 1.0") {
    badge = "![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)"
  } else {
    badge = " "
  }
  return badge;
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }




// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}



##Description

#${data.description}


##Table of Contents

### *[Installation](#installation)
### *[Usage](#usage)
### *[Credits](#credits)
### *[License](#license)  



##Installation
###You must follow the steps for this app to function:
### ${data.installation}



##Usage

###${data.usage}



##Credits

###${data.credits}


##License

##${data.license}


##Contributing

###${data.contributions}

##Tests

### To test this application run the following commands in your terminal:
### ${data.test}



##Questions
### If you have any questions, you may be able to contact me at either
### GitHub: https://github.com/${data.gitHub}
### or
### Email: ${data.email}

  
  `;
}



module.exports = generateMarkdown;
