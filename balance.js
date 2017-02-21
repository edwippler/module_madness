var numberGen = require('./number-gen.js');
var dollars = require('./dollars.js');

var minNumber = 100;
var maxNumber = 1000000;

var generatedNumber = numberGen.randomNumber(minNumber, maxNumber);
// console.log(generatedNumber);

var convertedNumber = dollars.converter(generatedNumber);
// console.log(convertedNumber);

function formatMessage() {
  return 'Account balance: \n'
}

module.exports = {
  balance: convertedNumber,
  message: formatMessage
}
