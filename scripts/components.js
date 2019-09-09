#!/usr/bin/env node
import chalk from "chalk";
import clear from "clear";
import figlet from "figlet";
import inquirer from "inquirer";

clear();
console.log(
  chalk.red(figlet.textSync("Red Points", { horizontalLayout: "full" }))
);

const run = () => {
  const response = inquirer.askForComponent().then(answer => {});
};

run();
