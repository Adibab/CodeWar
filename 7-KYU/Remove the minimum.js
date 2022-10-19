function removeSmallest(numbers) {
  const copyOfArray = numbers.slice(0);
  const min = Math.min(...numbers);

  //  console.log(min)
  let filterednum = numbers.indexOf(min);
  copyOfArray.splice(filterednum, 1);
  return copyOfArray;
}


// https://www.codewars.com/kata/563cf89eb4747c5fb100001b/train/javascript