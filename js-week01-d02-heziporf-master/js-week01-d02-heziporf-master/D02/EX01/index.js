let array = [1, 2, 3, 4, 5, 6, 7, 8];
let sum = 0;
let sum2 = 0;
function sumNumbersWhileLoop(array) {
  let i = 0;
  while (i < array.length) {
    sum += array[i];
    i++;
  }
  console.log(sum);
}

sumNumbersWhileLoop(array);

function sumNumbersForLoop(array) {
  for (let i = 0; i < array.length; i++) {
    sum2 += array[i];
  }
  console.log(sum2);
}

sumNumbersForLoop(array);

// Do not remove or change this line, or the tests won't work
export { sumNumbersWhileLoop, sumNumbersForLoop };

// In the JS file, create a function that takes as argument an array of numbers (as many as you want), create a while loop that calculates the sum of all the numbers in this array, and log it to the console. Then, do the same with a for loop. Both functions should print the value in the console and return it. To test this exercise run: npm run testex1
