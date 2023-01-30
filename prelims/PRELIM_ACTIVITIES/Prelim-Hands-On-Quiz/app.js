var http = require('http');
var calc = require('./calculation.js');

http
  .createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('Sum: ' + calc.add(6, 2));
    res.write('<br>Difference: ' + calc.subtract(6, 2));
    res.write('<br>Product: ' + calc.multiply(6, 2));
    res.write('<br>Quotient: ' + calc.divide(6, 2));
    res.write('<br>Quotient: ' + calc.rateperhr);

    res.end();
  })
  .listen(8080);
