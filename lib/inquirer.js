const inquirer = require("inquirer");
const files = require("./files");

const questions = require("../questions.json");

module.exports = {
  askForComponent: () => inquirer.prompt(questions.components),
  askForConnector: () => inquirer.prompt(questions.connector),
  askForName: () => inquirer.prompt(questions.name),
  askForTest: () => inquirer.prompt(questions.tests)
};
