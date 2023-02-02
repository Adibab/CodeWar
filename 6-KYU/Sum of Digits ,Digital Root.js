function digitalRoot(n) {
  let split = n.toString().split("");
  let sum = 0;
  split.forEach((element) => {
    sum += Number(element);
  });
  return sum >= 10 ? digitalRoot(sum) : sum;
}

let input = 493193;
console.log(digitalRoot(input));
// https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript