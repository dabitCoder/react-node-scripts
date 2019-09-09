import {
  askForScreenName,
  askForParentDirectory,
  askToCreateParentDir,
  askForScreenType,
} from '../../lib/prompter';

import {
  directoryExists,
  createDirRecursively,
  createDirAndFile,
} from '../../lib/files';

export const promptQuestionsForScaffolding = async () => {
  const { screen_type } = await askForScreenType();
  const { screen_name } = await askForScreenName();
  const { component_parent_dir } = await askForParentDirectory(screen_name);

  const parentDirRoute = `./src/pages/${component_parent_dir}`;

  try {
    if (!directoryExists(parentDirRoute)) {
      const { screen_parentDir } = await askToCreateParentDir();

      if (screen_parentDir === 'Yes') {
        createDirRecursively(parentDirRoute);
        startScaffolding(component_parent_dir, screen_name, screen_type);
      }
    } else {
      startScaffolding(component_parent_dir, screen_name, screen_type);
    }
  } catch (err) {
    console.log(err);
    return;
  } finally {
    console.log(
      `Process has finished. Please check ${screen_name} folder in pages/reducers!`
    );
    return;
  }
};

const startScaffolding = (component_parent_dir, screen_name, screen_type) => {
  const pagesRoute = `./src/pages/${component_parent_dir}/${screen_name}`;
  const parentRoute = `./src/reducers/${component_parent_dir.toLowerCase()}`;
  const reduxRoute = `./src/reducers/${component_parent_dir.toLowerCase()}/${screen_name.toLowerCase()}`;

  const foldersToGenerate = [
    pagesRoute,
    `./src/reducers/${component_parent_dir.toLowerCase()}/${screen_name.toLowerCase()}`,
    `${pagesRoute}/__tests__`,
    `${reduxRoute}/__tests__`,
  ];

  const filesToGenerate = [
    `./src/actions/${screen_name}.js`,
    `${parentRoute}/index.js`,
  ];

  createDirAndFile(foldersToGenerate, filesToGenerate);

  if (screen_type === 'Filter/Table') {
    createReduxFiltersTableConfiguration(reduxRoute);
    createPagesFiltersTableConfiguration(pagesRoute, screen_name);
  }
};

const createReduxFiltersTableConfiguration = route => {
  const reduxFiltersFolders = [
    `${route}/filters`,
    `${route}/filters/selected`,
    `${route}/table`,
  ];

  const reduxFoldersIndex = [
    `${route}/filters/index.js`,
    `${route}/filters/selected/index.js`,
    `${route}/table/index.js`,
  ];

  createDirAndFile(reduxFiltersFolders, reduxFoldersIndex);
};

const createPagesFiltersTableConfiguration = (route, screenName) => {
  const componentsToCreate = [
    `${route}/${screenName}Filters.jsx`,
    `${route}/${screenName}.jsx`,
    `${route}/${screenName}Table.jsx`,
  ];

  const pagesFiltersDir = `${route}/Filters`;

  createDirAndFile(pagesFiltersDir, componentsToCreate);
};
