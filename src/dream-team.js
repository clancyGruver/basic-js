const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  return Array.isArray(members) ?
          members.map( name => {
            if (isString(name)){
              name = name.trim();
              const letter = name[0].toUpperCase();
              if(letter.match(/[A-Z]/)) return letter;
            }
          }).sort().join('') :
          false;
};

function isString(word){
  return typeof word === typeof '';
}