<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>PORTFOLIO</title>
</head>
<body>

<div class="student">
    <input type="text" name="stud1" id="stud1" class="stud" placeholder="Enter grade"/> <br>
    <input type="text" name="stud2" id="stud2" class="stud" placeholder="Enter grade"/><br>
    <input type="text" name="stud3" id="stud3" class="stud" placeholder="Enter grade"/><br>
    <input type="text" name="stud4" id="stud4" class="stud" placeholder="Enter grade"/><br>

    Total <input type="text" name="total" id="total" placeholder="Total Amount"/><br>

    <input type="submit" name="submit" id="submit" value="submit" />
</div> 


<script>

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

</script>
    
</body>
</html>