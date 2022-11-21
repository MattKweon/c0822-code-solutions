const reduce = function (array, combine, initialValue) {
  let result = initialValue;
  let i = 0;
  if (arguments.length < 3) {
    result = array[0];
    i = 1;
  }
  for (; i < array.length; i++) {
    result = combine(result, array[i]);
  }
  return result;
};
