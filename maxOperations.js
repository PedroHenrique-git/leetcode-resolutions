/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
  const numsCopy = nums.toSorted((a, b) => a - b);

  let i = 0;
  j = numsCopy.length - 1;

  let numberOfOperations = 0;

  while (i < j) {
    const n1 = numsCopy[i];
    const n2 = numsCopy[j];
    const sum = n1 + n2;

    if (sum === k) {
      numberOfOperations++;

      i++;
      j--;
    } else if (sum > k) {
      j--;
    } else if (sum < k) {
      i++;
    }
  }

  return numberOfOperations;
};

//console.log(maxOperations([1, 2, 3, 4], 5));
//console.log(maxOperations([3, 1, 3, 4, 3], 6));
console.log(
  maxOperations([4, 4, 1, 3, 1, 3, 2, 2, 5, 5, 1, 5, 2, 1, 2, 3, 5, 4], 2),
);
