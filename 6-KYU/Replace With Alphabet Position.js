function alphabetPosition(text) {
  let upperText = text.toUpperCase();
  // return upperText;
  let letterArray = upperText.split("").map((letter) => letter.charCodeAt());
  const newArray = letterArray.filter((eachLetter) => {
    if (eachLetter > 64 && eachLetter < 91) {
      return eachLetter;
    }
  });

  const updatedLetter = newArray.map((eachLetter) => eachLetter - 64);

  return updatedLetter.join(" ");
}

let input = "The sunset sets at twelve o' clock.";
console.log(alphabetPosition(input));
