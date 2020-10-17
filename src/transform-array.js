const CustomError = require("../extensions/custom-error");
module.exports = transform;

function transform(arr) {
  if (!Array.isArray(arr)) throw new Error('Not an Array');
  const initArr = [...arr];
  const result = [];
  let isContinue = false;

  for (let i = 0; i < initArr.length; i++){
    if(isContinue){
      isContinue = !isContinue;
      continue;
    }
    const arrElement = initArr[i];
    const nextEl = initArr[i + 1];
    if(nextEl == '--discard-prev' || arrElement == '--discard-prev' || arrElement == '--double-prev'){
      continue;
    }
    if(nextEl == '--double-prev'){
      result.push(arrElement);
      result.push(arrElement);
      continue;
    }
    if(arrElement == '--discard-next'){
      isContinue = true;
      continue;
    }
    if(arrElement == '--double-next'){
      if(nextEl !== undefined){
        result.push(nextEl);
      }
      continue;
    }
    result.push(arrElement);
  }

  return result;
}