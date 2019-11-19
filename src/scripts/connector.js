import path from 'path';
import { JavaClassFileReader } from 'java-class-tools';

import {
  askForName,
  askForParameters,
  askForConnectorMethod,
  askForConnectorTestType,
} from '../../lib/prompter';

import {
  generateConnectorTestFromTemplate,
  generateNewConnectorFromTemplate,
} from '../../lib/templateCompiler';

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

export const generateNewConnector = async () => {
  const { newConnectorRoute } = routes;
  const { name } = await askForName();

  const reader = new JavaClassFileReader();
  const fileToRead = path.join(__dirname, '../javaFiles/AssetController.class');
  const classFile = reader.read(fileToRead);
  let connectorData = [];
  let methodName;
  let methodParams;

  classFile.methods.forEach(method => {
    const nameInConstantPool = classFile.constant_pool[method.name_index];
    methodName = String.fromCharCode.apply(null, nameInConstantPool.bytes);

    method.attributes.map(methodAttr => {
      const { parameters } = methodAttr;
      if (parameters) {
        methodParams = parameters.map(param => {
          const paramName = classFile.constant_pool[param.name_index];
          let paramString = String.fromCharCode.apply(null, paramName.bytes);

          //Avoid sending scope as parameter
          if (paramString === 'scope') {
            paramString = 'context';
          }
          return paramString;
        });
        connectorData.push({ methodName, methodParams });
      }
    });
  });

  const dataObject = {
    connector_name: name,
    connectorData,
  };

  generateNewConnectorFromTemplate(newConnectorRoute, dataObject);
};
