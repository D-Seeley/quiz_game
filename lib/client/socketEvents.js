const socketEvents = (conn) => {
    conn.on('connect', ()=> {
        conn.on('partnerJoined', (message)=> {
            console.log(message);
        });

        conn.on('gameCreated', (gameId)=> console.log('game created, gameId is: ', gameId));
        conn.on('gameStart', (question)=> console.log(question));

    })

    return conn;
}

export default socketEvents