/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let newString = "";
  let i = 0;

  for (; i < word1.length; i++) {
    const char1 = word1.charAt(i);
    const char2 = word2.charAt(i);

    newString += char1;
    newString += char2;
  }

  if (word1.length < word2.length) {
    newString += word2.slice(i);
  }

  return newString;
};

mergeAlternately("abc", "pqr");

console.log();

mergeAlternately("ab", "pqrs");

console.log();

mergeAlternately("abcd", "pq");
