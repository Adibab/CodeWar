function twoSum(numbers, target) {
  // ...

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      let complement = numbers[i] + numbers[j];

      if (complement === target) {
        return [i, j];
      }
    }
  }
}

let input = [1, 2, 3];
let input2 = 4;

console.log(twoSum(input, input2));
