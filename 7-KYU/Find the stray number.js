function stray(numbers) {
  const newObj = {};
  for (let i = 0; i < numbers.length; i++) {
    const value = numbers[i];
    if (!newObj[value]) {
      newObj[value] = 1;
    } else {
      newObj[value]++;
    }
  }
  for (let [key, value] of Object.entries(newObj)) {
    if (value === 1) {
      return Number(key);
    }
  }
}


// https://www.codewars.com/kata/57f609022f4d534f05000024/train/javascript