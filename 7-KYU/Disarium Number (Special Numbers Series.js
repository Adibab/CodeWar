function disariumNumber(n) {
  let num = n
    .toString()
    .split("")
    .map((element) => Number(element));
  // console.log(num);

  let result = 0;
  for (let i = 0; i < num.length; i++) {
    // console.log(num[i - 1]);
    // console.log(i);
    result += Math.pow(parseInt(num[i]), i + 1);
  }
  return result == n ? "Disarium !!" : "Not !!";
}

let input1 = 564;
console.log(disariumNumber(input1));
