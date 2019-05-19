import React, { Component } from 'react';
import { connect } from 'react-redux';


import Socket from '../../socket/socketSingleton'
const { socket } = new Socket();
const { joinRoom } = socket.transmitters.commonEvents;


class JoinRoom extends Component {
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
                    <button onClick={ this.onSubmit }>Join Room</button>
                </form>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(JoinRoom);