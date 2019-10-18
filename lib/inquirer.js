import inquirer from 'inquirer';
import {
  connector,
  naming,
  selection,
  actions,
  reducers
} from '../questions.json';

export const askForConnector = () => inquirer.prompt(connector);
export const askForName = () => inquirer.prompt(naming);
export const askForSelection = () => inquirer.prompt(selection);
export const askForActions = () => inquirer.prompt(actions);
export const askForReducers = () => inquirer.prompt(reducers);
