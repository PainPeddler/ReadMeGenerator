// TODO: Include packages needed for this application
const inquirer = require(`inquirer`);
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: `input`,
        name: `gitUsername`,
        message: 'Enter your GitHub username: '
    },
    {
        type: `input`,
        name: `eMail`,
        message: 'Enter your e-mail: '
    },
    {
        type: `input`,
        name: `title`,
        message: `Enter your project's title: `
    },
    {
        type: `input`,
        name: `description`,
        message: 'Enter a description for the project: '
    },
    {
        type: `list`,
        name: 'license',
        message:`Choose a license`,
        choices: [
            `MIT`,
            `GPLv3`,
            'Apache2.0',
            `None`
        ]
    },
    
    {
        type: `input`,
        name: `liveLink`,
        message: 'Provide a live link, if applicable: '
    },
    {
        type: `input`,
        name: `instructions`,
        message: 'Provide installation instructions here: '
    },
    {
        type: `input`,
        name: `usage`,
        message: 'Provide usage information here: '
    },
    {
        type: `input`,
        name: `contributions`,
        message: 'State guideliens for contributions to your project: '
    },
    {
        type: `input`,
        name: `testInfo`,
        message: 'Give out detailed tests for your app here: '
    }
];

// TODO: Create a function to write README file
function writeToFile(filePath, data) {
    fs.writeFile(filePath, data,err => {
        if(err) {
        console.error(err);
      }
      console.log("Read me generated!");
    })
};

// TODO: Create a function to initialize app
function init() {
    console.log("Answer the following to generate a readme file");
    inquirer.prompt(questions)
    .then(readMe => {
        console.log(readMe);
        writeToFile("./GendRead/readme.md", generateMarkdown(readMe))
    })
};

// Function call to initialize app
init();
