function titleCase(title, minorWords) {
  if (title.length === 0) {
    return "";
  }

  let minorArray;
  if (minorWords) {
    minorArray = minorWords.toLowerCase().split(" ");
  } else {
    minorArray = [];
  }

  let titleArray = title.toLowerCase().split(" ");
  console.log(titleArray);
//   titleArray[0] = capitalize(titleArray[0]);

  for (let i = 1; i < titleArray.length; i++) {
    if (minorArray.indexOf(titleArray[i]) === -1) {
      titleArray[i] = capitalize(titleArray[i]);
      console.log(titleArray[i]);
    }
  


  }
  return titleArray.join(" ");
}
let capitalize = (str) => {
  return str[0].toUpperCase() + str.slice(1);
}
