function modulo(firstParameter, secondParameter) {
  const moduloVar = firstParameter % secondParameter;
  if (firstParameter > secondParameter || moduloVar != 0) {
    console.log(
      `The modulo of ${firstParameter} % ${secondParameter} is ${moduloVar}`
    );
  }
  if (firstParameter > secondParameter) {
    console.log(
      `The number ${firstParameter} is bigger than ${secondParameter}`
    );
  } else if (firstParameter === secondParameter) {
    console.log(`The number ${firstParameter} is equal to ${secondParameter}`);
  } else if (firstParameter < secondParameter) {
    console.log(`The number ${firstParameter} is less than ${secondParameter}`);
  }
}

// Do not remove or change this line, or the tests won't work
export { modulo };
