function rgb(r, g, b) {
  return convertToRGB(r) + convertToRGB(g) + convertToRGB(b);
}

const convertToRGB = (rgbVal) => {
  if (rgbVal <= 0) return "00";
  if (rgbVal >= 255) return "FF";

  firstHex = parseInt(rgbVal / 16);
  secondHex = (rgbVal / 16 - firstHex) * 16;

  return getHexValue(firstHex) + getHexValue(secondHex);
};

const getHexValue = (digit) => {
  const rgbToHex = {
    0: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    10: "A",
    11: "B",
    12: "C",
    13: "D",
    14: "E",
    15: "F",
  };

  return rgbToHex[digit.toString()];
};
