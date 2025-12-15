const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const { type } = require('os');


// Questions

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What would you like to title your project?',
        validate: (input) => input ? true : 'A Description is REQUIRED.'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a detailed description of your project',
        validate: (input) => input ? true : 'Description is REQUIRED.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How can one install your project?',
        default: 'npm install'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Tell us how to use your program.',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide contribution guidelines for others',
        default: 'Contributions are welcome!! Place a pull request or submit an issue.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please explain how to test the project',
        default: 'npm test'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license to assign to your project:',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
        default: 'None'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github username?',
        validate: (input) => input ? true : "A Github or Gitlab username is REQUIRED."
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: (input) => {
            const emailRegex = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm;
            return emailRegex.test(input) ? true : 'Please enter a valid email address!';
        }
    }
];


//Write README function
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error('Error writing file:', err);
            return;
        }
        console.log(`✓ Successfully created ${fileName}!`);
    });
}


//Initialization 

function init() {
    console.log('Welcome to the gonzo README generator!');
    console.log('Please answer the following questions about your project:\n');

    inquirer.prompt(questions)
        .then((answers) => {
            console.log(`\nGenerating your projects README...`);

            //Markdown Generator
            const markdown = generateMarkdown(answers);

            //Write to file
            writeToFile('README.md', markdown);
        })
        .catch((error) => {
            console.log('Error during initialization:', error);
        });
}

init();