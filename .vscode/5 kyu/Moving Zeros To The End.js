function moveZeros(arr) {
  let newArray = [];
  let zeroArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      newArray.push(arr[i]);
    } else {
      zeroArray.push(arr[i]);
    }
  }
  // return newArray;
  return newArray.concat(zeroArray);
}

let input = [false, 1, 0, 1, 2, 0, 1, 3, "a"];
let input2 = [1, 2, 0, 1, 0, 1, 0, 3, 0, 1];

console.log(moveZeros(input));
console.log(moveZeros(input2));
