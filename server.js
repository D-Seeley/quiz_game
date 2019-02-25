const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
//Socket.io server event actions
const socketListners = require('./lib/server/socketEvents').listeners(io);
const path = require('path');
const port = process.env.port || 1337;

app.use(express.static(path.join(__dirname, './public')))

io.on('connection', socketListners);
server.listen(port, ()=> console.log(`server listening on port: ${port}`));
