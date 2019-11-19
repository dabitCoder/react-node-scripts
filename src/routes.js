import path from 'path';

const routes = {
  componentTestRoute: path.join(
    __dirname,
    '/templates/test/component/component.hbs'
  ),
  connectorReadOnlyTestRoute: path.join(
    __dirname,
    '/templates/test/connector/connector.hbs'
  ),
  testComponentDir: process.cwd(),
  testConnectorDir: process.cwd(),
};

export default routes;
