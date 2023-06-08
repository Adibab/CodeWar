function string(str) {
  //...

  let strSplitted = str.split(" ");
  return strSplitted
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

let input = "How can mirrors be real if our eyes aren't real";
console.log(string(input));
