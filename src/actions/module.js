import config from '../config'

const module_url = `${config.api_url}/modules/`

export const REQUEST_MODULE = 'REQUEST_MODULE'
export const ERROR_MODULE = 'ERROR_MODULE'

export const RECEIVE_MODULE = 'RECEIVE_MODULE'
export const RECEIVE_MODULES = 'RECEIVE_MODULES'
export const RECEIVE_ADD_CONCEPT_TO_MODULE = 'RECEIVE_ADD_CONCEPT_TO_MODULE'
export const RECEIVE_MODULE_IN_LIST = 'RECEIVE_MODULE_IN_LIST'
export const RECEIVE_DELETE_MODULE_FROM_LIST = 'RECEIVE_DELETE_MODULE_FROM_LIST'

export function receiveModules(payload) {
    return {
        type: RECEIVE_MODULES,
        payload
    }
}

export function requestModule() {
    return {
        type: REQUEST_MODULE
    }
}

export function receiveModule(payload) {
    return {
        type: RECEIVE_MODULE,
        payload
    }
}

export function deleteModuleFromList(id) {
    return {
        type: RECEIVE_DELETE_MODULE_FROM_LIST,
        id
    }
}

export function receiveModuleInList(payload) {
    return {
        type: RECEIVE_MODULE_IN_LIST,
        payload
    }
}

export function errorModule(message) {
    return {
        type: ERROR_MODULE,
        message
    }
}

export function receiveAddConceptToModule(payload) {
    return {
        type: RECEIVE_ADD_CONCEPT_TO_MODULE,
        payload
    }
}

export function getModules() {
    return async dispatch => {
        dispatch(requestModule)
        const response = await fetch(module_url)
        const json = await response.json()
        if (response.ok) {
            console.log(json)
            dispatch(receiveModules(json))
        }
        else {
            dispatch(errorModule(json.message))
        }

    }
}

export function getModule(module_id) {
    return async dispatch => {
        dispatch(requestModule)
        const response = await fetch(module_url + module_id)
        const json = await response.json()
        if (response.ok) {
            console.log(json)
            dispatch(receiveModule(json))
        }
        else {
            dispatch(errorModule(json.message))
        }

    }
}

export function updateModule(infos, id) {

    let config = {
        method: 'PUT',
        headers: { 'Content-Type':'application/x-www-form-urlencoded',
        'Authorization': localStorage.getItem('id_token')
        },
        body: `name=${infos.name}&description=${infos.description}`
    }

    return async dispatch => {
        dispatch(requestModule())
        const response = await fetch(module_url + id, config)
        const json = await response.json()
        if (response.ok) {
            dispatch(receiveModule(json))
        }
        else {
            dispatch(errorModule(json.message))

        }
        return false
    }
}


export function addModuleToList(infos) {

    let config = {
        method: 'POST',
        headers: { 'Content-Type':'application/x-www-form-urlencoded',
        'Authorization': localStorage.getItem('id_token')
        },
        body: `name=${infos.name}&description=${infos.description}`
    }

    return async dispatch => {
        dispatch(requestModule())
        const response = await fetch(module_url, config)
        const json = await response.json()
        if (response.ok) {
            dispatch(receiveModuleInList(json))
        }
        else {
            dispatch(errorModule(json.message))

        }
        return false
    }
}

export function deleteModule(module_id) {
    let config = {
        method: 'DELETE',
        headers: { 'Content-Type':'application/x-www-form-urlencoded',
        'Authorization': localStorage.getItem('id_token')
        }
    }

    return async dispatch => {
        dispatch(requestModule())
        const response = await fetch(module_url + module_id, config)
        const json = await response.json()
        if (response.ok) {
            dispatch(deleteModuleFromList(json.id))
        }
        else {
            dispatch(errorModule(json.message))

        }
        return false
    }
}

export function addConceptToModule(infos) {
    let config = {
        method: 'POST',
        headers: { 'Content-Type':'application/x-www-form-urlencoded',
        'Authorization': localStorage.getItem('id_token')
        },
        body: `concept_id=${infos.concept_id}`
    }

    return async dispatch => {
        dispatch(requestModule())
        const response = await fetch(module_url + infos.module_id + "/concepts", config)
        const json = await response.json()
        if (response.ok) {
            dispatch(receiveAddConceptToModule(json))
        }
        else {
            dispatch(errorModule(json.message))
        }
        return false
    }
}
