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
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'What is your projects Installation?',
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'What is your projects Usage?',
    },
    {
        type: 'input',
        name: 'Constributing',
        message: 'What is your projects Constributing?',
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'What is your projects Tests?',
    },
    {
        type: 'input',
        name: 'Email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your github username?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What is your license do you choose?',
        choices: ["apache license 2.0", "GNU General Public License v3.0", "MIT License", "None"]
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
const readmeContent = generateMarkdown(answers)
// console.log(readmeContent)
// console.log("Generate Read Me")
writeToFile("readme.md", readmeContent)
}) }

// Function call to initialize app
init();



// insert from line 74-79 after questions on line 63
// .then(data=>{
//     console.log(data)
//     console.log("Generate Read Me")
//     writeToFile("README.md",generateMarkdown(data))
// })
// }
// 'Project Description, Table of Contents, Installation, Usage, License, Contributing, Tests, Questions'
// .then((answers) => {
    
//     const htmlPageContent = generateHTML(answers);



