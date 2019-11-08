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
  component_actions,
  component_reducers,
  connector_method,
  connector_method_parameters,
  connector_test_type,
  isReduxActive,
  naming,
  selection,
} from '../questions.json';

//Generic
export const askForName = () => inquirer.prompt(naming);
export const askForSelection = () => inquirer.prompt(selection);

//Components
export const askForActions = () => inquirer.prompt(component_actions);
export const askForReducers = () => inquirer.prompt(component_reducers);
export const askForRedux = () => inquirer.prompt(isReduxActive);

//Connector
export const askForParameters = () =>
  inquirer.prompt(connector_method_parameters);
export const askForConnectorMethod = () => inquirer.prompt(connector_method);
export const askForConnectorTestType = () =>
  inquirer.prompt(connector_test_type);
