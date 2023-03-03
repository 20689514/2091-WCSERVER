const express = require('express');
app = express();

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });


app.use(express.static('public'));

const path = require('path');
const mime = require('mime-types');
const multer = require('multer');

const fileStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: fileStorage });

app.post('/uploads', upload.single('myFile'), (req, res) => {
  console.log(req.file);
  req.file.mimetype = mime.lookup(req.file.originalname);

  res.sendFile(path.join(__dirname, 'file-uploaded.html'));
});

app.post('/process_post', urlencodedParser, function (req, res) {
  response = {
    Name: req.body.name,
    Subject: req.body.subj,
    Message: req.body.msg,
    Email: req.body.email,

  };
  console.log(response);
  res.end(JSON.stringify(response));
});

app.get('/mid-basic-routing-app', (req, res) => {
  res.sendFile(__dirname + '/' + 'file-uploaded.html');
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
