import React, { Component } from 'react';

import socket from '../../lib/client/socketSingleton'
const io = new socket();

class Main extends Component {
    render() {
        return (
            <div>
                <hr />
                <button onClick={ ()=> io.socket.emit('createGame', { rounds: 5}) }>START GAME</button>
            </div>
        )
    }
}

export default Main;