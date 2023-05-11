function countSmileys(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let countSmilyFaces = [
    ":)",
    ";)",
    ":D",
    ";D",
    ":-D",
    ":~D",
    ":-)",
    ":~)",
    ";~D",
    ";~)",
    ";-D",
    ";-)",
  ];

  let newArray = 0;
  for (let i = 0; i < arr.length; i++) {
    if (countSmilyFaces.includes(arr[i])) {
      newArray++;
    }
  }
  return newArray;
}
// https://www.codewars.com/kata/583203e6eb35d7980400002a/train/javascript