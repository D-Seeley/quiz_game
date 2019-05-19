import axios from 'axios';

const initialState = {

};

//Constants
// const LOGIN_USER = 'LOGIN_USER';
const CREATE_USER = 'CREATE_USER';
const SET_USER = 'SET_USER';

//Action Creators

const createUser = (user) => ({
    type: CREATE_USER,
    user
});

const setUser = (user) => ({
    type: SET_USER,
    user
});


////////////NEXT STEPS HERE
//// Should I USE Socket.io for Login and Authentication, or traditional HTTP Requests? 

//Thunks
createUserThunk = userInfo => async dispatch => {
    try {
        
    } 
    catch(err) { 
        console.throw(err) 
    }
}

//Reducer
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            console.log(action);
            return {
                ...state,
                user
            };
        default: 
            return state;
    }
}


export const userActions = {
    setUser
};
export default userReducer;