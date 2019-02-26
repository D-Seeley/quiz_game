import React, { Component } from 'react';

import socket from '../../socket/socketSingleton'
const io = new socket();

console.log(`io is: ${io}`)

class Venue extends Component {
    constructor () {
        super();
    }
    render() {
        return (
            <hr />
        )
    }
}

export default Venue;