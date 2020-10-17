const CustomError = require("../extensions/custom-error");

const chainMaker = {
  links: [],
  getLength() {
    return this.links.length;
  },
  addLink(value) {
    if(arguments.length < 1) value = ' ';
    value = '' + value;
    this.links.push(value);
    return this;
  },
  removeLink(position) {
    if(!isFinite(position) || this.links[position] === undefined) {
      this.links = [];
      throw new Error('Invalid position');
    }
    this.links.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.links.reverse();
    return this;
  },
  finishChain() {
    let result = '';
    for(let chainEl of this.links){
      result += `( ${chainEl} )~~`;
    }
    result = result.slice(0,-2);
    this.links = [];
    return result;
  }
};

module.exports = chainMaker;