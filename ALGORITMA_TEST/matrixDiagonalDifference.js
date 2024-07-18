const matrixDiagonalDifference = (matrix) => {
    let primaryDiagonalSum = 0;
    let secondaryDiagonalSum = 0;

    const n = matrix.length;
    let primaryDiagonalElements = [];
    let secondaryDiagonalElements = [];

    for (let i = 0; i < n; i++) {
        primaryDiagonalSum += matrix[i][i];
        primaryDiagonalElements.push(matrix[i][i]);
        secondaryDiagonalSum += matrix[i][n - 1 - i];
        secondaryDiagonalElements.push(matrix[i][n - 1 - i]);
    }

    console.log(`diagonal pertama = ${primaryDiagonalElements.join(' + ')} = ${primaryDiagonalSum}`);

    console.log(`diagonal kedua = ${secondaryDiagonalElements.join(' + ')} = ${secondaryDiagonalSum}`);

    const difference = primaryDiagonalSum - secondaryDiagonalSum;

    console.log(`maka hasilnya adalah ${primaryDiagonalSum} - ${secondaryDiagonalSum} = ${difference}`);
};

const Matrix = [
    [1, 2, 0],
    [4, 5, 6],
    [7, 8, 9]
];

matrixDiagonalDifference(Matrix);
