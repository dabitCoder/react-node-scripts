/**
 * David Oliva Tirado - 2019
 *
 * This file idea is to prompt the questions in the user's console.
 * It reads a specific json object fields depending on the current question and gets the user
 * input.
 *
 * It is divided depending on the kind of questions is asking.
 *
 * Generic: something that can be used for all the generatedFiles.
 * Components: react component related
 * Connectors: Connectors related.
 */

import inquirer from 'inquirer';
import {
  component_actions,
  component_selectors,
  component_parent_dir,
  isReduxActive,
  naming,
  selection,
  screen_name,
  screen_parentDir,
  screen_type,
} from '../questions.js';

//Generic
export const askForName = () => inquirer.prompt(naming);
export const askForSelection = () => inquirer.prompt(selection);

//Components
export const askForActions = () => inquirer.prompt(component_actions);
export const askForSelectors = () => inquirer.prompt(component_selectors);
export const askForRedux = () => inquirer.prompt(isReduxActive);
export const askForParentDirectory = component_name =>
  inquirer.prompt(component_parent_dir(component_name));

//Scaffolding
export const askForScreenName = () => inquirer.prompt(screen_name);
export const askToCreateParentDir = () => inquirer.prompt(screen_parentDir);
export const askForScreenType = () => inquirer.prompt(screen_type);
