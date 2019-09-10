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

export const readAndCreateFile = (filePath, name, extension) =>
  fs.readFile(filePath, "utf8", (err, content) => {
    if (err) {
      return console.log(err);
    }

    const fileContent = content.replace(/NAME/g, name);
    createFile(name, fileContent, extension);
  });

export const createFile = (fileName, fileContent, extension) =>
  fs.writeFile(`${fileName}.${extension}`, fileContent, "utf8", err => {
    err ? console.log(err) : console.log("File created successfully!");
  });

export const createDir = dirName =>
  directoryExists("/")
    ? fs.mkdirSync(dir)
    : console.log("The folder already exists!");
