/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  const map = new Map();

  for (const item of arr) {
    map.set(item, map.has(item) ? map.get(item) + 1 : 1);
  }

  const values = Array.from(map.values());

  return new Set(values).size === values.length;
};

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3]));
console.log(uniqueOccurrences([1, 2]));
console.log(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]));
