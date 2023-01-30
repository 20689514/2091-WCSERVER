var calcu = {
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

module.exports = calcu;

exports.rateperhr = '300';
exports.tax = 720;
exports.sss = 1200;
exports.pagibig = 300;
exports.phealth = 400;
exports.deductions =
  exports.tax + exports.sss + exports.pagibig + exports.phealth;
exports.grossS = exports.rateperhr * 24;
exports.netS = exports.grossS - exports.deductions;
