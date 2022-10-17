const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  if (!date.getMonth()) {throw new Error('Invalid date!');}
  let y = date.getFullYear();
  let m = date.getMonth();
  let d = date.getDate();
  if (d == 0 && m == 0) {
    m = 11;
  } else if (d == 0) {m -= 1}
  if (m > 1 && m < 5) {
    return 'spring';
  } else if (m > 4 && m < 8) {
      return 'summer';
    } else if (m > 7 && m < 11) {
        return 'autumn';
      } else return 'winter';

}

module.exports = {
  getSeason
};
