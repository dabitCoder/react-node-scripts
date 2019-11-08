/**
 * David Oliva Tirado - 2019
 */

import {
  askForName,
  askForReducers,
  askForActions,
  askForRedux,
} from '../../lib/inquirer';
import { generateComponentTestFromTemplate } from '../../lib/templateCompiler';

import routes from '../routes.js';

export const generateComponentTest = async () => {
  let dataObject;
  const { componentTestRoute } = routes;

  const { name } = await askForName();
  const { isReduxActive } = await askForRedux();
  dataObject = { name, isReduxActive };

  if (isReduxActive) {
    const { component_reducers } = await askForReducers();
    const { component_actions } = await askForActions();
    dataObject = {
      ...dataObject,
      component_actions,
      component_reducers,
      isReduxActive,
    };
  }

  if (name && dataObject) {
    generateComponentTestFromTemplate(componentTestRoute, dataObject);
  } else {
    console.log('Something wrong happen. Maybe you forgot to add some value? ');
  }
};
