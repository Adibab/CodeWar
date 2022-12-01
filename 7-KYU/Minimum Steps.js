function minimumSteps(numbers, value) {
  let sorted = numbers.sort((a, b) => a - b);
  // console.log (sorted)
  let sum = 0;
  for (let i = 0; i < sorted.length; i++) {
    sum += sorted[i];
    if (sum >= value) return i;
  }
}

// https://www.codewars.com/kata/5a91a7c5fd8c061367000002/train/javascript