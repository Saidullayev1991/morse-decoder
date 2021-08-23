const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let strToArr = expr.split("**********");
  let result = "";
  for (let i = 0; i < strToArr.length; i++) {
    let symbols = strToArr[i].match(/.{1,10}/g);
    symbols.forEach(
      (symbol) =>
        (result +=
          MORSE_TABLE[
            `${symbol
              .replace(/00/g, "")
              .replace(/10/g, ".")
              .replace(/11/g, "-")}`
          ])
    );
    result += " ";
  }
  return result.trim();
}

module.exports = {
  decode,
};
