// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
// 
// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// Good Luck!


function doubleChar(str) {
    return [...str].map(s => s.repeat(2)).join('');
   }
  // Map - creats a new array from calling a function for every array element
  //[...]spread operator to copy whole array
  //repeat()- method indicating how many times the element will be repeated 
  // codewar link - https://www.codewars.com/kata/56b1f01c247c01db92000076/train/javascript