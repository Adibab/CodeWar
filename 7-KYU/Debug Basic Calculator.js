var calculate = function calculate(a, o, b) {
  if (o === "+") {
    return a + b;
    console.log(a + b);
  } else if (o === "-") {
    return a - b;
  } else if (o === "/" && !isNaN(a) && b !== 0) {
    return a / b;
  } else if (o === "*") {
    return a * b;
  } else {
    return null;
  }
};


// https://www.codewars.com/kata/56368f37d464c0a43c00007f/train/javascript