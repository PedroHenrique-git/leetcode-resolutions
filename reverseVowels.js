/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const vList = ["a", "e", "i", "o", "u"];
  const vowels = new Map();
  const newWord = s.split("");

  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);

    if (vList.includes(char.toLowerCase())) {
      vowels.set(i, char);
    }
  }

  const values = Array.from(vowels.entries());

  for (let i = 0, j = values.length - 1; i <= j; i++, j--) {
    const [indexI, valueI] = values[i];
    const [indexJ, valueJ] = values[j];

    newWord[indexI] = valueJ;
    newWord[indexJ] = valueI;
  }

  return newWord.join("");
};

console.log(reverseVowels("IceCreAm"));
console.log(reverseVowels("leetcode"));
