/**
 * David Oliva Tirado - 2019
 *
 * This file purpose is to provide several methods to work with file system,
 * such as create files, check if a file already exist or work with filepaths
 */

import fs from 'fs';

const fileAlreadyExists = filePath => {
  try {
    return fs.statSync(filePath).isFile();
  } catch (err) {
    return false;
  }
};

export const createFile = (fileContent, destinyDir) => {
  if (fileAlreadyExists(destinyDir)) {
    return console.error(
      '¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡YOUR FILE ALREADY EXISTS!!!!!!!!!!!!!!!!!!!!!!!!'
    );
  } else {
    fs.writeFile(destinyDir, fileContent, 'utf8', err =>
      err
        ? console.log(err)
        : console.log(
            `Your file has been generated, please, check ${destinyDir}`
          )
    );
  }
};
