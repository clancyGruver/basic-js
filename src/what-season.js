const CustomError = require("../extensions/custom-error");
module.exports = getSeason;
function getSeason(date) {
  //const now = new Date();
  if (!date){
    return 'Unable to determine the time of year!';
  }
  //if (now.getFullYear !== date.getFullYear || Object.getPrototypeOf(date) !== Date.prototype ){
  if ( Object.keys(date).length > 0 ){
    throw new Error('Not a Date');
  }
  const seasons = [
    'spring',
    'summer',
    'autumn',
    'winter'
  ];
  const month = date.getMonth();
  if(month > 1 && month < 5) return seasons[0];
  if(month > 4 && month < 8) return seasons[1];
  if(month > 7 && month < 11) return seasons[2];
  if(month > 10 || month < 2) return seasons[3];
}