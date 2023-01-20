function XO(str) {
  //code here
  let result = 0;
  str.split("").forEach((element) => {
    if ((x = element.toLowerCase())) {
      result += 1;
    } else if ((o = element.toLowerCase())) {
      result -= 1;
    }
  });

  return result === 0;
}
// https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript