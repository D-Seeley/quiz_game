const express = require('express');
const app = express();
const server = require('http').Server(app);
const db = require('./lib/server/DB/index');

//Socket.io Authentication Module
const socketioAuth = require("socketio-auth");

const IoSingleton = require('./lib/server/socket/IoSingleton');
const { onConnection } = require('./lib/server/connectionHandler');
const { io } = new IoSingleton(server);
// console.log(io);
// const listeners = addSocketListeners(io);
//Socket.io server event actions

const path = require('path');
const port = process.env.port || 1337;

//Static Public Directory
app.use(express.static(path.join(__dirname, './public')))

//Socket.io Implementation
io.on('connection', onConnection(io));

//Routes


server.listen(port, ()=> {
    db.sync();
    console.log(`server listening on port: ${port}`)
});
