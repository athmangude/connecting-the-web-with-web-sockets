var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static('app'));

io.on('connection', function(socket) {
    console.log('something connected to Socket.io');
    socket.emit('messages', ['Hello', 'Its me', 'Ive been wondering if we could meet again after such a long time']);
});

server.listen('8080');
