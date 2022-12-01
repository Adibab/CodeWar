function accum(s) {
  // your code
  let newArray = [];
  let splittedStr = s.split("");
  // console.log(splittedStr)

  for (let i = 0; i < splittedStr.length; i++) {
    newArray.push(
      splittedStr[i].toUpperCase() +
        Array(i + 1).join(splittedStr[i].toLowerCase())
    );
  }
  return newArray.join("-");
}

let input = "abcd";
// -> "A-Bb-Ccc-Dddd"
console.log(accum(input));
// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript