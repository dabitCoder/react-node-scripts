import fs from 'fs';

export const directoryExists = filePath => {
  try {
    return fs.statSync(filePath).isDirectory();
  } catch (err) {
    return false;
  }
};

export const generateTestFromTemplate = (
  templatePath,
  name,
  routes,
  parentDir
) =>
  fs.readFile(templatePath, 'utf8', (err, content) => {
    if (err) {
      return console.log(err);
    }

    const extension = 'test.jsx';

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

export const createFile = (file, fileContent, extension, parentDir) => {
  const destiny = parentDir
    ? `${parentDir}/${file}.${extension}`
    : `${file}.${extension}`;
  fs.writeFile(destiny, fileContent, 'utf8', err => {
    err ? console.log(err) : console.log(`Test suite ready!`);
  });
};

export const createDir = (dirName, callback) =>
  !directoryExists(`/${dirName}`)
    ? fs.mkdir(dirName, callback)
    : console.log('The folder already exists!');
