var numberGen = require('./number-gen.js');
//
// var randomNumber = numberGen.randomNumber(minNumber, maxNumber);

function converter(val) {
  
val = '$' + val.toLocaleString();
return val;
}

// console.log(converter(350928734));
module.exports = {
  converter: converter
}
