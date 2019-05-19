import React, { Component } from 'react';
import { connect } from 'react-redux';

import VenueScreen from './venueScreen/VenueScreen';
import PlayerScreen from './playerScreen/Player';

import Socket from '../socket/socketSingleton'
const { socket } = new Socket();
const { createRoom, createGame } = socket.transmitters.hostEvents;

class App extends Component {
    render() {
        console.log('props are: ', this.props)
        const { game, room } = this.props;
        return (
            <div>
                <hr />
                <h1>App</h1>
                <button disabled={ room.roomId } onClick={ ()=> createRoom() }>Create Room</button>
                <button disabled={ !room.roomId || game.id } onClick={ ()=> createGame(5) }>Create Game</button>
                <button > Start Game </button>
                <p>The game id is: {game.id}</p>
                <p>The Room Key is: {room.joinName}</p>
                <ul>The Players Are:
                    {room.users}
                </ul>
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

const mapStateToProps = ({ game, room }, ownProps) => {
    return {
        game, 
        room
    }
}

export default connect(mapStateToProps)(App);