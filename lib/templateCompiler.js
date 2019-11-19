import fs from 'fs';
import handlebars from 'handlebars';
import routes from '../src/routes';

import { createFile } from './files';

const compileTemplate = (destinyRoute, content, dataObject) => {
  const template = handlebars.compile(content);
  const output = template(dataObject);

  return createFile(output, destinyRoute);
};

export const generateComponentTestFromTemplate = (templatePath, dataObject) =>
  fs.readFile(templatePath, 'utf8', (err, content) => {
    if (err) {
      return console.log(err);
    } else {
      const extension = 'test.jsx';
      const { testComponentDir } = routes;
      const componentDestinyRoute = `${testComponentDir}/${dataObject.name}.${extension}`;

      compileTemplate(componentDestinyRoute, content, dataObject);
    }
  });

export const generateNewConnectorFromTemplate = (templatePath, dataObject) =>
  fs.readFile(templatePath, 'utf8', (err, content) => {
    if (err) {
      return console.log(err);
    } else {
      const extension = 'js';
      const { newConnectorDir } = routes;
      const componentDestinyRoute = `${newConnectorDir}/${dataObject.connector_name}.${extension}`;

      compileTemplate(componentDestinyRoute, content, dataObject);
    }
  });

export const generateConnectorTestFromTemplate = (templatePath, dataObject) =>
  fs.readFile(templatePath, 'utf8', (err, content) => {
    if (err) {
      return console.log(err);
    } else {
      const extension = dataObject.connector_test_type;

      const { testConnectorDir } = routes;
      const connectorDestinyRoute = `${testConnectorDir}/${dataObject.connector_name}${extension}`;

      compileTemplate(connectorDestinyRoute, content, dataObject);
    }
  });
