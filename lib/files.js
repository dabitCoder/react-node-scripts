import fs from "fs";
import path from "path";

export const getCurrentDirectoryBase = () => path.basename(process.cwd());
export const directoryExists = filePath => {
  try {
    return fs.statSync(filePath).isDirectory();
  } catch (err) {
    return false;
  }
};

export const generateFromTemplate = (
  templatePath,
  name,
  extension,
  parentDir
) =>
  fs.readFile(templatePath, "utf8", (err, content) => {
    if (err) {
      return console.log(err);
    }

    const fileContent = content.replace(/NAME/g, name);
    parentDir
      ? createFile(name, fileContent, extension, parentDir)
      : createFile(name, fileContent, extension);
  });

export const createFile = (file, fileContent, extension, parentDir) => {
  const destiny = parentDir
    ? `${parentDir}/${file}.${extension}`
    : `${file}.${extension}`;
  fs.writeFile(destiny, fileContent, "utf8", err => {
    err ? console.log(err) : console.log(`File created successfully!`);
  });
};

export const createDir = (dirName, callback) =>
  !directoryExists(`/${dirName}`)
    ? fs.mkdir(dirName, callback)
    : console.log("The folder already exists!");

