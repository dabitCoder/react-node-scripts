import inquirer from "inquirer";
import { components, connector, naming, tests } from "../questions.json";

export const askForComponent = () => inquirer.prompt(components);
export const askForConnector = () => inquirer.prompt(connector);
export const askForName = () => inquirer.prompt(naming);
export const askForTest = () => inquirer.prompt(tests);
