/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const complement = target - num;

    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    map.set(num, i);
  }

  return [];
};

console.log({ result: twoSum([2, 7, 11, 15], 9) });
console.log({ result: twoSum([3, 2, 4], 6) });
