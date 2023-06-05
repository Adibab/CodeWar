function narcissistic(value) {
  // Code me to return true or false
  let splittedValue = value.toString().split("");
  let newArray = [];
  // console.log(splittedValue);
  // console.log(splittedValue.length);
  for (let i = 0; i < splittedValue.length; i++) {
    newArray.push(Math.pow(splittedValue[i], splittedValue.length));
  }
  if (newArray.reduce((a, b) => a + b, 0) === value) {
    return true;
  } else {
    return false;
  }
}

let input = 153;
console.log(narcissistic(input));
