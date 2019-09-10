#!/usr/bin/env node
import chalk from "chalk";
import clear from "clear";
import figlet from "figlet";
import { askForTest, askForName } from "../lib/inquirer";

import { generateFromTemplate } from "../lib/files";

clear();
console.log(
  chalk.red(figlet.textSync("RED POINTS", { horizontalLayout: "full" }))
);

const run = () => {
  askForTest().then(selection => {
    let route;
    let extension = "test.js";
    switch (selection.type) {
      case "Component":
        route = "templates/test/componentTest.test.js";
        extension = "test.jsx";
        askForName().then(answer =>
          generateFromTemplate(route, answer.name, extension)
        );
        break;
      case "Action":
        route = "templates/test/action.test.js";
        askForName().then(answer =>
          generateFromTemplate(route, answer.name, extension)
        );
        break;
      case "Reducer":
        route = "templates/test/reducer.test.js";
        askForName().then(answer =>
          generateFromTemplate(route, answer.name, extension)
        );
        break;
      default:
        route = "templates/test/componentTest.test.js";
        askForName().then(answer =>
          generateFromTemplate(route, answer.name, extension)
        );
    }
  });
};

run();
