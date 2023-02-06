function expandedForm(num) {
  let newArray = num.toString();
  let results = [];
  let multiplier = 1;
  for (let i = 1; i <= newArray.length; i++) {
    const digit = newArray[newArray.length - i];
    digit > 0 && results.unshift(digit * multiplier);
    multiplier *= 10;
  }
  return results.join(" + ");
}

let input = 70304;
console.log(expandedForm(input));
