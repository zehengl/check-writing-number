let notANumber = "Oops! This is not a number.";

let units = [
  "",
  "Thousand",
  "Million",
  "Billion",
  "Trillion",
  "Quadrillion",
  "Quintillion",
  "Sextillion",
  "Septillion"
];

let matches = [
  "Zero",
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
      if (+chunk === 0) return "";
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
    return !isNaN(value)
      ? translate(chunkArray(parts[0])) + " and 00/100 Dollar"
      : notANumber;
  } else {
    let [integers, decimals] = parts;
    let valueIntegers = integers ? +integers : 0;
    let valueDecimals = decimals ? +decimals : 0;
    let valid = !isNaN(valueIntegers) && !isNaN(valueDecimals);

    let strIntegers = translate(chunkArray(integers));
    if (strIntegers) {
      strIntegers += " and ";
    }

    let strDecimals = decimals ? decimals.slice(0, 2) : "00";

    return valid ? strIntegers + strDecimals + "/100 Dollar" : notANumber;
  }
};

export { convert };
