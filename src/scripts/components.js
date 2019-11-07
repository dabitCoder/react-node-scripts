/**
 * David Oliva Tirado - 2019
 */

import { askForName, askForReducers, askForActions } from '../../lib/inquirer';
import { generateComponentTestFromTemplate } from '../../lib/files';

import routes from '../routes.js';

export const generateComponentTest = async () => {
  const { componentTestRoute } = routes;

  const { name } = await askForName();
  const { reducers } = await askForReducers();
  const { actions } = await askForActions();

  const reducersActions = { reducers, actions };

  if (name && reducers && actions) {
    generateComponentTestFromTemplate(
      componentTestRoute,
      name,
      reducersActions
    );
  } else {
    console.log('Something wrong happen. Maybe you forgot to add some value? ');
  }
};
