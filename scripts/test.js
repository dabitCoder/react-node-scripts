#!/usr/bin/env node
const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");
const inquirer = require("../lib/inquirer");

clear();
console.log(
  chalk.red(figlet.textSync("RED POINTS", { horizontalLayout: "full" }))
);

const run = () => {
  const response = inquirer.askForTest().then(answer => {
    console.log(answer);
  });
};

run();
