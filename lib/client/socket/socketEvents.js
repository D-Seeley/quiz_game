import { gameActions } from '../store/reducers/game'; 
import { roomActions } from '../store/reducers/room'
import { dispatch } from '../store';

export const addSocketEvents = (conn)=> {
    //Connection to Server
    conn.on('connect', (socket)=> {
        console.log('socket is: ', socket)
        conn.on('partnerJoined', (message)=> {
            console.log(message);
        });

        conn.on('roomCreated', (gameRoom)=> {
            console.log('gameRoom created, gameRoomId is: ', gameRoom.id);
            dispatch(roomActions.setRoom(gameRoom))
        })

        conn.on('gameCreated', (game)=> {
            console.log('game created, gameId is: ', game);
            dispatch(gameActions.setGame(game));
        });
        conn.on('gameStart', (question)=> console.log(question));
    })

    conn.transmitters = {
        commonEvents: {
            joinRoom: (joinName) => conn.emit('joinRoom', joinName)
        },
        hostEvents: {
            createRoom: ()=> conn.emit('createRoom'),
            createGame: (rounds)=> conn.emit('createGame', { rounds }),
            startGame: ()=> {}
        },
        playerEvents: {},
        venueEvents: {}
    }

    return conn;
}

export default addSocketEvents;