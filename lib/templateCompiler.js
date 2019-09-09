import fs from 'fs';
import handlebars from 'handlebars';
import routes from '../src/routes';
import {
  component_test_extension,
  connector_test_extension,
} from '../src/constants.json';

import { createFile, directoryExists, createDirRecursively } from './files';

/**
 * Compile a template
 * @param {String} templatePath
 * @param {HTML/String} content
 * @param {Object} dataObject
 */
const compileTemplate = (templatePath, content, dataObject) => {
  try {
    const template = handlebars.compile(content);
    const output = template(dataObject);

    createFile(output, templatePath);
  } catch (err) {
    console.log('There was an error compiling your template', err);
  }
};

/**
 * Prepare the data to generate the template for component test
 * @param {*} templatePath
 * @param {*} dataObject
 * @param {*} testPath
 */
export const generateComponentTestFromTemplate = (
  templatePath,
  dataObject,
  destinyRoute
) => {
  let componentTestDestinyRoute;
  const { component_name } = dataObject;

  if (!directoryExists(destinyRoute)) {
    createDirRecursively(destinyRoute);
  }

  componentTestDestinyRoute = `${destinyRoute}/${component_name}.${component_test_extension}`;

  fs.readFile(templatePath, 'utf8', (err, content) =>
    err
      ? console.log('There was an error reading the template file', err)
      : compileTemplate(componentTestDestinyRoute, content, dataObject)
  );
};

export const generateNewConnectorFromTemplate = (templatePath, dataObject) =>
  fs.readFile(templatePath, 'utf8', (err, content) => {
    if (err) {
      return console.log(err);
    } else {
      const { newConnectorDir } = routes;
      const { connector_name } = dataObject;
      const componentDestinyRoute = `${newConnectorDir}/${connector_name}.${connector_test_extension}`;

      compileTemplate(componentDestinyRoute, content, dataObject);
    }
  });

export const generateConnectorTestFromTemplate = (templatePath, dataObject) =>
  fs.readFile(templatePath, 'utf8', (err, content) => {
    if (err) {
      return console.log(err);
    } else {
      const { connector_test_type, connector_name } = dataObject;

      const { testConnectorDir } = routes;
      const connectorDestinyRoute = `${testConnectorDir}/${connector_name}${connector_test_type}`;

      compileTemplate(connectorDestinyRoute, content, dataObject);
    }
  });
