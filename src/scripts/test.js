#!/usr/bin/env node
import chalk from "chalk";
import clear from "clear";
import figlet from "figlet";
import { askForTest, askForName } from "../../lib/inquirer";

import { generateFromTemplate } from "../../lib/files";

import { tests } from "../routes.json";

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
        route = tests.component;
        extension = "test.jsx";
        askForName().then(answer =>
          generateFromTemplate(route, answer.name, extension)
        );
        break;
      case "Action":
        route = tests.action;
        askForName().then(answer =>
          generateFromTemplate(route, answer.name, extension)
        );
        break;
      case "Reducer":
        route = tests.reducer;
        askForName().then(answer =>
          generateFromTemplate(route, answer.name, extension)
        );
        break;
      default:
        return;
    }
  });
};

run();
