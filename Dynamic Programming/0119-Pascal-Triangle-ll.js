/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    if (rowIndex === 0) return [1];
    if (rowIndex === 1) return [1, 1];

    let triangle = [[1], [1, 1]];

    for (let i = 2; i <= rowIndex; i++) {
        let newArray = [1];
        let prevRow = triangle[i - 1];
        for (let j = 1; j < i; j++) {
            newArray[j] = prevRow[j] + prevRow[j - 1];
        }
        newArray.push(1);
        triangle.push(newArray);
    }

    return triangle[rowIndex];
};

console.log(getRow(5)); 