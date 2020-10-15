const CustomError = require("../extensions/custom-error");

function countCats(matrix) {
  let catsCount = 0;
  matrix.forEach(arr => arr.forEach( (currEl) => catsCount += currEl == '^^' ? 1 : 0 ));
  return catsCount;
}

module.exports = countCats;