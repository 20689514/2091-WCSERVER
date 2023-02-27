const express = require('express');
const app = express();

var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({extended:false})


app.get('/', function (req, res){
    res.sendFile( __dirname + '/' + 'index.html');
})

app.post('/process_post', urlencodedParser, function (req, res) {
    response = {
        first_name:req.query.fname,
        last_name:req.query.lname
    };

console.log(response);
res.end(JSON.stringify(response));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});