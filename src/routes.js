import path from 'path';

const routes = {
  componentTestRoute: path.join(
    __dirname,
    '/templates/test/component/component.hbs'
  ),
  testComponentDir: process.cwd(),
};

export default routes;
