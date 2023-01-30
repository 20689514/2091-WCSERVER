var calc = {
  add: function add(a, b) {
    return a + b;
  },
  subtract: function subtract(a, b) {
    return a - b;
  },
  multiply: function multiply(a, b) {
    return a * b;
  },
  divide: function divide(a, b) {
    return a / b;
  },
};

module.exports = calc;

var rateperhr = 300;
var tax = 720;
var sss = 1200;
var pagibig = 300;
var phealth = 400;
var deductions = tax + sss + pagibig + phealth;
var grossS = rateperhr * 24;
var netS = grossS - deductions;
