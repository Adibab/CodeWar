function oddOrEven(array) {
  let result = array.reduce((acc, ele) => acc + ele, 0);
  if (result % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}
// https://www.codewars.com/kata/5949481f86420f59480000e7/train/javascript