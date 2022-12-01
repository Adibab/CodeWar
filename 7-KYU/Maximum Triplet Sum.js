function maxTriSum(numbers) {
  //your code here
  numbers.sort((a, b) => a - b);
  return [...new Set(numbers)].slice(-3).reduce((acc, cur) => acc + cur, 0);
}
let numbers = [3, 2, 6, 8, 2, 3];
let numbers2 = [2, 1, 8, 0, 6, 4, 8, 6, 2, 4];
let numbers3 = [-7, 12, -7, 29, -5, 0, -7, 0, 0, 29];

console.log(maxTriSum(numbers));
console.log(maxTriSum(numbers2));
console.log(maxTriSum(numbers3));
