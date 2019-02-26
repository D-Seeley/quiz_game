const initialState = {
    roomKey: ''
};

//Constants
const SET_ROOM_KEY = 'SET_ROOM_KEY';

//Action Creators
const setRoomKey = (roomKey) => ({
    type: SET_ROOM_KEY,
    roomKey
});

//Reducer
const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ROOM_KEY:
            return { 
                ...state, 
                roomKey: action.roomKey};

        default: 
            return state;
    }
}

export default gameReducer;