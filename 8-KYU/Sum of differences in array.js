// Your task is to sum the differences between consecutive pairs in the array in descending order.
// 
// Example
// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]
// 
// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9
// 
// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell


function sumOfDifferences(arr) {
    let  newarray =0;
    arr.sort((a,b) => b-a);
    for ( let i=0; i<arr.length-1; i++){
     newarray += arr[i] - arr[i+1]
    } return newarray;
  }

//   https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e/train/javascript