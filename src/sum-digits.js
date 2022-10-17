const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
 function getSumOfDigits(n) {
  let numToStr = String(n);
  if (typeof n == 'string' || numToStr.length == 1) {
     return n;}
  let acc = 0;
  for (let i = 0; i < numToStr.length; i++) {
    acc += Number(numToStr[i]);
  }
  return getSumOfDigits(acc);
}

module.exports = {
  getSumOfDigits
};
