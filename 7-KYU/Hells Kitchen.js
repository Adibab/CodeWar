// Gordon Ramsay shouts. He shouts and swears. There may be something wrong with him.

// Anyway, you will be given a string of four words. Your job is to turn them in to Gordon language.

// Rules:

// Obviously the words should be Caps, Every word should end with '!!!!', Any letter 'a' or 'A' should become '@', Any other vowel should become '*'.

function gordon(a) {
  let wordArray = a.split(" ");
  let newWordArray = [];
  let vowelArray = "a, e, i o, u";
  wordArray.filter((item) => {
    newWordArray.push(
      item
        .concat("!!!!")
        .replace(/[a]/gi, "@")
        .replace(/[A]/gi, "@")
        .replace(/[eiou]/gi, "*")
        .toUpperCase()
    );
  });
  return newWordArray.join(" ").toString();
}
https://www.codewars.com/kata/57d1f36705c186d018000813