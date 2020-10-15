const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(typeof sampleActivity !== typeof '') return false;

  sampleActivity = parseFloat(sampleActivity);
  const t = 0.693;
  const k = t / HALF_LIFE_PERIOD;
  const age = (Math.log10(MODERN_ACTIVITY / sampleActivity)) / k;

  return isFinite(age) && age > 0 ? Math.ceil(age) : false;
};
