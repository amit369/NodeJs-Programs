const express = require('express');
const http = require('http');
const path = require('path');
const app = express();
const socketio = require('socket.io');
const server = http.createServer(app);
const io = socketio(server);

const port = process.env.PORT || 3000;
const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath));

let count = 0;


server.listen(port , () => {
    console.log(` Server is up on port ${port}!`);
});

io.on('connection', (socket) => {

console.log("New WebSocket connection");
socket.emit('countUpdated', count);
socket.emit('message', 'Welcome!');
socket.broadcast.emit('message', 'A new user has joined');
socket.on('sendMessage', (message) => {
         io.emit('message', message);
})
socket.on('disconnect' , () => {
    io.emit('message', 'A user has left');
});
socket.on('increment', () => {
    count++
    socket.emit('countUp dated', count);
    io.emit('countUpdate', count);
})
})

socket.on('sendLocation', (coords) => {
io.emit('message', `Location : ${coords.lattitude}, ${coords.longitude}`)
})