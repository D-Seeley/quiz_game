const initialState = {
    currentRound: 0,
    id: '',
    joinName: '',
    length: 0,
    scores: {}

};

//Constants
const SET_GAME = 'SET_GAME';
const SET_ROOM_KEY = 'SET_ROOM_KEY';

//Action Creators


const setGame = (game) => ({
    type: SET_GAME,
    game
});

//Reducer
const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_GAME:
            return {
                currentRound: action.game.currentRound,
                id: action.game.id,
                joinName: action.game.joinName,
                length: action.game.length,
                scores: action.game.scores
            }

        default: 
            return state;
    }
}


export const gameActions = {
    setGame
};
export default gameReducer;