function scoreboard(string) {
  // code here!
  const scores = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    nil: 0,
  };
  let newArray = [];
  let splitedStr = string.split(" ");
  splitedStr.forEach((word) => {
    for (key in scores) {
      if (word.includes(key)) {
        newArray.push(scores[key]);
      }
    }
  });
  return newArray;
}
