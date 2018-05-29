import config from '../config'

const speciality_url = `${config.api_url}/specialities/`

export const REQUEST_SPECIALITY = 'REQUEST_SPECIALITY'
export const RECEIVE_SPECIALITY = 'RECEIVE_SPECIALITY'
export const ERROR_SPECIALITY = 'ERROR_SPECIALITY'

export function requestSpeciality() {
    return {
        type: REQUEST_SPECIALITY
    }
}

export function receiveSpeciality(payload) {
    return {
        type: RECEIVE_SPECIALITY,
        payload
    }
}

export function errorSpeciality(message) {
    return {
        type: ERROR_SPECIALITY,
        message
    }
}

export function getSpeciality(speciality_id) {
    return async dispatch => {
        dispatch(requestSpeciality)
        const response = await fetch(speciality_url + speciality_id)
        const json = await response.json()
        if (response.ok) {
            console.log(json)
            dispatch(receiveSpeciality(json))
        }
        else {
            dispatch(errorSpeciality(json.message))
        }

    }
}
