/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  const sum = (arr) => arr.reduce((acc, curr) => acc + curr, 0);

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    const left = nums.slice(0, i);
    const right = nums.slice(i + 1);

    if (sum(left) === sum(right)) {
      return i;
    }
  }

  return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
