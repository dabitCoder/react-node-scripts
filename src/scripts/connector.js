import { askForName } from "../../lib/inquirer";
import { generateTestFromTemplate } from "../../lib/files";

import routes from "../routes.js";

export const generateConnectorTest = async () => {
  const { connectorReadOnlyTestRoute } = routes;
  const name = await askForName();
};
