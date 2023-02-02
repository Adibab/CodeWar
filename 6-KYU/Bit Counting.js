var countBits = function (n) {
  let num = n.toString(2).split("");
  console.log(num);
  let count = 0;
  num.forEach((element) => {
    count += Number(element);
  });
  return count;
};


// https://www.codewars.com/kata/526571aae218b8ee490006f4/train/javascript