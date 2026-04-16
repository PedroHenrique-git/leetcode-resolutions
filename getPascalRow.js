/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const triangle = [];

  for (let i = 0; i < numRows; i++) {
    triangle[i] = [];

    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        triangle[i][j] = 1;
      } else {
        triangle[i][j] = triangle[i - 1][j] + triangle[i - 1][j - 1];
      }
    }
  }

  return triangle;
};

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  const triangle = generate(rowIndex + 1);

  return triangle[rowIndex];
};

console.log(getRow(3));
