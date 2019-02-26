import React, { Component } from 'react';

import VenueScreen from './venueScreen/VenueScreen';
import PlayerScreen from './playerScreen/Player';

import socket from '../socket/socketSingleton';
const io = new socket();

class App extends Component {
    render() {
        return (
            <div>
                <hr />
                <h1>App</h1>
                <button onClick={ ()=> io.socket.emit('createGame', { rounds: 5}) }>START GAME</button>
                <hr />

                <h2>Venue View</h2>
                <VenueScreen />
                <hr />

                <h2>Player View</h2>
                <PlayerScreen />
            </div>
        )
    }
}

export default App;