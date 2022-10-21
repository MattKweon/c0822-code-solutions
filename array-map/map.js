function map(inputArray, transform) {
  const outputArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    const inputElement = inputArray[i];
    const outputElement = transform(inputElement);
    outputArray.push(outputElement);
  }
  return outputArray;
}
