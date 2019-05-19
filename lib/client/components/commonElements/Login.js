import React, { Component } from 'react';
import { connect } from 'react-redux';

import Socket from '../../socket/socketSingleton'
const { socket } = new Socket();
// const { createRoom, createGame } = socket.transmitters.hostEvents;

class Login extends Component {
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
        joinRoom(this.state.input)
    }

    render() {
        return (
            <div>
                <hr />
                <form>
                    <input onChange={ this.onChange } type="text"></input>
                    <button onClick={ this.onSubmit }>Enter UserName</button>
                </form>
                
            </div>
        )
    }
}

const mapStateToProps = ({ user }) => {
    return {
        user
    }
}



export default connect(mapStateToProps)(Login);