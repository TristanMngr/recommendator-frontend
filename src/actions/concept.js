import config from '../config'

const concept_url = `${config.api_url}/concepts/`

export const REQUEST_CONCEPT = 'REQUEST_CONCEPT'
export const ERROR_CONCEPT = 'ERROR_CONCEPT'

export const RECEIVE_CONCEPTS = 'RECEIVE_CONCEPTS'
export const RECEIVE_CONCEPT = 'RECEIVE_CONCEPT'
export const REINIT_ERROR_CONCEPT = 'REINIT_ERROR_CONCEPT'
export const RECEIVE_DELETE_CONCEPT_FROM_LIST = 'RECEIVE_DELETE_CONCEPT_FROM_LIST'
export const RECEIVE_CONCEPT_IN_LIST = 'RECEIVE_CONCEPT_IN_LIST'

export function requestConcept() {
    return {
        type: REQUEST_CONCEPT
    }
}

export function receiveConcept(payload) {
    return {
        type: RECEIVE_CONCEPT,
        payload
    }
}

export function receiveConcepts(payload) {
    return {
        type: RECEIVE_CONCEPTS,
        payload
    }
}

export function receiveConceptInList(payload) {
    return {
        type: RECEIVE_CONCEPT_IN_LIST,
        payload
    }
}

export function errorConcept(message) {
    return {
        type: ERROR_CONCEPT,
        message
    }
}

export function deleteConceptFromList(id) {
    return {
        type: RECEIVE_DELETE_CONCEPT_FROM_LIST,
        id
    }
}

export function reinitErrorConcept() {
    return {
        type: REINIT_ERROR_CONCEPT
    }
}

const handleError = (dispatch, message) => {
    dispatch(errorConcept(message))
    setTimeout(() => {
        dispatch(reinitErrorConcept())
    }, 5000)
}

export function getConcepts() {
    return async dispatch => {
        dispatch(requestConcepts())
        const response = await fetch(concept_url)
        const json = await response.json()
        if (response.ok) {
            dispatch(receiveConcepts(json))
        }
        else {
            handleError(dispatch, json.message)
        }
    }
}

export function deleteConcept(concept_id) {
    let config = {
        method: 'DELETE',
        headers: { 'Content-Type':'application/x-www-form-urlencoded',
        'Authorization': localStorage.getItem('id_token')
        }
    }

    return async dispatch => {
        dispatch(requestConcept())
        const response = await fetch(concept_url + concept_id, config)
        const json = await response.json()
        if (response.ok) {
            dispatch(deleteConceptFromList(json.id))
        }
        else {
            handleError(dispatch, json.message)

        }
        return false
    }
}

export function addConceptToList(infos) {
    let config = {
        method: 'POST',
        headers: { 'Content-Type':'application/x-www-form-urlencoded',
        'Authorization': localStorage.getItem('id_token')
        },
        body: `name=${infos.name}`
    }

    return async dispatch => {
        dispatch(requestConcept())
        const response = await fetch(concept_url, config)
        const json = await response.json()
        if (response.ok) {
            dispatch(receiveConceptInList(json))
        }
        else {
            handleError(dispatch, json.message)
        }
        return false
    }
}
