function isPangram(string) {
  var regex = /([a-z])(?!.*\1)/g;
  return (string.match(regex) || []).length === 26;
}

let input = "The quick brown fox jumps over the lazy dog.";
let input2 = "This is not a pangram.";
console.log(isPangram(input));
console.log(isPangram(input2));
