function strong(n) {
  let str = [...String(n)].map((element) => {
    let result = 1;
    for (let i = element; i > 0; i--) {
      result *= i;
    }
    return result;
    // console.log(result)
  });
  return str.reduce((acc, c) => {
    return acc + c;
  }) == n
    ? "STRONG!!!!"
    : "Not Strong !!";
}

let input1 = 5;
console.log(strong(input1));


// https://www.codewars.com/kata/5a4d303f880385399b000001/train/javascript