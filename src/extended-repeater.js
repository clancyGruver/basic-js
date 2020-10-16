const CustomError = require("../extensions/custom-error");
module.exports = repeater;

function repeater(str, options) {
  str = '' + str;
  let repeatTimes = options.repeatTimes || 1;
  const separator = options.separator || '+';
  const addition = options.addition !== undefined ? '' + options.addition : '';
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator  = options.additionSeparator || '|';
  let resultString = '';

  while (repeatTimes > 0){
    resultString += str;
    if (addition){
      let times = additionRepeatTimes;
      while (times > 0){
        resultString += addition;
        times--;
        resultString += times ? additionSeparator : '';
      }

    }
    repeatTimes--;
    resultString += repeatTimes ? separator : '';
  }

  return resultString;
};