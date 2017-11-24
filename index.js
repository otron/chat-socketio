var express = require('express');
var http = require('http');
var socketio = require('socket.io');


var app = express();
var server = http.Server(app);
var io = socketio(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// "connnection" is an event. Where's the list of events? Is there such a list?
io.on('connection', (socket) => {
  let userid = socket.id;
  console.log(userid + ': connected');
  socket.on('disconnect', () => {
    console.log(userid + ': disconnected');
    io.emit('system message', userid + ': left');
  });
  socket.on('chat message', (msg) => {
    console.log(userid + ': message => ' + msg);
    io.emit('chat message', `${userid}: ${msg}`);
  });

  io.emit('system message', userid + ': connected');
  socket.emit('system message', 'Welcome, your userId is: ' + userid);

});

server.listen(3000, () => {
  console.log('Hit up *:3000 for a good time.');
});
