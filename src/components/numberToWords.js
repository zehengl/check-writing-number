let notANumber = "Oops! This is not a number.";

// See https://en.wikipedia.org/wiki/Names_of_large_numbers
let units = [
  "",
  "Thousand",
  "Million",
  "Billion",
  "Trillion",
  "Quadrillion",
  "Quintillion",
  "Sextillion",
  "Septillion",
  "Octillion",
  "Nonillion",
  "Decillion",
  "Undecillion",
  "Duodecillion",
  "Tredecillion",
  "Quattuordecillion",
  "Quindecillion",
  "Sexdecillion",
  "Septendecillion",
  "Octodecillion",
  "Novemdecillion",
  "Vigintillion"
];

let matches = [
  "",
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
  "Ten",
  "Eleven",
  "Twelve",
  "Thirteen",
  "Fourteen",
  "Fifteen",
  "Sixteen",
  "Seventeen",
  "Eighteen",
  "Nineteen"
];

let tens = [
  "Twenty",
  "Thirty",
  "Forty",
  "Fifty",
  "Sixty",
  "Seventy",
  "Eighty",
  "Ninety"
];

let chunkArray = arr => {
  let index = arr.length;
  let temp = [];
  for (; index >= 0; index -= 3) {
    let chunk = arr.slice(index - 3 >= 0 ? index - 3 : 0, index);
    if (chunk) {
      temp.push(chunk);
    }
  }
  return temp;
};

let chunkToWords = chunk => {
  let value = parseInt(chunk);
  if (value < 20) return matches[value];
  let digit = value % 10;
  if (value < 100)
    return tens[~~(value / 10) - 2] + (digit ? "-" + matches[digit] : "");
  if (value < 1000)
    return (
      matches[~~(value / 100)] +
      " Hundred" +
      (value % 100 == 0 ? "" : " " + chunkToWords(value % 100))
    );
};

let translate = chunks => {
  return chunks
    .map((chunk, i) => {
      return chunkToWords(chunk)
        ? chunkToWords(chunk) +
            (i === 0 ? "" : " ") +
            (i < units.length ? units[i] : `[1000^${i}]`)
        : "";
    })
    .reverse()
    .filter(Boolean)
    .join(" ");
};

let convert = str => {
  let parts = str.split(".");

  if (parts.length > 2) return notANumber;
  else if (parts.length === 1) {
    let value = +parts[0];
    if (isNaN(value)) return notANumber;
    else {
      let strIntegers = translate(chunkArray(parts[0]));
      return strIntegers + (strIntegers ? " and " : "") + "00/100 Dollar";
    }
  } else {
    let [integers, decimals] = parts;
    let valueIntegers = integers ? +integers : 0;
    let valueDecimals = decimals ? +decimals : 0;
    let valid = !isNaN(valueIntegers) && !isNaN(valueDecimals);

    let strIntegers = translate(chunkArray(integers));
    if (strIntegers) {
      strIntegers += " and ";
    }

    let strDecimals = decimals ? decimals.slice(0, 2).padEnd(2, "0") : "00";

    return valid ? strIntegers + strDecimals + "/100 Dollar" : notANumber;
  }
};

module.exports = { convert, chunkArray, chunkToWords, matches, tens };
