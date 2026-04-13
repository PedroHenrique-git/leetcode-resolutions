/**
 *
 * @param {number} i
 * @param {number} j
 * @param {number} k
 * @returns {number}
 */
function calcDistance(i, j, k) {
  return 2 * (Math.max(i, j, k) - Math.min(i, j, k));
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDistance = function (nums) {
  let distance = Number.MAX_SAFE_INTEGER;
  const map = new Map();

  const processDistance = (indexes) => {
    if (indexes.length < 3) {
      return;
    }

    for (let i = 0; i < indexes.length; i++) {
      const newDistance = calcDistance(
        indexes[i],
        indexes[i + 1],
        indexes[i + 2],
      );

      if (newDistance < distance) {
        distance = newDistance;
      }
    }
  };

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (map.has(num)) {
      map.get(num).push(i);
    } else {
      map.set(num, [i]);
    }
  }

  for (const value of map.values()) {
    processDistance(value);
  }

  return distance === Number.MAX_SAFE_INTEGER ? -1 : distance;
};

console.log(minimumDistance([1, 2, 1, 1, 3]));
console.log(minimumDistance([1, 1, 2, 3, 2, 1, 2]));
console.log(minimumDistance([5, 3, 5, 5, 5]));
console.log(minimumDistance([5, 5, 5, 2, 5]));
