#!/usr/bin/env node
import chalk from "chalk";
import clear from "clear";
import figlet from "figlet";

import { askForComponent, askForName } from "../lib/inquirer";
import { createDir, generateFromTemplate } from "../lib/files";
import { tableComponent, tests } from "../routes.json";

clear();
console.log(
  chalk.red(figlet.textSync("Red Points", { horizontalLayout: "full" }))
);

const run = () => {
  askForComponent().then(answer => {
    switch (answer.type) {
      case "Table":
        askForName().then(answer => {
          const { filters, filtersActions, entryPoint, table } = tableComponent;
          createDir(answer.name, () => {
            generateFromTemplate(
              entryPoint,
              `${answer.name}All`,
              "jsx",
              answer.name
            );
            generateFromTemplate(
              filters,
              `${answer.name}Filters`,
              "jsx",
              answer.name
            );
            generateFromTemplate(
              filtersActions,
              `${answer.name}FiltersActions`,
              "jsx",
              answer.name
            );
            generateFromTemplate(
              table,
              `${answer.name}Table`,
              "jsx",
              answer.name
            );

            //Create tests
            createDir("__tests__", () => {
              generateFromTemplate(
                `../${tests.component}`,
                answer.name,
                "jsx",
                answer.name
              );
            });
          });
        });
    }
  });
};

run();
