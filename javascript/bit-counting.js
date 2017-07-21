var countBits = function(n) {
  var binaryNumber = parseInt(n,10).toString(2);
  
  var arrBitOne = binaryNumber.match(/1/gi);
  return arrBitOne ? arrBitOne.length : 0;
};