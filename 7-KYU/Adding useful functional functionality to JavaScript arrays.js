Array.range = function range(start, count) {
  return Array.from({ length: count }, (_, index) => start + index);
};
Array.prototype.sum = function () {
  return this.reduce((a, b) => a + b, 0);
};
// https://www.codewars.com/kata/52195c9bb576caf14200007f/train/javascript