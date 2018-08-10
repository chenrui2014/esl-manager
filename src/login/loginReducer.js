import {LOGIN_FAILURE,LOGIN_SUCCESS,LOGIN_REQUEST} from './loginAction'

const initialState = {
    loginStatus: {
        loginPending: false,
        user: null,
        error: null,
    },
};
export function loginReducer(state = initialState.loginStatus,action){
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loginPending: true,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                user:action.data,
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                error:action.error
            };
    }
}