var http = require('http');
var calc = require('./calculation.js');

http
  .createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('Sum: ' + calc.add(1, 2));
    res.write('Difference: ' + calc.subtract(1, 2));
    res.write('Product: ' + calc.multiply(1, 2));
    res.write('Quotient: ' + calc.divide(1, 2));
    res.end();
  })
  .listen(8080);
