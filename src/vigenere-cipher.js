const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(type){
    this.type = type === false ? 'reverse' : 'direct';
    this.result = '';
  }

  encrypt(message, key) {
    if (arguments.length < 2){
      throw new Error('Too few parameters');
    }
    this.result = '';
    this.message = message.toUpperCase();
    this.createKey(key);
    for(let i = 0; i < this.message.length; i++){
      this.result += this.encryptChar(this.message[i], this.key[i]);
    }
    return this.display();
  }

  decrypt(message, key) {
    if (arguments.length < 2){
      throw new Error('Too few parameters');
    }
    this.result = '';
    this.message = message.toUpperCase();
    this.createKey(key);
    for(let i = 0; i < this.message.length; i++){
      this.result += this.decryptChar(this.message[i], this.key[i]);
    }
    return this.display();
  }

  encryptChar(char, cipherChar){
    return char.match(/[A-Z]/) ? String.fromCharCode(((char.charCodeAt(0) + cipherChar.charCodeAt(0)) % 26) + 'A'.charCodeAt(0)) : char;
  }

  decryptChar(char, cipherChar){
    return char.match(/[A-Z]/) ? String.fromCharCode((char.charCodeAt(0) - cipherChar.charCodeAt(0) + 26) % 26 + 'A'.charCodeAt(0)) : char;
  }

  display(){
    return this.type == 'direct'
            ? this.result.toUpperCase()
            : this.result.split('').reverse().join('').toUpperCase();
  }

  createKey(key){
    key = key.toUpperCase();
    this.key = '';
    if(this.message.length == this.key.length){
      return;
    } else {
      let keyLetterCounter = 0;
      for (let messageLetterCounter = 0; messageLetterCounter < this.message.length; messageLetterCounter++){
        if (this.message[messageLetterCounter].match(/[A-Z]/)){
          this.key += key[keyLetterCounter];
          keyLetterCounter = keyLetterCounter == key.length - 1 ? 0 : keyLetterCounter + 1;
        } else {
          this.key += ' ';
        }
      }
    }
  }
}

module.exports = VigenereCipheringMachine;