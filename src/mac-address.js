const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
 function isMAC48Address(n) {
  if (n.length != 17) return false;

  let arr = String(n).split('-').join('').split('');
  let acc = 0;
  console.log(arr);
  if (arr.length == 12) {
    for (let i = 0; i < arr.length;i++) {
      if (parseInt(arr[i], 16) < 16 || parseInt(arr[i], 16) > 0) {acc += 1}
    }
    if (acc == 12) {console.log('true'); return true;}
  }
  return false;
}

module.exports = {
  isMAC48Address
};
