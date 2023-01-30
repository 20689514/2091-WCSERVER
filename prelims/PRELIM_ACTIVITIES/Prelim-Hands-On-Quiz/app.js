//Task Name: Prelim Hands On
//Author: Chrsijohn G. Crisostomo
//Section: WD-201

var calc = require('./calculation.js');
var http = require('http');

http
  .createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('Sum: ' + calc.add(6, 2));
    res.write('<br>Difference: ' + calc.subtract(6, 2));
    res.write('<br>Product: ' + calc.multiply(6, 2));
    res.write('<br>Quotient: ' + calc.divide(6, 2));

    res.write('<br><br><br>*********************************');
    res.write('<br>Gross income: ' + calc.grossS);
    res.write('<br>Tax: ' + calc.tax);
    res.write('<br>SSS: ' + calc.sss);
    res.write('<br>Pag-Ibig fund: ' + calc.pagibig);
    res.write('<br>PhilHealth: ' + calc.phealth);
    res.write('<br>Total deductions:: ' + calc.deduction);
    res.write('<br>Net salary: ' + calc.netS);

    res.end();
  })
  .listen(8080);
