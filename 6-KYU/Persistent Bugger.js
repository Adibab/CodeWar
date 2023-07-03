function persistence(num) {
  //code me
  // let count = 0;

  // if (num.toString().length === 1) {
  //   return count;
  // }

  // let multiply = 1;
  // let convertToArray = num.toString().split("");
  // // console.log(convertToArray);
  // for (let i = 0; i <= convertToArray.length; i++) {
  //   multiply *= parseFloat(convertToArray[i]);
  // }
  // return  1 + persistence(parseFloat(multiply));

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
