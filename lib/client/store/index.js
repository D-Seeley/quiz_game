import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

//import reducers
import gameReducer from './reducers/game';
import roomReducer from './reducers/room';
import userReducer from './reducers/user';

const reducer = combineReducers({
    game: gameReducer,
    room: roomReducer,
    user: userReducer
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export const { dispatch } = store;
export default store;
