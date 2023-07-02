function solution(str) {
  let arr = [];
  let splitStr = str.split("");
  // console.log(splitStr);
  for (let i = 0; i < splitStr.length; i += 2) {
    if (splitStr[i + 1]) {
      arr.push(splitStr[i] + splitStr[i + 1]);
    } else {
      arr.push(splitStr[i] + "_");
    }
  }
  return arr;
}
let input = "abc";
let input2 = "abcdef";

console.log(solution(input));
