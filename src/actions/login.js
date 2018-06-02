import config from '../config'

const login_url = `${config.api_url}/users/auth`
const getCurrentUser_url = `${config.api_url}/users/self`

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'
export const USER_REQUEST = 'USER_REQUEST'
export const USER_SUCCESS = 'USER_SUCESS'
export const USER_ERROR = 'USER_ERROR'

export function requestLogin(credentials) {
    return {
        type: LOGIN_REQUEST,
        credentials
    }
}

function receiveLogin(token) {
    return {
        type: LOGIN_SUCCESS,
        token
    }
}

function errorLogin(message) {
    return {
        type: LOGIN_ERROR,
        message
    }
}

export function requestUser() {
    return {
        type: USER_REQUEST
    }
}

export function receiveUser(user) {
    return {
        type: USER_SUCCESS,
        user
    }
}

export function errorUser(message) {
    return {
        type: USER_ERROR,
        message
    }
}

export function getUser(token){
    let config = {
        method: 'GET',
        headers: {
            'Content-Type':'application/x-www-form-urlencoded',
            'Authorization': token
        },
    }

    return async dispatch => {
        dispatch(requestUser())
        const response = await fetch(getCurrentUser_url, config)
        const json = await response.json()
        if (response.ok) {
            console.log(json);
            dispatch(receiveUser(json))
        }
        else {
            dispatch(errorUser(json.message))

        }
        return false
    }
}

export function loginUser(credentials) {
    let config = {
        method: 'POST',
        headers: { 'Content-Type':'application/x-www-form-urlencoded' },
        body: `username=${credentials.username}&password=${credentials.password}`
    }

    return async dispatch => {
        dispatch(requestLogin(credentials))
        const response = await fetch(login_url, config)
        const json = await response.json()
        if (response.ok) {
            dispatch(receiveLogin(json.full_token))
            localStorage.setItem("id_token", json.full_token)
            dispatch(getUser(json.full_token))
        }
        else {
            dispatch(errorLogin(json.message))
        }
        return false
    }
}
