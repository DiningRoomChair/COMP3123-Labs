var express = require("express");
var app = express();

app.listen(3000);

app.get('/html', function(req, res) {
    res.send('<html><head></head><body><h1>Hello World!</h1></body></html>');
});

app.get('/json', function(req, res){
    res.json({firstname: 'Davey', lastname: 'Jones'});
});

app.get('/toronto*team', function(req, res){
    res.send('<html><head></head><body><h1>Go Toronto Go!</h1></body></html>')
});
