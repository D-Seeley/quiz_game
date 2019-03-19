const { createGame } = require('./gameHandler');
let game, gameCreated;

const socketEvents = ( socket ) => {
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

    return socket
}

module.exports = socketEvents;
