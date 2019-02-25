const { createGame } = require('./gameHandler');


module.exports = {
    listeners: (io) => {
        return (socket) => {
            let game;
            io.emit('partnerJoined', 'message');
            socket.on('createGame', (params)=> {
                createGame(params)
                    .then(_game => {
                        game = _game;
                        socket.join(game.id)
                        io.emit('gameCreated', game.id)
                    })
            })

            socket.on('joinGame', (gameId)=> {
                socket.join(gameId);
                socket.emit('gameJoined')
                console.log('socket joined room: ', gameId)
            })

            console.log(`connection initiated by ${socket.id}`);
        }
    },
    
    transmitters: {
        gameCreated: ({ id }) => io.emit('gameCreated', id),

    }
}