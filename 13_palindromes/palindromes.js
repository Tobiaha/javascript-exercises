const palindromes = function (string) {
  const alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789";
  const cleanedString = string
    .toLowerCase()
    .split("")
    .filter((character) => alphanumerical.includes(character))
    .join("");

  const reverseString = cleanedString.split("").reverse().join("");
  return reverseString === cleanedString;
};

// Do not edit below this line
module.exports = palindromes;
