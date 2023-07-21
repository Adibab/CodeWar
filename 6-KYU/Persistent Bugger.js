function persistence(num) {
  if (num.toString().length === 1) {
    return 0;
  }

  let splitStr = num.toString().split("");
  let count = 0;
  let newlist;
  while (splitStr.length > 1) {
    newlist = splitStr.reduce((acc, cur) => {
      return (acc *= cur);
    });
    console.log(newlist);
    splitStr = newlist.toString().split("");
    count++;
  }

  return count;
}
// let input = 999;
console.log(persistence(input));

function persistence(num) {
  if (num.toString().length === 1) {
    return 0;
  }

  let splitStr = num.toString().split("");
  let count = 0;
  let newlist;
  while (splitStr.length > 1) {
    newlist = splitStr.reduce((acc, cur) => {
      return (acc *= cur);
    });
    console.log(newlist);
    splitStr = newlist.toString().split("");
    count++;
  }

  return count;
}
let input = 999;
console.log(persistence(input));
