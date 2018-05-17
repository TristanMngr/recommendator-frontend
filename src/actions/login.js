import config from '../config'

const login_url = `${config.api_url}/users/auth` 

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'

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

export function loginUser(credentials) {
    let config = {
        method: 'POST',
        headers: { 'Content-Type':'application/x-www-form-urlencoded' },
        body: `email=${credentials.username}&password=${credentials.password}`
    }

    return async dispatch => {
        dispatch(requestLogin(credentials))
        const response = await fetch(login_url, config)
        const json = await response.json()
        if (response.ok) {
            dispatch(receiveLogin(json.full_token))
        }
        else {
            dispatch(errorLogin(json.message))
            
        }
        return false
    }
}