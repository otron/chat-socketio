var express = require('express');
var http = require('http');
var socketio = require('socket.io');

var io = socketio(http);


var app = express();
var server = http.Server(app);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// "connnection" is an event. Where's the list of events? Is there such a alist?
io.on('connection', (socket) => {
  console.log('user connected: ' + socket);
});

server.listen(3000, () => {
  console.log('Hit up *:3000 for a good time.');
});