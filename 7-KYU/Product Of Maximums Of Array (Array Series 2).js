// Task
// Given an array/list [] of integers , Find the product of the k maximal numbers.
// Input >> Output Examples
// maxProduct ({4, 3, 5}, 2) ==>  return (20)
// Explanation:
// Since the size (k) equal 2 , then the subsequence of size 2 whose gives product of maxima is 5 * 4 = 20 .

function maxProduct(numbers, size) {
  let sortedArray = numbers.sort((a, b) => b - a).slice(0, size);
  return sortedArray.reduce((acc, cur) => acc * cur, 1);
}

// https://www.codewars.com/kata/5a63948acadebff56f000018/train/javascript