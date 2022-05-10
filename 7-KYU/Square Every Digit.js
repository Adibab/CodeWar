// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
// Note: The function accepts an integer and returns an integer

function squareDigits(num){
    let string= num.toString();
    let newArray =[];
   for ( let i=0; i<string.length; i++){
     newArray[i] = string[i] * string[i];
   }
   return Number(newArray.join(''));
  }

 // codewar link -https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript
