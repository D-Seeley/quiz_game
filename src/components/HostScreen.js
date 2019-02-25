import React, { Component } from 'react';

import socket from '../../lib/client/socketSingleton'
const io = new socket();

console.log(`io is: ${io}`)

class Second extends Component {
    render() {
        return (
            <hr />
        )
    }
}

export default Second;