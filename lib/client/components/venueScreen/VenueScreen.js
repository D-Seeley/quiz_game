import React, { Component } from 'react';

import socket from '../../socket/socketSingleton'
const io = new socket();

console.log(`io is: ${io}`)

class Venue extends Component {
    render() {
        return (
            <hr />
        )
    }
}

export default Venue;