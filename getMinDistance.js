/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
var getMinDistance = function (nums, target, start) {
  let value = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < nums.length; i++) {
    const newValue = Math.abs(i - start);

    if (nums[i] === target && newValue < value) {
      value = newValue;
    }
  }

  return value;
};

console.log(getMinDistance([1, 2, 3, 4, 5], 5, 3));
console.log(getMinDistance([1], 1, 0));
console.log(getMinDistance([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1, 0));
console.log(getMinDistance([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1, 9));
