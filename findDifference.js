/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  const result = [[], []];

  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  for (let i = 0; i < nums1.length; i++) {
    const num = nums1[i];

    if (!set2.has(num) && !result[0].includes(num)) {
      result[0].push(num);
    }
  }

  for (let i = 0; i < nums2.length; i++) {
    const num = nums2[i];

    if (!set1.has(num) && !result[1].includes(num)) {
      result[1].push(num);
    }
  }

  return result;
};

console.log(findDifference([1, 2, 3], [2, 4, 6]));
console.log(findDifference([1, 2, 3, 3], [1, 1, 2, 2]));
