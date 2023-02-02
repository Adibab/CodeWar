function arrayDiff(a, b) {
  return a.filter((e) => !b.includes(e));
}

let input = ([1, 2, 2, 2, 3], [2]);
console.log(arrayDiff(input));

// https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript