const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = '';
  let qsym;
  let char;
  for (let i = 0; i < str.length; i++) {
    qsym = 1;
    char = str[i];

    while (str[i + 1] == char && i < str.length - 1) {
      qsym += 1;
      i += 1;
    }
    if (qsym > 1) {
      res += qsym + char;
    } else {res += char}
  }
  console.log(res);
  return res;
}

module.exports = {
  encodeLine
};
