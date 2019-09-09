#!/usr/bin/env node
import chalk from "chalk";
import clear from "clear";
import figlet from "figlet";
import { askForTest, askForName } from "../lib/inquirer";

import { getCurrentDirectoryBase, readFile } from "../lib/files";

clear();
console.log(
  chalk.red(figlet.textSync("RED POINTS", { horizontalLayout: "full" }))
);

const run = () => {
  askForTest().then(selection => {
    switch (selection.type) {
      case "Component":
        askForName().then(answer => {
          const baseDir = getCurrentDirectoryBase();
          readFile("templates/");
        });
        break;
      case "Action":
        askForName().then(answer => answer.name);
        break;
      case "Reducer":
        askForName().then(answer => answer.name);
        break;
    }
  });
};

run();
