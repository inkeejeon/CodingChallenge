const input = require("readline-sync");

function FirstReverse(str) { 
  let reverseString;
  reverseString = str.split('').reverse().join('');
  str = reverseString
  return str; 
  // return str.split('').reverse().join('');
}
   
// keep this function call here 
console.log(FirstReverse(readline()));