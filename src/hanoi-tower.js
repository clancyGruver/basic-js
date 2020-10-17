const CustomError = require("../extensions/custom-error");
module.exports = calculateHanoi;

function calculateHanoi(disksNumber, turnsSpeed) {
  const secondsPerHour = 3600;

  const turns = turnsRequired(disksNumber);
  const seconds = Math.floor(secondsPerHour / turnsSpeed * turns);

  return {turns, seconds};

  function turnsRequired(disksNumber){
    if(disksNumber == 1) return 1;
    return 2 * turnsRequired(disksNumber - 1) + 1;
  }
};
