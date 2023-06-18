function solution(number) {
  let answer = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      answer += i;
    } else {
      continue;
    }
  }
  return answer;
}



function solution(number) {
  let newArray = [];
  let answer = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      newArray.push(i);
    }
  }
  return newArray.reduce((a, b) => a + b, 0);
}
https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript