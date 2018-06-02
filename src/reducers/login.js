import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR,
    USER_REQUEST, USER_SUCCESS, USER_ERROR } from '../actions/login'

function auth(state = {
    isFetching: false,
    isAuthenticated: localStorage.getItem('id_token') ? true : false,
    user: null,
    error: null
    }, action) {
    switch(action.type) {
        case LOGIN_REQUEST:
            return {...state,
                isFetching: true,
                isAuthenticated: false,
                user: action.credentials
            }
        case LOGIN_SUCCESS:
            return {...state,
                isFetching: false,
                isAuthenticated: true,
                token: action.token,
                error: null
            }
        case LOGIN_ERROR:
            return {...state,
                isFetching: false,
                isAuthenticated: false,
                error: action.message
            }
        case USER_REQUEST:
            return {...state,
                isFetching: true
            }
        case USER_SUCCESS:
            return {...state,
                isFetching: false,
                user: action.user
            }
        case USER_ERROR:
            return {...state,
                isFetching: false,
                error: action.message
            }
        default:
            return state
    }
}

export default auth;
