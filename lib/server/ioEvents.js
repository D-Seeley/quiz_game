const { createGame } = require('./game/gameHandler');
const IoSingleton = require('./IoSingleton');
// const { io } = new IoSingleton(null);

let game, gameCreated;




const addIoListeners = (io) => {
    //Asign Server Emits, with io and Socket exposed
    gameCreated = ( id ) => io.emit('gameCreated', id);

    return (socket) => {

        io.emit('partnerJoined', 'a partner has joined');

        socket.on('createGame', (params)=> {
            console.log('createGame event received');
            createGame(params)
                .then(_game => {
                    game = _game;
                    socket.join(game.id);
                    gameCreated(game.joinKey);
                })
                .catch(err => console.error(err))
        })

        socket.on('joinGame', (gameId)=> {
            socket.join(gameId);
            socket.emit('gameJoined')
            console.log('socket joined room: ', gameId)
        })


      

        console.log(`connection initiated by ${socket.id}`);
    }
}



module.exports = {
    addIoListeners,
    transmitters: {
        gameCreated
    }
}