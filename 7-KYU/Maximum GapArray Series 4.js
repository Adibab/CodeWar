function maxGap(numbers) {
  let gap = [];
  //your code here
  let sortedArray = numbers.sort((a, b) => a - b);
  //   console.log(sortedArray)
  for (let i = 0; i < sortedArray.length - 1; i++) {
    gap.push(sortedArray[i + 1] - sortedArray[i]);
  }
  //   console.log(gap)
  return Math.max(...gap);
}

// https://www.codewars.com/kata/5a7893ef0025e9eb50000013/train/javascript