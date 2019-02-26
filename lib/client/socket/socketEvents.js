export const addSocketEvents = (conn) => {
    //Connection to Server
    conn.on('connect', ()=> {
        conn.on('partnerJoined', (message)=> {
            console.log(message);
        });

        conn.on('gameCreated', (gameId)=> console.log('game created, gameId is: ', gameId));
        conn.on('gameStart', (question)=> console.log(question));

    })

    return conn;
}

export const transmitters = {
    commonEvents: {
        joinGame: (message) => io.socket.emit('joinGame', messsage)
    },
    hostEvents: {
        createRoom: ()=> {},
        startGame: ()=> {}
    },
    playerEvents: {
        
    },
    venueEvents: {}
    

}

export default { addSocketEvents, transmitters}