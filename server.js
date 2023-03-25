const express = require('express');
const app = express();

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.get('/home', function(req, res) {
    console.log("este in  uta home")
    res.json({ message: 'Hello, raspuns de pe backend!' });
});

const port = process.env.PORT || 5000;

app.listen(port, function() {
  console.log('Serverul ruleaza pe portul 5000!');
});  