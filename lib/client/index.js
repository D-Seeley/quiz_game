import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Player from './components/playerScreen/Player'
import Venue from './components/venueScreen/VenueScreen'

class Test extends Component {
    render() {
        return (
            <div>
                <h1>App</h1>
                <App />
                <hr />

                <h2>Venue View</h2>
                <Venue />
                <hr />

                <h2>Player View</h2>
                <Player />
            </div>
        )
    }
}

ReactDOM.render(
    <Test />,
    document.getElementById('app')
)