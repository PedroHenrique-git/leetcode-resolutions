/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  if (n === 0) {
    return true;
  }

  let placed = 0;

  for (let i = 0; i < flowerbed.length; i++) {
    const space = flowerbed[i];
    const nextSpace = flowerbed[i + 1];
    const prevSpace = flowerbed[i - 1];

    if (space === 0 && !nextSpace && !prevSpace) {
      flowerbed[i] = 1;
      placed++;
    }

    if (placed === n) {
      return true;
    }
  }

  return false;
};

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1));
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2));
console.log(canPlaceFlowers([1, 0, 0, 0, 0, 1], 2));
console.log(canPlaceFlowers([0, 0, 0, 0, 0, 1, 0, 0], 0));
