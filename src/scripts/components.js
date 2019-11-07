/**
 * David Oliva Tirado - 2019
 */

import {
  askForName,
  askForReducers,
  askForActions,
  askForRedux,
} from '../../lib/inquirer';
import { generateComponentTestFromTemplate } from '../../lib/files';

import routes from '../routes.js';

export const generateComponentTest = async () => {
  let dataObject;
  const { componentTestRoute } = routes;

  const { name } = await askForName();
  const { isReduxActive } = await askForRedux();
  dataObject = { name, isReduxActive };

  if (isReduxActive) {
    const { reducers } = await askForReducers();
    const { actions } = await askForActions();
    dataObject = { ...dataObject, actions, reducers, isReduxActive };
  }

  if (name && dataObject) {
    generateComponentTestFromTemplate(componentTestRoute, dataObject);
  } else {
    console.log('Something wrong happen. Maybe you forgot to add some value? ');
  }
};
