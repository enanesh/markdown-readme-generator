// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");


// TODO: Create an array of questions for user input
 const questions = inquirer.prompt([
        {
            type: "input",
            message: "Whats your proyect title?",
            name: "title",
        },
        {
            type: "input",
            message: "Description",
            name: "description",

        },
        {
            type: "input",
            message: "Table of contents (optional):",
            name: "table of contents",

        },
        {
            type: "input",
            message: "Installation:",
            name: "installation",

        },
        {
            type: "input",
            message: "Usage:",
            name: "usage",

        },
        {
            type: "input",
            message: "Credits:",
            name: "credits",

        },
        {
            type: "list",
            message: "License:",
            name: "license",
            choices: ['gato', 'perro'],

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


