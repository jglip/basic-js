const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  let numToStr = String(n).split('');
  let maxValue = 0;
  let deletedNum;
  for (let i = numToStr.length - 1; i >= 0 ; i--) {
    deletedNum = numToStr[i];
    numToStr[i] = '';
    maxValue = Math.max(maxValue, Number(numToStr.join('')));
    numToStr[i] = deletedNum;
  }
  return maxValue;
}

module.exports = {
  deleteDigit
};
