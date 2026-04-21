/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  const result = [];
  let greatest = 0;

  for (let i = 0; i < candies.length; i++) {
    if (candies[i] > greatest) {
      greatest = candies[i];
    }
  }

  for (let i = 0; i < candies.length; i++) {
    const numberOfCandies = candies[i];
    const numberOfCadiesPlusExtra = numberOfCandies + extraCandies;

    if (numberOfCadiesPlusExtra >= greatest) {
      greatest = numberOfCandies > greatest ? numberOfCandies : greatest;

      result.push(true);
    } else {
      result.push(false);
    }
  }

  return result;
};

//console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
//console.log(kidsWithCandies([4, 2, 1, 1, 2], 1));
//console.log(kidsWithCandies([12, 1, 12], 10));
//console.log(kidsWithCandies([2, 8, 7], 1));
console.log(kidsWithCandies([7, 2, 5, 6, 9, 9, 4, 5], 3));
