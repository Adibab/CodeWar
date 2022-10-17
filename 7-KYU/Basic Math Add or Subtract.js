// In this kata, you will do addition and subtraction on a given string. The return value must be also a string.

// Note: the input will not be empty.

// Examples
let  str1 = "1plus2plus3plus4" 

// "10"
// "1plus2plus3minus4" -->  "2"

function calculate(str) {
  //your code here...
  let splitedStr = str.split(' ').join("+");
  return splitedStr
}

console.log(calculate(str1))