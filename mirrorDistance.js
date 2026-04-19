/**
 * @param {number} n
 * @return {number}
 */
var mirrorDistance = function (n) {
  const reserve = (n) => Number(String(n).split("").reverse().join(""));

  return Math.abs(n - reserve(n));
};

console.log(mirrorDistance(25));
