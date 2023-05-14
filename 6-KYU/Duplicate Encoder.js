function duplicateEncode(words) {
  let newObject = {};
  let word = words.toLowerCase().split("");
  for (let i = 0; i < word.length; i++) {
    let value = word[i];
    if (newObject[value] === undefined) {
      newObject[value] = 1;
    } else {
      newObject[value] += 1;
    }
  }

  return word
    .map(function (word) {
      return newObject[word] === 1 ? "(" : ")";
    })
    .join("");
}

// or

function duplicateEncode(word) {
  var unique = "";
  word = word.toLowerCase();
  for (var i = 0; i < word.length; i++) {
    if (word.lastIndexOf(word[i]) == word.indexOf(word[i])) {
      console.log(word.lastIndexOf(word[i]));
      console.log(word.indexOf(word[i]));
      unique += "(";
    } else {
      unique += ")";
    }
  }
  return unique;
}
let input = "din";
let input2 = "recede";
console.log(duplicateEncode(input));
console.log(duplicateEncode(input2));
//
