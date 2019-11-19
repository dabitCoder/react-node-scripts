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
  testComponentDir: path.join(__dirname, '/'),
  testConnectorDir: 'src/generatedFiles/connectors',
};

export default routes;
