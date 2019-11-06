import fs from "fs";

export const directoryExists = filePath => {
  try {
    return fs.statSync(filePath).isDirectory();
  } catch (err) {
    return false;
  }
};

export const generateComponentTestFromTemplate = (
  templatePath,
  name,
  routes,
  parentDir
) =>
  fs.readFile(templatePath, "utf8", (err, content) => {
    if (err) {
      return console.log(err);
    }

    const extension = "test.jsx";

    content = content.replace(/ROUTES_TO_ACTIONS/g, routes.actions);
    content = content.replace(/ROUTES_TO_REDUCERS/g, routes.reducers);
    content = content.replace(/NAME/g, name);

    const fileContent = content;

    if (parentDir) {
      const testDir = directoryExists(parentDir);
      if (testDir) {
        createFile(name, fileContent, extension, parentDir);
      }
    }
  });

export const generateConnectorTestFromTemplate = (
  templatePath,
  name,
  method,
  parameters,
  parentDir
) =>
  fs.readFile(templatePath, "utf8", (err, content) => {
    if (err) {
      return console.log(err);
    }

    const extension = "SpecReadOnly.js";

    content = content.replace(/NAME_OF_YOUR_CONNECTOR/g, name);
    content = content.replace(/METHOD_OF_YOUR_CONNECTOR/g, method);
    content = content.replace(/PARAMETERS/g, parameters);

    const fileContent = content;

    if (parentDir) {
      const testDir = directoryExists(parentDir);
      if (testDir) {
        createFile(name, fileContent, extension, parentDir);
      }
    }
  });

export const createFile = (file, fileContent, extension, parentDir) => {
  const destiny = parentDir
    ? `${parentDir}/${file}.${extension}`
    : `${file}.${extension}`;
  fs.writeFile(destiny, fileContent, "utf8", err => {
    err ? console.log(err) : console.log(`Test suite ready!`);
  });
};

export const createDir = (dirName, callback) =>
  !directoryExists(`/${dirName}`)
    ? fs.mkdir(dirName, callback)
    : console.log("The folder already exists!");
