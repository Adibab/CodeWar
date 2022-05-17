// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
// 
// Note: input will never be an empty string

function fakeBin(x){
    let result1 = [];
     let array = x.split('');
     for (let i=0; i<array.length; i++){
       if(array[i] < 5){
         result1.push(array[i] = 0)
       } else{
         result1.push(array[i] = 1)
       }
     }
     return result1.join('');
   
   }

   //codewar link-- https://www.codewars.com/kata/57eae65a4321032ce000002d/train/javascript