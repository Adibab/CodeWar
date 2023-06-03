function uniqueInOrder(iterable) {
  let newArray = [];
  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] !== iterable[i + 1]) {
      newArray.push(iterable[i]);
    }
  }

  return newArray;
}

let input = "AAAABBBCCDAABBB";
console.log(uniqueInOrder(input));
