/**
 * David Oliva Tirado - 2019
 *
 * This file purpose is to provide several methods to work with file system,
 * such as create files, check if a file already exist or work with filepaths
 */

import fs from 'fs';
import routes from '../src/routes';

export const fileAlreadyExists = filePath => {
  try {
    return fs.statSync(filePath).isFile();
  } catch (err) {
    return false;
  }
};

export const generateComponentTestFromTemplate = (
  templatePath,
  name,
  routesObject
) =>
  fs.readFile(templatePath, 'utf8', (err, content) => {
    if (err) {
      return console.log(err);
    }

    const extension = 'test.jsx';

    content = content.replace(/ROUTES_TO_ACTIONS/g, routesObject.actions);
    content = content.replace(/ROUTES_TO_REDUCERS/g, routesObject.reducers);
    content = content.replace(/NAME/g, name);

    const { testComponentDir } = routes;
    const componentDestinyRoute = `${testComponentDir}/${name}.${extension}`;

    createFile(content, componentDestinyRoute);
  });

export const generateConnectorTestFromTemplate = (
  templatePath,
  name,
  method,
  parameters
) =>
  fs.readFile(templatePath, 'utf8', (err, content) => {
    if (err) {
      return console.log(err);
    }

    const extension = 'SpecReadOnly.js';

    content = content.replace(/NAME_OF_YOUR_CONNECTOR/g, name);
    content = content.replace(/METHOD_OF_YOUR_CONNECTOR/g, method);
    content = content.replace(/PARAMETERS/g, parameters);

    const { testConnectorDir } = routes;
    const connectorDestinyRoute = `${testConnectorDir}/${name}${extension}`;

    createFile(content, connectorDestinyRoute);
  });

export const createFile = (fileContent, destinyDir) => {
  if (fileAlreadyExists(destinyDir)) {
    return console.error(
      '¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡YOUR FILE ALREADY EXISTS!!!!!!!!!!!!!!!!!!!!!!!!'
    );
  } else {
    fs.writeFile(destinyDir, fileContent, 'utf8', err =>
      err
        ? console.log(err)
        : console.log(
            `Your file has been generated, please, check ${destinyDir}`
          )
    );
  }
};
