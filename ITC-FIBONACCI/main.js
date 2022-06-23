//CONTINUE FROM THIS VERS

let fibonacciText = document.getElementById('Fibonacci');

let x = 7;
let y = 13;

// [0, 1, 1, 2, 3, 5, 8, 13]

// x (the index) is in the 7th element in the sequent(start from zero)

fibonacciText = `The Fibonacci of ${x} is ${y}`;

document.getElementById('Fibonacci').innerText = fibonacciText;
