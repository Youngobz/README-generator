//Including packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const chalk = require("chalk");
const generateMarkdown = require("./utility/templateGenerator");
const questions = require('./constants/question.json');

// Writing README.md File
function writeToFile(fileName, data) {
  return fs.writeFile(path.join(process.cwd(), fileName), data, (err) => {
        if (err) {
            console.log(
                chalk.red("Getting error writing the file", error)
            );
        } else {
            console.log(chalk.green("Readme file has been created successfully."));
        }
    }
  );
}

// Initializing app
function init() {
  inquirer.prompt(questions).then((responses) => {
    console.log(chalk.green("Creating Professional README.md File..."));
    writeToFile("./README.md", generateMarkdown({ ...responses }))
  }).catch((error) => {
    console.log(
        chalk.red("Getting error while creating the generate README.md", error)
    );
  });
}

init();
