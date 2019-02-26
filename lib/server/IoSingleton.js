//Singleton pattern
const socketIo = require('socket.io');
let io = null;

class IoSingleton {
    constructor(server) {
        if (!io && server) {
            //Create a new client, attach event listeners
            io = socketIo(server);
        }
        this.io = io;
    }
}

module.exports = IoSingleton;