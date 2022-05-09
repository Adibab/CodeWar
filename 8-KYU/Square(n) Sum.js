//Complete the square sum function so that it squares each number passed into it and then sums the results together.
//For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbers){
    let newArray = 0;
      for ( let i=0; i<numbers.length; i++){
        newArray+= numbers[i] ** 2
      }
      return newArray;
    }

    // or using reduce method

    function squareSum(numbers){
        return numbers.reduce(function(sum, n){
          return (n*n) + sum;
        }, 0)
      }

     //codewar link - https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript