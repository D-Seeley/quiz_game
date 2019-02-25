import socketIoClient from 'socket.io-client';
import socketEvents from './socketEvents';

//Singleton pattern
let conn = null;

class SocketSingleton {
    constructor() {
        if (!conn) {
            //Create a new client, attach event listeners
            conn = socketEvents(socketIoClient());
        }
        this.socket = conn;
    }
}

export default SocketSingleton;