const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
 function renameFiles(names) {
  let obj = {};
  let arr = names;
  for (let k = 0; k < arr.length; k++) {
    let n = 0;
    let name = arr[k];
    if (obj.hasOwnProperty(name)) {
      obj[name] += 1;
      n = obj[name];
      arr[k] = name + '(' + n + ')';
      obj[arr[k]] = 0;

    } else {
      obj[name] = 0;
    }
  }
  console.log('arr= ',arr);
  console.log('obj= ',obj);
  return arr;
}

module.exports = {
  renameFiles
};
