var calc = require('./a.js');
var http = require('http');

http
  .createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<br>Quotient: ' + calc.rateperhr);

    res.write('<br>Quotient: ' + calc.tax);

    res.end();
  })
  .listen(8080);
