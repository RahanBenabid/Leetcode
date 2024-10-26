var generate = function (numRows) {
  if (numRows === 0) return [];
  if (numRows === 1) return [[1]];

  let triangle = [[1]];

  for (let i = 1; i < numRows; i++) {
    let prevRow = triangle[i - 1];
    let newRow = [1];
    for (let j = 1; j < i; j++) {
      newRow[j] = prevRow[j] + prevRow[j - 1];
    }
    newRow.push(1);
    triangle.push(newRow);
  }

  return triangle;
};

console.log(generate(5));
