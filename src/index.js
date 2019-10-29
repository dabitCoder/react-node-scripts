#!/usr/bin/env node
import chalk from "chalk";
import clear from "clear";
import figlet from "figlet";

import { askForSelection } from "../lib/inquirer";
import { generateComponentTest } from "./scripts/components";
import { generateConnectorTest } from "./scripts/connector";

clear();
console.log(
  chalk.red(figlet.textSync("RED POINTS", { horizontalLayout: "full" }))
);

const run = () => {
  askForSelection().then(answer => {
    switch (answer.type) {
      case "Test for a component":
        generateComponentTest();
        break;
      case "Connector":
        generateConnectorTest();
        break;
    }
  });
};

run();
