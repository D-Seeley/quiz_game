import React, { Component } from 'react';
import { connect } from 'react-redux';

import JoinRoom from './JoinRoom'

import socket from '../../socket/socketSingleton'
const conn = new socket();

class Player extends Component {
  
    render() {
        return (
            <JoinRoom />
        )
    }
}

const mapStateToProps = ({ room }) => {
    return { 
        room 
    }
}

export default connect(mapStateToProps)(Player);