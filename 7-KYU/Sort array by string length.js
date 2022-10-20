function sortByLength(array) {
  // Return an array containing the same strings, ordered from shortest to longest

  let sortedArray = array.sort((a, b) => a.length - b.length);
  return sortedArray;
}
// https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c/train/javascript