const express = require('express');
const app = express();

app.get('/', function (req,res){
    res.sendFile(__dirname + '/' + 'index.html')
})

app.get('/process_get', function (req, res){
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