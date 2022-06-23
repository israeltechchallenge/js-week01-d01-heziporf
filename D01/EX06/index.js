let h3Tag = document.getElementById('output');
let stringVar = '';

function moduloEx6(firstParameter, secondParameter) {
  // firstParameter = 8;
  // secondParameter = 3;
  const moduloVar = firstParameter % secondParameter;
  if (firstParameter > secondParameter && moduloVar != 0) {
    stringVar = `The number ${firstParameter} is bigger than ${secondParameter}. But the modulo of ${firstParameter} % ${secondParameter} is ${moduloVar}`;
  } else if (firstParameter > secondParameter) {
    stringVar = `The number ${firstParameter} is bigger than ${secondParameter}`;
  } else if (firstParameter === secondParameter) {
    stringVar = `The number ${firstParameter} is equal to ${secondParameter}`;
  } else if (firstParameter < secondParameter) {
    stringVar = `The number ${firstParameter} is less than ${secondParameter}`;
  }
  h3Tag.innerText = stringVar;
} //your code
moduloEx6(8, 3);
// In D01/EX06, create a website that runs the JS attached file. In that file, edit the function provided. Use as template your previous function. Instead of logging a string to the console, create a h3 tag with an id of ‘output’, and change the text of the tag according to the logic you implemented. This exercise does not have an automated test. Run it in your browser, and check the results.

// document.getElementById('output').innerText = h3Tag;

// console.log();

// letfibonacciText = document.getElementById('Fibonacci');
// let x = 7;
//  let y=13;
// fibonacciText = `stringVar`;
// document.getElementById('Fibonacci').innerText = fibonacciText;
