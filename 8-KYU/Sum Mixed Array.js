// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.


//(using reduce method we can ask to return acc + ( plus sign is as its asking for sum) , Number ( means converting strings into number), then start from beginning so index is 0) 
function sumMix(x){

    return x.reduce((acc, c) => acc + Number(c), 0);
  }

//or

function sumMix(x){
    let result = 0;
    for (let n of x) {
      result += parseInt(n);
    }
    return result;
  }


//codewar link - https://www.codewars.com/kata/57eaeb9578748ff92a000009/train/javascript