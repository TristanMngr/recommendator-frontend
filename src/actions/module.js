import config from '../config'

const module_url = `${config.api_url}/modules/`

export const REQUEST_MODULE = 'REQUEST_MODULE'
export const RECEIVE_MODULE = 'RECEIVE_MODULE'
export const ERROR_MODULE = 'ERROR_MODULE'
export const REQUEST_MODULES = 'REQUEST_MODULES'
export const RECEIVE_MODULES = 'RECEIVE_MODULES'
export const ERROR_MODULES = 'ERROR_MODULES'
export const REQUEST_ADD_CONCEPT_TO_MODULE = 'REQUEST_ADD_CONCEPT_TO_MODULE'
export const RECEIVE_ADD_CONCEPT_TO_MODULE = 'RECEIVE_ADD_CONCEPT_TO_MODULE'
export const ERROR_ADD_CONCEPT_TO_MODULE = 'ERROR_ADD_CONCEPT_TO_MODULE'
export const RECEIVE_MODULE_IN_LIST = 'RECEIVE_MODULE_IN_LIST'

export function requestModules() {
    return {
        type: REQUEST_MODULES
    }
}

export function receiveModules(payload) {
    return {
        type: RECEIVE_MODULES,
        payload
    }
}

export function errorModules(message) {
    return {
        type: ERROR_MODULES,
        message
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

export function requestAddConceptToModule() {
    return {
        type: REQUEST_ADD_CONCEPT_TO_MODULE
    }
}

export function receiveAddConceptToModule(payload) {
    return {
        type: RECEIVE_ADD_CONCEPT_TO_MODULE,
        payload
    }
}

export function errorAddConceptToModule(message) {
    return {
        type: ERROR_ADD_CONCEPT_TO_MODULE,
        message
    }
}


export function getModules() {
    return async dispatch => {
        dispatch(requestModules)
        const response = await fetch(module_url)
        const json = await response.json()
        if (response.ok) {
            console.log(json)
            dispatch(receiveModules(json))
        }
        else {
            dispatch(errorModules(json.message))
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
        dispatch(requestModule(infos))
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
        dispatch(requestModule(infos))
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

export function addConceptToModule(infos) {
    let config = {
        method: 'POST',
        headers: { 'Content-Type':'application/x-www-form-urlencoded',
        'Authorization': localStorage.getItem('id_token')
        },
        body: `concept_id=${infos.toAdd_id}`
    }

    return async dispatch => {
        dispatch(requestAddConceptToModule())
        const response = await fetch(module_url + infos.object_id + "/concepts", config)
        const json = await response.json()
        if (response.ok) {
            dispatch(receiveAddConceptToModule(json))
        }
        else {
            dispatch(errorAddConceptToModule(json.message))
        }
        return false
    }
}
