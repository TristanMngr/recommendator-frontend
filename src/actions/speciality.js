import config from '../config'

const speciality_url = `${config.api_url}/specialities/`

export const REQUEST_SPECIALITY = 'REQUEST_SPECIALITY'
export const RECEIVE_SPECIALITY = 'RECEIVE_SPECIALITY'
export const ERROR_SPECIALITY = 'ERROR_SPECIALITY'
export const REQUEST_SPECIALITIES = 'REQUEST_SPECIALITIES'
export const RECEIVE_SPECIALITIES = 'RECEIVE_SPECIALITIES'
export const ERROR_SPECIALITIES = 'ERROR_SPECIALITIES'
export const REQUEST_ADD_MODULE_TO_SPECIALITY = 'REQUEST_ADD_MODULE_TO_SPECIALITY'
export const RECEIVE_ADD_MODULE_TO_SPECIALITY = 'RECEIVE_ADD_MODULE_TO_SPECIALITY'
export const ERROR_ADD_MODULE_TO_SPECIALITY = 'ERROR_ADD_MODULE_TO_SPECIALITY'
export const RECEIVE_SPECIALITY_IN_LIST = 'RECEIVE_SPECIALITY_IN_LIST'

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

export function receiveSpecialityInList(payload) {
    return {
        type: RECEIVE_SPECIALITY_IN_LIST,
        payload
    }
}

export function errorSpeciality(message) {
    return {
        type: ERROR_SPECIALITY,
        message
    }
}

export function requestSpecialities() {
    return {
        type: REQUEST_SPECIALITIES
    }
}

export function receiveSpecialities(payload) {
    return {
        type: RECEIVE_SPECIALITIES,
        payload
    }
}

export function errorSpecialities(message) {
    return {
        type: ERROR_SPECIALITIES,
        message
    }
}

export function requestAddModuleToSpeciality() {
    return {
        type: REQUEST_ADD_MODULE_TO_SPECIALITY
    }
}

export function receiveAddModuleToSpeciality(payload) {
    return {
        type: RECEIVE_ADD_MODULE_TO_SPECIALITY,
        payload
    }
}

export function errorAddModuleToSpeciality(message) {
    return {
        type: ERROR_ADD_MODULE_TO_SPECIALITY,
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

export function getSpecialities() {
    return async dispatch => {
        dispatch(requestSpecialities)
        const response = await fetch(speciality_url)
        const json = await response.json()
        if (response.ok) {
            console.log(json)
            dispatch(receiveSpecialities(json))
        }
        else {
            dispatch(errorSpecialities(json.message))
        }

    }
}

export function updateSpeciality(infos, id) {
    let config = {
        method: 'PUT',
        headers: { 'Content-Type':'application/x-www-form-urlencoded',
        'Authorization': localStorage.getItem('id_token')
        },
        body: `name=${infos.name}&description=${infos.description}`
    }

    return async dispatch => {
        dispatch(requestSpeciality(infos))
        const response = await fetch(speciality_url + id, config)
        const json = await response.json()
        if (response.ok) {
            dispatch(receiveSpeciality(json))
        }
        else {
            dispatch(errorSpeciality(json.message))

        }
        return false
    }
}

export function addSpecialityToList(infos) {
    let config = {
        method: 'POST',
        headers: { 'Content-Type':'application/x-www-form-urlencoded',
        'Authorization': localStorage.getItem('id_token')
        },
        body: `name=${infos.name}&description=${infos.description}`
    }

    return async dispatch => {
        dispatch(requestSpeciality(infos))
        const response = await fetch(speciality_url, config)
        const json = await response.json()
        if (response.ok) {
            dispatch(receiveSpecialityInList(json))
        }
        else {
            dispatch(errorSpeciality(json.message))

        }
        return false
    }
}

export function addModuleToSpeciality(infos) {
    let config = {
        method: 'POST',
        headers: { 'Content-Type':'application/x-www-form-urlencoded',
        'Authorization': localStorage.getItem('id_token')
        },
        body: `module_id=${infos.toAdd_id}&is_main=${infos.is_main}`
    }

    return async dispatch => {
        dispatch(requestAddModuleToSpeciality())
        const response = await fetch(speciality_url + infos.object_id + "/modules", config)
        const json = await response.json()
        if (response.ok) {
            dispatch(receiveAddModuleToSpeciality(json))
        }
        else {
            dispatch(errorAddModuleToSpeciality(json.message))
        }
        return false
    }
}
