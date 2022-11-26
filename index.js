// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");


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
            choices: ['Academic Free License v3.0', 'perro'],
            validate: (value) => { if (value) { return true } else { return "Input a value to continue" } }

         },
         {
        type: "input",
        message: "List your collaborators, if any, with links to their GitHub profiles.",
        name: "questions",
        validate: (value) => { if (value) { return true } else { return "Input a value to continue" } }

         },
          
        
        
        
        
      
 ])
    .then((answers) => {

        answers.confirm === answers.password
            ? console.log("Success!")
            : console.log("You forgot your password already?!");


        // TODO: Create a function to write README file
        function writeToFile(fileName, data) {

            fs.writeFile(`./${fileName.toLowerCase().split().joint(" ")}.md`, data, (err) => {
                if (err) {
                    console.log(err)
                }
                console.log("Your README has been generated");
            })
        };

        // TODO: Create a function to initialize app
        // function init() {
        //     inquirer.prompt(questions)
    });
// Function call to initialize app
// init();


