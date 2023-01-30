//Task Name: Prelim Hands On
//Author: Chrisjohn G. Crisostomo
//Section: WD-201

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

  rateperhr: 300,
  tax: 720,
  sss: 1200,
  pagibig: 300,
  phealth: 400,
  deduction: this.tax + this.sss + this.pagibig + this.phealth,
  grossS: this.rateperhr * 24,
  netS: this.grossS - this.deduction,
};

module.exports = calcu;
