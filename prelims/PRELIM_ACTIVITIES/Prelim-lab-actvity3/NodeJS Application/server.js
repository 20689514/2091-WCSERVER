//Task Name: Lab 3
//Author: Chrisjohn G. Crisostomo
//Section: WD-201

//Use require() to import local module

var http = require('http');

var server = http.createServer(function (req, res) {
  if (req.url == '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.write('<html><body><p>This is home Page.</p></body></html>');
    res.end();
  } else if (req.url == '/student') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<html><body><p>This is student Page.</p></body></html>');
    res.end();
  } else res.end('Invalid Request!');
});

server.listen(5000); //6 - listen for any incoming requests

console.log('Node.js web server at port 5000 is running..');