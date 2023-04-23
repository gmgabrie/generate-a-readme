// packages needed for this application along with import of generateMarkdown file
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');


// array of question prompts for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Welcome to Generate-a-Readme! To begin, please enter a title for your project:',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Your project must have a title!');
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
                console.log('Your project must have a description!');
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
        type: 'list',
        name: 'license',
        message: 'What license would you like to include?',
        choices: ['MIT', 'GNU_GPLv3', 'Mozilla_Public', 'Apache_Public', 'none'],
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

// function to write the readme file to the file system
const writeToFile = data => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./GeneratedFiles/README.md', data, err => {
            if (err) {
                reject (err);
                return;
            }
            resolve({
                ok: true,
                message: console.log('Readme file generated successfully!  Find file in Generated Files folder.')
            });
        })
    })
}

//function to initialize
const init = () => {
    return inquirer.prompt(questions);
}

// Function call to initialize app
init()
.then(userInput => {
    return generateMarkdown(userInput);
})
.then(readmeInfo => {
    return writeToFile(readmeInfo);
})
.catch(err => {
    console.log(err);
})