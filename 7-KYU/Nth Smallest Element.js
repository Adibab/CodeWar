function nthSmallest(arr, pos) {
  let sortedArray = arr.sort((a, b) => a - b);
  // console.log(sortedArray)

  let newNum = sortedArray.find((ele, index) => index === pos - 1);
  return newNum;
}
