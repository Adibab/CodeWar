// Write a function which calculates the average of the numbers in a given list.
// 
// Note: Empty arrays should return 0.
// 
// FUNDAMENTALSFUNCTIONAL PROGRAMMING

function find_average(array) {
    if ( array.length ===0){
      return 0;
    }else{
      let sum =0;
      for(let i=0; i<array.length; i++){
        sum+= array[i];
      }
      return sum/array.length;
    }
   }

   // or

   function find_average(array) {
    if (array.length > 0) {
        let average = array.reduce((a, b) => a + b) / array.length
        return average
    } else {
        return 0;
    }}

    // codewar link -https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript