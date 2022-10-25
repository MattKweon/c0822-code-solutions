function filter(inputArray, predicate) {
  const outputArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    const inputElement = inputArray[i];
    if (predicate(inputArray)) {
      outputArray.push(inputElement);
    }
  }
  return outputArray;
}
