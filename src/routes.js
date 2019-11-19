import path from 'path';

const routes = {
  componentTestRoute: path.join(
    __dirname,
    '/templates/test/component/component.hbs'
  ),
  connectorReadOnlyTestRoute: path.join(
    __dirname,
    '/templates/test/connector/connectorTest.hbs'
  ),
  newConnectorRoute: path.join(
    __dirname,
    '/templates/connector/newConnector.hbs'
  ),
  testComponentDir: process.cwd(),
  testConnectorDir: process.cwd(),
  newConnectorDir: process.cwd(),
};

export default routes;
