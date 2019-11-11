import {
  askForName,
  askForParameters,
  askForConnectorMethod,
  askForConnectorTestType,
} from '../../lib/inquirer';
import { generateConnectorTestFromTemplate } from '../../lib/templateCompiler';

import routes from '../routes.js';

export const promptQuestionsForConnector = async () => {
  const { connectorReadOnlyTestRoute } = routes;
  const { name } = await askForName();
  const { connector_method } = await askForConnectorMethod();
  const { connector_test_type } = await askForConnectorTestType();
  let { connector_method_parameters } = await askForParameters();

  const dataObject = {
    connector_name: name,
    connector_method,
    connector_method_parameters,
    connector_test_type,
  };

  generateConnectorTestFromTemplate(connectorReadOnlyTestRoute, dataObject);
};
