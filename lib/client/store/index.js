import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import game from './game';

const reducer = combineReducers({
    game
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export const { dispatch } = store;
export default store;
