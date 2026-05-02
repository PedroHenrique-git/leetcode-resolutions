/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (t.length !== s.length) {
    return false;
  }

  const mA = new Map();
  const mB = new Map();

  for (const [index, cA] of s.split("").entries()) {
    mA.set(cA, mA.has(cA) ? mA.get(cA) + 1 : 1);

    const cB = t.charAt(index);

    mB.set(cB, mB.has(cB) ? mB.get(cB) + 1 : 1);
  }

  for (const [letter, quantity] of mA.entries()) {
    if (!mB.has(letter) || mB.get(letter) !== quantity) {
      return false;
    }
  }

  return true;
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
