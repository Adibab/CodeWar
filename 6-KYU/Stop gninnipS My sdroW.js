function spinWords(string) {
  let splittedStr = string
    .split(" ")
    .map((word) =>
      word.length >= 5 ? word.split("").reverse().join("") : word
    )
    .join(" ");

  return splittedStr;
}

let input = "Hey fellow warriors";
console.log(spinWords(input));
// https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript