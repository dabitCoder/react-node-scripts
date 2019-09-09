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

export const readFile = fileName => {
  try {
    return fs.readFileSync(fileName, "utf8", (err, content) => {
      console.log(contents);
    });
  } catch (err) {
    console.log(err);
    return false;
  }
};
