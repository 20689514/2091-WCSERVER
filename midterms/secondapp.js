var express = require('express');
var app = express();

const port = 2001;
const host = 'localhost';

app.get('/', function (request, response) {
  response.send('You have sucessfully created your second app!');
});

var server = app.listen(2001, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

//https://stackblitz.com/edit/expressjs?file=index.js
