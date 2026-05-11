const map = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let num = 0;
  let previous = 0;

  for (let i = 0; i < s.length; i++) {
    const digit = s.charAt(i);

    const v1 = map[digit];

    num += v1 > previous ? v1 - previous * 2 : v1;
    previous = v1;
  }

  return num;
};

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
