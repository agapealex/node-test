const express = require('express');
const app = express();

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.get('/home', function(req, res) {
  res.send('hoooome');
});

app.listen(5000, function() {
  console.log('Serverul ruleaza pe portul 5000!');
});  