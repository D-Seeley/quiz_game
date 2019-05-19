//Provide logic flow for socket.io connection. 
//Determine User Type
//Create Rooms, assign users to room
const { addIoEvents } = require('./socket/ioEvents');


const onConnection = (io) => addIoEvents(io);



module.exports = {
    onConnection
    // transmitters: {
    //     gameCreated
    // }
}