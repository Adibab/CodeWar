function order(words) {
  if (!words) {
    return words;
  }
  let str = words.split(" ");
  let obj = {};
  let regex = /\d+/g;
  for (let element of str) {
    let number = element.match(regex);
    // each number [2, 1, 4, 3] will be set up as  per element
    obj[number] = element;
  }
  return Object.values(obj).join(" ");
}

let input = "is2 Thi1s T4est 3a";
console.log(order(input));


// https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript