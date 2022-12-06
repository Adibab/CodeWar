function orderFood(list) {
  let newObject = {};

  list.filter((person) => {
    if (newObject[person.meal]) {
      newObject[person.meal] += 1;
    } else {
      newObject[person.meal] = 1;
    }
  });

  return newObject;
}


// https://www.codewars.com/kata/583952fbc23341c7180002fd/solutions/javascript