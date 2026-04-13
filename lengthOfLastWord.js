/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const lastWord = s
    .trim()
    .split(" ")
    .filter((w) => w.trim())
    .at(-1);

  return lastWord.length;
};

console.log(lengthOfLastWord("Hello World"));
