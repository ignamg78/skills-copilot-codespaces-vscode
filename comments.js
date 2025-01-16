// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

app.use(bodyParser.json());

// Read comments from file
var comments = JSON.parse(fs.readFileSync('comments.json', 'utf8'));

// GET request
app.get('/comments', function(req, res) {
  res.json(comments);
});

// POST request
app.post('/comments', function(req, res) {
  comments.push(req.body);
  fs.writeFileSync('comments.json', JSON.stringify(comments));
  res.json(comments);
});

app.listen(3000);
console.log('Server started: http://localhost:3000/');