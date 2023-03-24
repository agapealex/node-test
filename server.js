const express = require('express');
const app = express();

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.get('/home', function(req, res) {
  res.send('hoooome');
});

app.listen("https://node-test-production-7782.up.railway.app", function() {
  console.log('Serverul ruleaza pe portul 5000!');
});  