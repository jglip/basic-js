const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */


 function getDNSStats(domains) {

  let obj = {};
  let temp = [];

  for (let j = 0; j < domains.length; j++) {
      temp = domains[j].split('.').reverse();
    for(let i = 0; i < temp.length; i++) {
      if (i == 0) {
        temp[i] = '.' + temp[i];
        obj.hasOwnProperty(temp[i]) ? obj[temp[i]] += 1 : obj[temp[i]] = 1;
      } else {
        temp[i] = temp[i-1] + '.' + temp[i];
        obj.hasOwnProperty(temp[i]) ? obj[temp[i]] += 1 : obj[temp[i]] = 1;
      }
    }
    console.log(obj);
  }
  return obj;
}

module.exports = {
  getDNSStats
};
