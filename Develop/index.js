// TODO: Include packages needed for this application
const fs = require("fs")
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is your projects description?',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Successfully created index.html!')
    );
}

// TODO: Create a function to initialize app
function init() {inquirer.prompt(questions).then((answers) =>{

}) }

// Function call to initialize app
init();


// 'Project Description, Table of Contents, Installation, Usage, License, Contributing, Tests, Questions'
// .then((answers) => {
//     const htmlPageContent = generateHTML(answers);
