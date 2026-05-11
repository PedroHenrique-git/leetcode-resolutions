/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function (nums) {
  return nums.join("").split("").map(Number);
};

console.log(separateDigits([13, 25, 83, 77]));
