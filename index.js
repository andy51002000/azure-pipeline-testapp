
var express = require('express');
var app  =  express();
app.get('/', function(req, res){



    res.send({ message: 'hello  andy'})
});
app.listen(1337);

console.log('hello world');
