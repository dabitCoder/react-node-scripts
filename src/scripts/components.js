import { askForName, askForReducers, askForActions } from '../../lib/inquirer';
import {
  createDir,
  generateTestFromTemplate,
  getCurrentDirectoryBase
} from '../../lib/files';

import routes from '../routes.js';

export const generateComponentTest = async () => {
  const { componentTestRoute } = routes;
  let name, actions, reducers;

  await askForName().then(answer => {
    name = answer.name;
  });

  await askForReducers().then(answer => {
    reducers = answer.route;
  });

  await askForActions().then(answer => {
    actions = answer.route;
  });

  if (name && reducers && actions) {
    const routes = { reducers, actions };
    const parentDir = name;

    createDir(name, () => {
      generateTestFromTemplate(componentTestRoute, name, routes, parentDir);
    });
  } else {
    console.log('Something wrong happen. Maybe you forgot to add some value? ');
  }
};

export default generateComponentTest;
