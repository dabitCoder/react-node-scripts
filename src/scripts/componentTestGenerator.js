/**
 * David Oliva Tirado - 2019
 */

import {
  askForName,
  askForSelectors,
  askForActions,
  askForRedux,
  askForParentDirectory,
} from '../../lib/prompter';

import { generateComponentTestFromTemplate } from '../../lib/templateCompiler';

import routes from '../routes.js';

/**
 * Prompt questions to generate the component test
 */
export const promptQuestionsForComponent = async () => {
  const { componentTestRoute } = routes;
  const { component_name } = await askForName();
  const { component_parent_dir } = await askForParentDirectory(component_name);
  const { isReduxActive } = await askForRedux();
  let destinyRoute, dataObject;

  destinyRoute = component_parent_dir
    ? `./src/pages/${component_parent_dir}/__tests__`
    : `./src/pages/${component_name}/__tests__`;

  dataObject = { component_name, isReduxActive };

  if (isReduxActive) {
    dataObject = await askForReduxImports(dataObject, isReduxActive);
  }

  if (component_name) {
    generateComponentTestFromTemplate(
      componentTestRoute,
      dataObject,
      destinyRoute
    );
    console.log(`Test file generated! Please check ${component_parent_dir}`);
  } else {
    console.log('Something wrong happen');
  }
};

/**
 * Ask for everything needed to mock the component with redux
 * @param {Object} dataObject
 * @param {Boolean} isReduxActive
 */
export const askForReduxImports = async (dataObject, isReduxActive) => {
  let { component_actions } = await askForActions();
  let { component_selectors } = await askForSelectors();

  if (component_actions && !component_selectors) {
    const actionsRoute = extractRoute(component_actions);
    const actionsForComponent = extractValuesFromInput(component_actions);
    const actionsArray = generateValidTemplateString(actionsForComponent);

    return {
      ...dataObject,
      actionsArray,
      actionsForComponent,
      actionsRoute,
      isReduxActive,
    };
  }

  if (component_selectors && !component_actions) {
    const selectorsRoute = extractRoute(component_selectors);
    const selectorsForComponent = extractValuesFromInput(component_selectors);
    const selectorsArray = generateValidTemplateString(selectorsForComponent);

    return {
      ...dataObject,
      selectorsArray,
      selectorsForComponent,
      selectorsRoute,
      isReduxActive,
    };
  }

  if (component_actions && component_selectors) {
    const selectorsRoute = extractRoute(component_selectors);
    const actionsRoute = extractRoute(component_actions);

    const selectorsForComponent = extractValuesFromInput(component_selectors);
    const actionsForComponent = extractValuesFromInput(component_actions);

    const actionsArray = generateValidTemplateString(actionsForComponent);
    const selectorsArray = generateValidTemplateString(selectorsForComponent);

    return {
      ...dataObject,
      actionsArray,
      actionsForComponent,
      actionsRoute,
      isReduxActive,
      selectorsArray,
      selectorsForComponent,
      selectorsRoute,
    };
  } else {
    console.log(
      "Seems that you didn't provide reducers/actions, this will return a test without redux"
    );
    return { ...dataObject, isReduxActive: false };
  }
};

/**
 * Get the route of the import
 * @param {String} userInputRoute
 */
const extractRoute = userInputRoute => {
  const route = userInputRoute.substring(
    userInputRoute.lastIndexOf('from') + 6,
    userInputRoute.lastIndexOf(';')
  );
  const prependLevel = `'../`;
  return prependLevel.concat(route);
};

/**
 * Get all the actions/reducers inside the import {}
 * @param {String} userImportValues
 */
const extractValuesFromInput = userImportValues =>
  userImportValues
    .replace(/(\r\n|\n|\r)/gm, '')
    .match(/{(.*)}/)
    .pop();

/**
 * Extract the whitspaces from string, split it by , and remove empty values
 * @param {Array} currentValue
 */
const generateValidTemplateString = currentValue =>
  currentValue
    .replace(/ /g, '')
    .split(',')
    .filter(item => item);
