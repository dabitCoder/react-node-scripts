/**
 * David Oliva Tirado - 2019
 *
 * This file purpose is to provide several methods to work with file system,
 * such as create generatedFiles, check if a file already exist or work with filepaths
 */

import fs from 'fs';

/**
 * Check if a file currently exists
 * @param {String} filePath
 */
export const fileAlreadyExists = filePath => {
  try {
    return fs.statSync(filePath).isFile();
  } catch (err) {
    return false;
  }
};

/**
 * Check if a directory currently exists
 */
export const directoryExists = dirPath => {
  try {
    return fs.existsSync(dirPath);
  } catch (err) {
    console.log(err);
    return;
  }
};

export const createFile = (fileContent, destinyDir) => {
  fs.appendFile(destinyDir, fileContent, 'utf8', err => {
    if (err) {
      console.log(err);
    }
  });
};

export const createDirRecursively = path =>
  fs.mkdir(path, { recursive: true }, err => {
    if (err) {
      console.log(err);
      return;
    }
  });

export const createDirAndFile = (directory, file) => {
  if (Array.isArray(directory)) {
    directory.forEach(currentDirectory =>
      fs.mkdirSync(currentDirectory, { recursive: true }, err => {
        if (err) {
          console.log(err);
          return;
        }
      })
    );
  } else {
    fs.mkdirSync(directory, { recursive: true }, err => {
      if (err) {
        console.log(err);
        return;
      }
    });
  }

  if (Array.isArray(file)) {
    file.forEach(currentFile => createFile(null, currentFile));
  } else {
    createFile(null, file);
  }
};
