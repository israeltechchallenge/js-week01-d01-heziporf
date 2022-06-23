let matrix = [
  [2, 6, 11, 4, 13, 5],
  [5, 12, 1, 8, 32, 4],
  [10, 2, 3, 9, 1, 3],
  [6, 6, 1, 3, 13, 9],
];

let newArr = [];
let sum = 0;
let sum2 = 0;

// console.log(matrix.flat());

newArr = matrix.flat();
matrix = newArr;
// console.log(newArr);
// console.log(matrix);

function calculateMatrixSum(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    sum += matrix[i];
  }
  return sum;
}

// calculateMatrixSum(matrix);
console.log(calculateMatrixSum(matrix));
// console.log(matrix[0], matrix[1]);

// let sum = 0;

// console.log(matrix[0][2]);

// i=0, j=0,

// matrix[i][i]
// matrix[j][j]

// function calculateMatrixSum(matrix) {
//   for (let i = 0; i < matrix.length; i++) {
//     sum += matrix[i][i];
//     console.log(sum);

//     for (let j = 0; j < matrix.length; j++) {
//       sum += matrix[j][j];
//       // console.log(sum);
//     }
//     return sum;
//   }
// }

// calculateMatrixSum(matrix);
