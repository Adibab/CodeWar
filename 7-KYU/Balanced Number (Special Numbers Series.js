function balancedNum(number) {
  let string = String(number);
  let results = 0;
  for (let i = 0; i < string.length / 2 - 1; i++) {
    results += Number(string[i] - Number(string[string.length - 1 - i]));
    // console.log(string.length)
    // console.log (results)
  }

  return results == 0 ? "Balanced" : "Not Banalanced";
}

let input1 = 56239814;
console.log(balancedNum(input1));


// https://www.codewars.com/kata/5a4e3782880385ba68000018/solutions/javascript