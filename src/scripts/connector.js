import {
  askForName,
  askForParameters,
  askForConnectorMethod,
} from '../../lib/inquirer';
import { generateConnectorTestFromTemplate } from '../../lib/files';

import routes from '../routes.js';

export const generateConnectorTest = async () => {
  const { connectorReadOnlyTestRoute } = routes;
  const { name } = await askForName();
  const { methodName } = await askForConnectorMethod();
  let { parameters } = await askForParameters();

  parameters = parameters.split(',');

  const dataObject = {
    connector_name: name,
    connector_method: methodName,
    method_parameters: parameters,
  };

  generateConnectorTestFromTemplate(connectorReadOnlyTestRoute, dataObject);
};
