import inquirer from "inquirer";
import {
  actions,
  naming,
  parameters,
  reducers,
  selection,
  methodName
} from "../questions.json";

//Generic
export const askForName = () => inquirer.prompt(naming);

//Components
export const askForSelection = () => inquirer.prompt(selection);
export const askForActions = () => inquirer.prompt(actions);
export const askForReducers = () => inquirer.prompt(reducers);

//Connector
export const askForParameters = () => inquirer.prompt(parameters);
export const askForConnectorMethod = () => inquirer.prompt(methodName);
