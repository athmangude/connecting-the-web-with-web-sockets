var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.get('/', function(request, response) {
    response.send('Hello World');
    console.log('something connected to express');
});

io.on('connection', function(socket) {
    console.log('something connected to Socket.io');
    socket.emit('messages', ['Hello', 'Its me', 'Ive been wondering if we could meet again after such a long time']);
});

server.listen('8080');
