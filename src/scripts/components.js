/**
 * David Oliva Tirado - 2019
 */

import {
  askForName,
  askForReducers,
  askForActions,
  askForRedux,
} from '../../lib/prompter';
import { generateComponentTestFromTemplate } from '../../lib/templateCompiler';

import routes from '../routes.js';

export const promptQuestionsForComponent = async () => {
  let dataObject;
  const { componentTestRoute } = routes;
  const { name } = await askForName();
  const { isReduxActive } = await askForRedux();

  dataObject = { name, isReduxActive };

  if (isReduxActive) {
    dataObject = await askForReduxImports(dataObject, isReduxActive);
  }

  if (name) {
    generateComponentTestFromTemplate(componentTestRoute, dataObject);
  } else {
    console.log('Something wrong happen. Maybe you forgot to add some value? ');
  }
};

const askForReduxImports = async (dataObject, isReduxActive) => {
  let { component_reducers } = await askForReducers();
  let { component_actions } = await askForActions();

  const selectorsRoute = component_reducers.substring(
    component_reducers.lastIndexOf('from') + 5,
    component_reducers.lastIndexOf(';')
  );

  const actionsRoute = component_actions.substring(
    component_actions.lastIndexOf('from') + 5,
    component_actions.lastIndexOf(';')
  );

  let selectorsForComponent = component_reducers
    .replace(/(\r\n|\n|\r)/gm, '')
    .match(/{(.*)}/)
    .pop();

  let actionsForComponent = component_actions
    .replace(/(\r\n|\n|\r)/gm, '')
    .match(/{(.*)}/)
    .pop();

  const actionsArray = actionsForComponent
    .replace(/ /g, '')
    .split(',')
    .slice(0, -1);

  const selectorsArray = selectorsForComponent.replace(/ /g, '').split(',');

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
};
