/**
 * David Oliva Tirado - 2019
 *
 * This file purpose is to provide several methods to work with file system,
 * such as create files, check if a file already exist or work with filepaths
 */

import fs from 'fs';
import routes from '../src/routes';
import handlebars from 'handlebars';

const fileAlreadyExists = filePath => {
  try {
    return fs.statSync(filePath).isFile();
  } catch (err) {
    return false;
  }
};

const compileTemplate = (destinyRoute, content, dataObject) => {
  const template = handlebars.compile(content);
  const output = template(dataObject);

  return createFile(output, destinyRoute);
};

export const generateComponentTestFromTemplate = (templatePath, dataObject) =>
  fs.readFile(templatePath, 'utf8', (err, content) => {
    if (err) {
      return console.log(err);
    }

    const extension = 'test.jsx';
    const { testComponentDir } = routes;
    const componentDestinyRoute = `${testComponentDir}/${dataObject.name}.${extension}`;

    compileTemplate(componentDestinyRoute, content, dataObject);
  });

export const generateConnectorTestFromTemplate = (templatePath, dataObject) =>
  fs.readFile(templatePath, 'utf8', (err, content) => {
    if (err) {
      return console.log(err);
    }

    const extension = 'SpecReadOnly.js';

    const { testConnectorDir } = routes;
    const connectorDestinyRoute = `${testConnectorDir}/${dataObject.connector_name}${extension}`;

    compileTemplate(connectorDestinyRoute, content, dataObject);
  });

const createFile = (fileContent, destinyDir) => {
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
