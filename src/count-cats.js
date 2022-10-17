const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(array) {
  let res = 0;
  array.forEach(element => {
    element.forEach(el => {
      if (typeof el == 'string' && el.localeCompare('^^') == 0) {
        res += 1;
      }

    })
  });
  return res;
  }


module.exports = {
  countCats
};