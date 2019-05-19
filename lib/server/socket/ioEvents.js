const { createRoom, findRoom } = require('../roomHandler');
const { createGame } = require('../gameHandler');


const addIoEvents = (io) => {
    //Asign Socket Events and Emits with io exposed
    return (socket) => {
        //Asign Server transmits, with io exposed
        const gameCreated = ( game ) => socket.emit('gameCreated', game);

        io.emit('partnerJoined', 'a partner has joined');


        //Assign Server Listeners
        //Admin Listeners
        socket.on('createRoom', (params)=> {
            console.log('createRoom event received');
            return createRoom(params)
                .then( room => {
                    socket.emit('roomCreated', room)
                })
        })

        socket.on('createGame', (params)=> {
            return createGame(params)
                .then( game => gameCreated(game));
        })

        socket.on('joinRoom', (joinName)=> {
            return findRoom(joinName)
                .then( room => {
                    socket.join(room);
                    // socket.emit('gameJoined')
                    console.log('socket joined room: ', room.id)
                })

        })

        console.log(`connection initiated by ${socket.id}`);
    }
}



module.exports = {
    addIoEvents
    // transmitters: {
    //     gameCreated
    // }
}