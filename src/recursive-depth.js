const CustomError = require("../extensions/custom-error");
class DepthCalculator {

  calculateDepth(arr, level = 1) {
    const maxLevel = [level, ];
    for(let arrEl of arr){
      if(Array.isArray(arrEl)){
        maxLevel.push( this.calculateDepth(arrEl, level + 1) );
      }
    }
    return Math.max(...maxLevel);
  }

}

module.exports = DepthCalculator;