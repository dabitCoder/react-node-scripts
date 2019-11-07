/**
 * David Oliva Tirado - 2019
 *
 * This file idea is to prompt the questions in the user's console.
 * It reads a specific json object fields depending on the current question and gets the user
 * input.
 *
 * It is divided depending on the kind of questions is asking.
 *
 * Generic: something that can be used for all the files.
 * Components: react component related
 * Connectors: Connectors related.
 */

import inquirer from 'inquirer';
import {
  actions,
  methodName,
  naming,
  parameters,
  reducers,
  selection,
} from '../questions.json';

//Generic
export const askForName = () => inquirer.prompt(naming);

//Components
export const askForSelection = () => inquirer.prompt(selection);
export const askForActions = () => inquirer.prompt(actions);
export const askForReducers = () => inquirer.prompt(reducers);

//Connector
export const askForParameters = () => inquirer.prompt(parameters);
export const askForConnectorMethod = () => inquirer.prompt(methodName);
