// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Welcome to the README generator! To start, please enter the title of your project:',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Your project must have a title');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project:',
        validate: description => {
            if (description) {
                return true;
            } else {
                console.log('Your project must have a description');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'install',
        message: 'Enter any installation instructions for your application:',
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log('Please provide installation instructions for your application.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter usage information for your application:',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please enter usage information for your application.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: "Enter your project description here:",
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('It is essential to provide a description of your project. Not sure what to include? Head to the repo of this README generator and navigate to the section "Description: Questions to Consider" under the Guidelines header for some tips on writing a quality description.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What are the contribution guidelines for your application?',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('Please provide contribution guidelines for your application.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please provide test instructions for your application:',
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('Please provide test instructions for your application.');
                return false;
            }
        }
    },
    // {
    //     type: 'confirm',
    //     name: 'confirmLicenses',
    //     message: 'Would you like to include a license?',
    //     default: false
    // },
    {
        type: 'list',
        name: 'licenses',
        message: 'What license would you like to include?',
        choices: ['MIT', 'GNU GPLv3', 'Mozilla Public', 'Apache Public', 'none'],
        // when: ({ confirmLicenses }) => {
        //     if (confirmLicenses) {
        //         return true;
        //     } else {
        //         return false;
        //     }
        // }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username:',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('You must enter your GitHub username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address:',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('You must enter your email address!');
                return false;
            }
        }
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

const init = () => {
    return inquirer.prompt(questions);
}

// Function call to initialize app
init();
