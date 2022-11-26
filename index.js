// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown =require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = inquirer.prompt([
    {
        type: "input",
        message: "Whats your proyect title?",
        name: "title",
        validate: (value) => { if (value) { return true } else { return "Input a value to continue" } }
        },
        {
            type: "input",
            message:"Provide a short description explaining the what, why, and how of your project:",
            name: "description",
            validate: (value) => { if (value) { return true } else { return "Input a value to continue" } }

        },
        {
            type: "input",
            message:"What are the steps required to install your project?",
            name: "installation",
            validate: (value) => { if (value) { return true } else { return "Input a value to continue" } }

        },
        {
            type: "input",
            message: "Provide instructions and examples for use. Include screenshots as needed.",
            name: "usage",
            validate: (value) => { if (value) { return true } else { return "Input a value to continue" } }

        },
        {
            type: "input",
            message: "List your collaborators, if any, with links to their GitHub profiles.",
            name: "credits",
            validate: (value) => { if (value) { return true } else { return "Input a value to continue" } }

        },
        {
            type: "list",
            message: "License:",
            name: "license",
            choices: ['Apache 2.0 License','Boost Software License 1.0'],
            validate: (value) => { if (value) { return true } else { return "Input a value to continue" } }

    },
    {
        type: "input",
        message: "If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so",
        name:"contributions",
        validate: (value) => { if (value) { return true } else { return "Input a value to continue" } }

    },
    {
        type: "input",
        message: "Go the extra mile and write tests for your application. Then provide examples on how to run them here. ",
        name: "test",
        validate: (value) => { if (value) { return true } else { return "Input a value to continue" } }

    },
    {
        type: "input",
        message: "Please, provide your GitHub username(e.g JohnYoung) : ",
        name: "gitHub",
        validate: (value) => { if (value) { return true } else { return "Input a value to continue" } }

    },
    
    {
        type: "input",
        message: "Please, provide your email(e.g student@gmail.com)",
        name: "email",
        validate: (value) => { if (value) { return true } else { return "Input a value to continue" } }

    },
          
         
        
      
 ])
//     .then((answers) => {
//         title,
            

       

//         // TODO: Create a function to write README file
//         function writeToFile(fileName, data) {

//             fs.writeFile(`./${fileName.toLowerCase().split().joint(" ")}.md`, data, (err) => {
//                 if (err) {
//                     console.log(err)
//                 }
//                 console.log("Your README has been generated");
//             })
//         };

//         // TODO: Create a function to initialize app
        
            
        
//     });


// // function init() {


//  }
// Function call to initialize app
// init();


