function multi(arr) {
  return arr.reduce((acc, cur) => acc * cur, 1);
}
function add(arr) {
  return arr.reduce((acc, cur) => acc + cur, 0);
}
function reverse(str) {
  return str.split("").reverse().join("");
}


// https://www.codewars.com/kata/5844a422cbd2279a0c000281/train/javascript