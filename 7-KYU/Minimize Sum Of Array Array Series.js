function minSum(arr) {
  let sortedArray = arr.sort((a, b) => a - b);
  return sortedArray.reduce((acc, c) => acc + c * arr.pop(), 0);
}
// https://www.codewars.com/kata/5a523566b3bfa84c2e00010b/train/javascript