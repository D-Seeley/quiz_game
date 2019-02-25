import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import Player from './components/Player'

class Test extends Component {
    render() {
        return (
            <div>
                <Main />
                <Player/>
            </div>
        )
    }
}

ReactDOM.render(
    <Test />,
    document.getElementById('app')
)