//Provide logic flow for socket.io connection. 
//Determine User Type
//Create Rooms, assign users to room
const socketEvents = require('./socketEvents');

//temp VVV
let game, gameCreated;

const onConnection = (io) => {
    //Asign Server Emits, with io and Socket exposed
    return (socket) => {
        // console.log('socket is: ', socket);
        io.emit('partnerJoined', 'a partner has joined');
        console.log(`connection initiated by ${socket.id}`);


        return socketEvents(socket);
    }
}



module.exports = {
    onConnection,
    transmitters: {
        gameCreated
    }
}