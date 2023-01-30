//Task Name: Prelim Hands On
//Author: Chrisjohn G. Crisostomo
//Section: WD-201

var calc = require('./calculation.js');

var grossS = calc.hourWork * calc.ratePerHour * calc.day;
var deduction = calc.tax + calc.sss + calc.pagibig + calc.phealth;
netS = grossS - deduction;

console.log('Sum: ' + calc.add(6, 2));
console.log('Difference: ' + calc.subtract(6, 2));
console.log('Product: ' + calc.multiply(6, 2));
console.log('Quotient: ' + calc.divide(6, 2));
console.log(' ');
console.log('*********************************');
console.log('Gross income: ' + grossS);
console.log('Tax: ' + calc.tax);
console.log('SSS: ' + calc.sss);
console.log('Pag-Ibig fund: ' + calc.pagibig);
console.log('PhilHealth: ' + calc.phealth);
console.log('Total deductions: ' + deduction);
console.log('Net salary: ' + netS);
