import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import App from './components/App';
import Player from './components/playerScreen/Player';
import Venue from './components/venueScreen/VenueScreen';


ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>, 
    document.getElementById('app')
)