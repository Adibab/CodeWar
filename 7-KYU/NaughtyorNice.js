function naughtyOrNice(data) {
  let counter = {
    naughty: 0,
    nice: 0,
  };

  for (month in data) {
    for (key in data[month]) {
      if (data[month][key] === "naughty") {
        counter.naughty++;
      } else {
        counter.nice++;
      }
    }
  }

  return counter.naughty > counter.nice ? "Naughty!" : "Nice!";
}

let input1 = {
  January: {
    1: "Naughty",
    2: "Naughty",
    31: "Nice",
  },
};

console.log(naughtyOrNice(input1));
