/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  if (n === 1) {
    return true;
  }

  let current = n;
  const seen = new Set();

  while (true) {
    seen.add(current);

    const sum = current
      .toString()
      .split("")
      .map((d) => Math.pow(Number(d), 2))
      .reduce((acc, curr) => acc + curr, 0);

    if (seen.has(sum)) {
      break;
    }

    current = sum;

    if (current === 1) {
      return true;
    }
  }

  return false;
};

console.log(isHappy(19));
console.log(isHappy(2));
console.log(isHappy(7));
