import React, { Component } from 'react';

import { transmitters } from '../../socket/socketEvents'
import socket from '../../socket/socketSingleton'
const io = new socket();

class Player extends Component {
    constructor() {
        super()
        this.state = {
            input: ""
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({ input: e.target.value});
    } 

    onSubmit(e) {
        e.preventDefault();
        transmitters.commonEvents.joinGame(this.state.input)
    }

    render() {
        return (
            <div>
                <hr />
                <form>
                    <input onChange={ this.onChange } type="text"></input>
                    <button  onClick={ this.onSubmit }>START GAME</button>
                </form>
                
            </div>
        )
    }
}

export default Player;