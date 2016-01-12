var express = require('express');
var app = express();
var server = require('http').Server(app);

app.get('/', function(request, response) {
    response.send('Hello World');
    console.log('something connected to express');
});

server.listen('8080');
