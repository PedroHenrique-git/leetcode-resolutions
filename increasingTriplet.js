/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  let smallest = Number.MAX_SAFE_INTEGER;
  let secondSmallest = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (num <= smallest) {
      smallest = num;
    } else if (num <= secondSmallest) {
      secondSmallest = num;
    } else {
      return true;
    }
  }

  return false;
};
