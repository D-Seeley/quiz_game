const express = require('express');
const app = express();
const server = require('http').Server(app);

const IoSingleton = require('./lib/server/IoSingleton');
const { addIoListeners } = require('./lib/server/ioEvents');
const { io } = new IoSingleton(server);
// console.log(io);
// const listeners = addSocketListeners(io);
//Socket.io server event actions

const path = require('path');
const port = process.env.port || 1337;

app.use(express.static(path.join(__dirname, './public')))

io.on('connection', addIoListeners(io));
server.listen(port, ()=> console.log(`server listening on port: ${port}`));
