const express = require('express');
const cors = require('cors');


const app = express();


app.use(cors()); 

app.get('/', function(req, res) {
    res.header('Access-Control-Allow-Origin', '*');
    res.json({ message: 'Heloooooo ' });

});

app.get('/home', function(req, res) {
    res.header('Access-Control-Allow-Origin', '*');
    res.json({ message: 'Hello, raspuns de pe backend!' });
});

const port = process.env.PORT || 5000;

app.listen(port, function() {
  console.log('Serverul ruleaza pe portul 5000!');
});  