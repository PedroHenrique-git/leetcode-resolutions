/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const cache = new Map();

  const process = (stepsLeft) => {
    if (cache.has(stepsLeft)) {
      return cache.get(stepsLeft);
    }

    if (stepsLeft < 0) {
      return 0;
    }

    if (stepsLeft === 0) {
      return 1;
    }

    const oneStepAtTime = process(stepsLeft - 1);
    const twoStepsAtTime = process(stepsLeft - 2);

    cache.set(stepsLeft, oneStepAtTime + twoStepsAtTime);

    return cache.get(stepsLeft);
  };

  return process(n);
};

console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(4));
