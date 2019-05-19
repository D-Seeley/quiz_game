import React, { Component } from 'react';
import { connect } from 'react-redux';

import Socket from '../../socket/socketSingleton'
const { socket } = new Socket();
// const { createRoom, createGame } = socket.transmitters.hostEvents;

class Venue extends Component {
    constructor () {
        super();
    }
    render() {
        const { room, game } = this.props;

        return (
            <div> 
                <h3>The Join Key is: {room.joinName ? room.joinName : '---'}</h3>
                <p>GameID: {game.id ? game.id : '---'}</p>
            </div>
        )
    }
}

const mapStateToProps = ({ room, game }) => {
    return {
        room,
        game
    }
}



export default connect(mapStateToProps)(Venue);