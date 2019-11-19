import path from 'path';
import { JavaClassFileReader } from 'java-class-tools';

import {
  askForName,
  askForParameters,
  askForConnectorMethod,
  askForConnectorTestType,
} from '../../lib/prompter';
import { generateConnectorTestFromTemplate } from '../../lib/templateCompiler';

import routes from '../routes.js';

export const promptQuestionsForConnectorTest = async () => {
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

export const generateNewConnector = () => {
  const reader = new JavaClassFileReader();
  const fileToRead = path.join(__dirname, '../javaFiles/AssetController.class');
  const classFile = reader.read(fileToRead);

  classFile.methods.forEach(md => {
    const nameInConstantPool = classFile.constant_pool[md.name_index];
    const name = String.fromCharCode.apply(null, nameInConstantPool.bytes);
    console.log(name);
  });
};
