/* exported calculator */

var calculator = {
  add: function (x, y) {
    return x + y;
  },
  subtract: function (x, y) {
    return x - y;
  },
  multiply: function (x, y) {
    return x * y;
  },
  divide: function (x, y) {
    return x / y;
  },
  square: function (x) {
    return Math.pow(x, 2);
  },
  sumAll: function (numbers) {
    var output = 0;
    for (var i = 0; i < numbers.length; i++) {
      output += numbers[i];
    }
    return output;
  },
  getAverage: function (numbers) {
    var output = 0;
    for (var i = 0; i < numbers.length; i++) {
      output += numbers[i];
    }
    return output / numbers.length;
  }
};
