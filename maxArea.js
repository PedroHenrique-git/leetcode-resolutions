/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let i = 0,
    j = height.length - 1;

  let n1 = height[i],
    n2 = height[j];

  let max = 0;

  while (i <= j) {
    const h1 = height[i];
    const h2 = height[j];

    const area = (j - i) * Math.min(h1, h2);

    if (area > max) {
      max = area;
    }

    if (h1 > h2) {
      j--;
    } else {
      i++;
    }
  }

  return max;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
