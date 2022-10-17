const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, obj = { repeatTimes: 0, separator: '', addition: '', additionRepeatTimes: 0, additionSeparator: '' }) {
  let add = '';
  let res = '';
  obj.hasOwnProperty('repeatTimes') ? obj.repeatTimes : obj.repeatTimes = 1;
  obj.hasOwnProperty('separator') ? obj.separator : obj.separator = '+';
  obj.hasOwnProperty('addition') ? obj.addition : obj.addition = '';
  obj.hasOwnProperty('additionRepeatTimes') ? obj.additionRepeatTimes : obj.additionRepeatTimes = 1;
  obj.hasOwnProperty('additionSeparator') ? obj.additionSeparator : obj.additionSeparator = '|';
  for(let i = 1; i <= obj.repeatTimes; i++ ) {

    for (let j = 1; j <= obj.additionRepeatTimes ? obj.additionRepeatTimes : 0; j++ ) {
      j < obj.additionRepeatTimes ? add += obj.addition + obj.additionSeparator : add += obj.addition;
    }
    i < obj.repeatTimes ? res += str + add + obj.separator : res += str + add;
    add = '';
  }
  
  return res;
}

module.exports = {
  repeater
};
