import config from '../config'

const speciality_url = `${config.api_url}/specialities/`

export const REQUEST_SPECIALITY = 'REQUEST_SPECIALITY'
export const ERROR_SPECIALITY = 'ERROR_SPECIALITY'

export const RECEIVE_SPECIALITY = 'RECEIVE_SPECIALITY'
export const RECEIVE_SPECIALITY_IN_LIST = 'RECEIVE_SPECIALITY_IN_LIST'
export const RECEIVE_DELETE_MODULE_FROM_SPECIALITY = 'RECEIVE_DELETE_MODULE_FROM_SPECIALITY'
export const RECEIVE_DELETE_JOB_FROM_SPECIALITY = 'RECEIVE_DELETE_JOB_FROM_SPECIALITY'
export const RECEIVE_SPECIALITIES = 'RECEIVE_SPECIALITIES'
export const RECEIVE_ADD_MODULE_TO_SPECIALITY = 'RECEIVE_ADD_MODULE_TO_SPECIALITY'
export const RECEIVE_ADD_JOB_TO_SPECIALITY = 'RECEIVE_ADD_JOB_TO_SPECIALITY'
export const RECEIVE_DELETE_SPECIALITY_FROM_LIST = 'RECEIVE_DELETE_SPECIALITY_FROM_LIST'
export const REINIT_ERROR_SPECIALITY = 'REINIT_ERROR_SPECIALITY'

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

export function deleteSpecialityFromList(id) {
    return {
        type: RECEIVE_DELETE_SPECIALITY_FROM_LIST,
        id
    }
}

export function errorSpeciality(message) {
    return {
        type: ERROR_SPECIALITY,
        message
    }
}

export function receiveSpecialities(payload) {
    return {
        type: RECEIVE_SPECIALITIES,
        payload
    }
}

export function receiveAddModuleToSpeciality(payload) {
    return {
        type: RECEIVE_ADD_MODULE_TO_SPECIALITY,
        payload
    }
}

export function receiveAddJobToSpeciality(payload) {
    return {
        type: RECEIVE_ADD_JOB_TO_SPECIALITY,
        payload
    }
}

export function receiveDeleteModuleFromSpeciality(payload) {
    return {
        type: RECEIVE_DELETE_MODULE_FROM_SPECIALITY,
        payload
    }
}

export function receiveDeleteJobFromSpeciality(payload) {
    return {
        type: RECEIVE_DELETE_JOB_FROM_SPECIALITY,
        payload
    }
}

export function reinitErrorSpeciality(){
    return {
        type: REINIT_ERROR_SPECIALITY
    }
}

// used to show error, and delete it after 5 seconds
const handleError = (dispatch, message) => {
    dispatch(errorSpeciality(message))
    setTimeout(() => {
        dispatch(reinitErrorSpeciality())
    }, 5000)
}

export function getSpeciality(speciality_id) {
    return async dispatch => {
        dispatch(requestSpeciality())
        const response = await fetch(speciality_url + speciality_id)
        const json = await response.json()
        if (response.ok) {
            console.log(json)
            dispatch(receiveSpeciality(json))
        }
        else {
            handleError(dispatch, json.message)
        }

    }
}

export function getSpecialities() {
    return async dispatch => {
        dispatch(requestSpeciality())
        const response = await fetch(speciality_url)
        const json = await response.json()
        if (response.ok) {
            console.log(json)
            dispatch(receiveSpecialities(json))
        }
        else {
            handleError(dispatch, json.message)
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
        dispatch(requestSpeciality())
        const response = await fetch(speciality_url + id, config)
        const json = await response.json()
        if (response.ok) {
            dispatch(receiveSpeciality(json))
        }
        else {
            handleError(dispatch, json.message)

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
        dispatch(requestSpeciality())
        const response = await fetch(speciality_url, config)
        const json = await response.json()
        if (response.ok) {
            dispatch(receiveSpecialityInList(json))
        }
        else {
            handleError(dispatch, json.message)

        }
        return false
    }
}

export function deleteSpeciality(speciality_id) {
    let config = {
        method: 'DELETE',
        headers: { 'Content-Type':'application/x-www-form-urlencoded',
        'Authorization': localStorage.getItem('id_token')
        }
    }

    return async dispatch => {
        dispatch(requestSpeciality())
        const response = await fetch(speciality_url + speciality_id, config)
        const json = await response.json()
        if (response.ok) {
            dispatch(deleteSpecialityFromList(json.id))
        }
        else {
            handleError(dispatch, json.message)

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
        body: `module_id=${infos.module_id}&is_main=${infos.is_main}`
    }

    return async dispatch => {
        dispatch(requestSpeciality())
        const response = await fetch(speciality_url + infos.speciality_id + "/modules", config)
        const json = await response.json()
        if (response.ok) {
            dispatch(receiveAddModuleToSpeciality(json))
        }
        else {
            handleError(dispatch, json.message)
        }
        return false
    }
}

export function addJobToSpeciality(infos) {
    let config = {
        method: 'POST',
        headers: { 'Content-Type':'application/x-www-form-urlencoded',
        'Authorization': localStorage.getItem('id_token')
        },
        body: `job_id=${infos.job_id}&is_main=${infos.is_main}`
    }

    return async dispatch => {
        dispatch(requestSpeciality())
        const response = await fetch(speciality_url + infos.speciality_id + "/jobs", config)
        const json = await response.json()
        if (response.ok) {
            dispatch(receiveAddModuleToSpeciality(json))
        }
        else {
            handleError(dispatch, json.message)
        }
        return false
    }
}

export function deleteModuleFromSpeciality(speciality_id, module_id) {
    let config = {
        method: 'DELETE',
        headers: { 'Content-Type':'application/x-www-form-urlencoded',
        'Authorization': localStorage.getItem('id_token')
        }
    }

    return async dispatch => {
        dispatch(requestSpeciality())
        const response = await fetch(speciality_url + speciality_id + "/modules/" + module_id, config)
        const json = await response.json()
        if (response.ok) {
            dispatch(receiveDeleteModuleFromSpeciality(json))
        }
        else {
            handleError(dispatch, json.message)

        }
        return false
    }
}

export function deleteJobFromSpeciality(speciality_id, job_id) {
    let config = {
        method: 'DELETE',
        headers: { 'Content-Type':'application/x-www-form-urlencoded',
        'Authorization': localStorage.getItem('id_token')
        }
    }

    return async dispatch => {
        dispatch(requestSpeciality())
        const response = await fetch(speciality_url + speciality_id + "/jobs/" + job_id, config)
        const json = await response.json()
        if (response.ok) {
            dispatch(receiveDeleteJobFromSpeciality(json))
        }
        else {
            handleError(dispatch, json.message)

        }
        return false
    }
}

export function updateMainModuleFromSpeciality(speciality_id, module_id, is_main) {
    let config = {
        method: 'PUT',
        headers: { 'Content-Type':'application/x-www-form-urlencoded',
        'Authorization': localStorage.getItem('id_token')
    },
    body: `is_main=${is_main}`
    }

    return async dispatch => {
        dispatch(requestSpeciality())
        const response = await fetch(speciality_url + speciality_id + "/modules/" + module_id, config)
        const json = await response.json()
        if (response.ok) {
            dispatch(receiveSpeciality(json))
        }
        else {
            handleError(dispatch, json.message)

        }
        return false
    }
}
