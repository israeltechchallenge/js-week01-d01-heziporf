function compareNumbers(firstParameter, secondParameter) {
  if (firstParameter > secondParameter) {
    console.log(
      `The number ${firstParameter} is bigger than ${secondParameter}`
    );
  } else if (firstParameter < secondParameter) {
    console.log(`The number ${firstParameter} is less than ${secondParameter}`);
  } else if (firstParameter === secondParameter) {
    console.log(`The number ${firstParameter} is equal to ${secondParameter}`);
  }
}

export { compareNumbers };
