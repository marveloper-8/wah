import {
    LOGIN,
    LOGIN_FAIL,
    USER_INFO_LOADING,
    USER_INFO,
    GET_USERS,
    REFRESH_AUTH_TOKEN,
    LOGOUT,
    CHANGE_PASSWORD,
    FORGOT_PASSWORD,
    REGISTER,
    REGISTER_FAIL,
    AUTH_ERROR,
    SOCIAL_LOGIN,
    VALIDATE_AUTH_TOKEN,
    SEND_AUTH_VERIFICATION_PIN,
    VERIFY_AUTH_PIN
} from '../actions/types'


const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    user: null
}

export default function (state = initialState, action){
    switch(action.type){
        case USER_INFO_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case USER_INFO:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload
            }
        case LOGIN:
        case REGISTER:
        localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                token: action.payload.data.token,
                isLoading: false
            }
        case LOGIN_FAIL:
        case REGISTER_FAIL:
        case LOGOUT:
        case AUTH_ERROR:
        localStorage.removeItem('token')
            return {
                ...state,
                token: null,
                user: null,
                isAuthenticated: false,
                isLoading: false
            }
        default:
            return state
    }
}