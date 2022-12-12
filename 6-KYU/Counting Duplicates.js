function duplicateCount(text) {
  let count = 0;
  let object = {};

  for (let ele of text) {
    ele = ele.toLowerCase();
    if (!object[ele]) {
      object[ele] = 1;
    } else {
      object[ele]++;
    }
  }

  for (ele in object) {
    if (object[ele] > 1) {
      count++;
    }
  }
  return count;
}

let var1 = "ABBA";

let var2 = "Indivisibilities";
console.log(duplicateCount(var1));


// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript