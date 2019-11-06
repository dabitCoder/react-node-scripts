import {
  askForName,
  askForParameters,
  askForConnectorMethod
} from "../../lib/inquirer";
import { createDir, generateConnectorTestFromTemplate } from "../../lib/files";

import routes from "../routes.js";

export const generateConnectorTest = async () => {
  const { connectorReadOnlyTestRoute } = routes;
  const { name } = await askForName();
  const { methodName } = await askForConnectorMethod();
  let { parameters } = await askForParameters();

  parameters = parameters.split(",");
  const parentDir = name;

  createDir(name, () => {
    generateConnectorTestFromTemplate(
      connectorReadOnlyTestRoute,
      name,
      methodName,
      parameters,
      parentDir
    );
  });
};
