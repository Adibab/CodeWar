function findOdd(A) {
  let object = {};
  let count = 0;

  A.forEach((element, index) => {
    if (!object[element]) {
      return (object[element] = 1);
    } else {
      object[element]++;
    }
  });
  for (let ele in object) {
    if (object[ele] % 2 !== 0) {
      count = ele;
    }
  }
  return Number(count);
}


// https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript