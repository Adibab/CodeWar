function findOutlier(integers) {
  let odd = [];
  let even = [];
  for (let i = 0; i < integers.length; i++) {
    if (integers[i] % 2 !== 0) {
      odd.push(integers[i]);
    } else {
      even.push(integers[i]);
    }
  }
  if (odd.length < even.length) {
    return odd[0];
  } else {
    return even[0];
  }
}

let input = [2, 4, 0, 100, 4, 11, 2602, 36];
// Should return: 11 (the only odd number)
let input2 = [160, 3, 1719, 19, 11, 13, -21];

console.log(findOutlier(input));
console.log(findOutlier(input2));
