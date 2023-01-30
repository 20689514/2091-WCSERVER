rate: 300,
tax: 720,
sss: 1200,
pagibig: 300,
phealth: 400,
deductions: tax + sss + pagibig + phealth;
grossS: rate * 24,
netS: grossS - deductions

var calcu: {
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

module.exports: calcu;

rateperhr: 300,
tax: 720,
sss: 1200,
pagibig: 300,
phealth: 400,
deductions: tax + sss + pagibig + phealth,
grossS: rate * 24,
netS: grossS - deductions,