#!/usr/bin/env node
const files = require("../lib/files");
const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");
const inquirer = require("../lib/inquirer");

clear();
console.log(
  chalk.red(figlet.textSync("Red Points", { horizontalLayout: "full" }))
);

const run = () => {
  const response = inquirer.askForComponent().then(answer => {
    console.log(answer);
  });
};

run();
