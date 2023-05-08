let input = "abc";
let input2 = "";
// returns true
// solution('abc', 'd') // returns false

function solution(str, ending) {
  if (ending.length === 0) return true;
  return str.substr(-ending.length) === ending;
}

console.log(solution(input, input2));

// https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript