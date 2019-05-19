const initialState = {
    gameId: '',
    roomId: '',
    joinName: '',
    users: []
};

//Constants
const SET_GAME_ROOM = 'SET_ROOM';

//Action Creators
const setRoom = (gameRoom) => ({
    type: SET_GAME_ROOM,
    gameRoom
});


//Reducer
const roomReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_GAME_ROOM:
            console.log(action);
            return {
                ...state,
                roomId: action.gameRoom.id,
                joinName: action.gameRoom.joinName
            };
        default: 
            return state;
    }
}


export const roomActions = {
    setRoom
};
export default roomReducer;