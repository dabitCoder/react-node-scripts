#!/usr/bin/env node
const files = require("../lib/files");
const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");
const inquirer = require("../lib/inquirer");

clear();
console.log(
  chalk.red(figlet.textSync("RED POINTS", { horizontalLayout: "full" }))
);

const run = () => inquirer.askForConnector();

run();
