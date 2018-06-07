import config from '../config'

const concept_url = `${config.api_url}/concepts`

export const REQUEST_CONCEPTS = 'REQUEST_CONCEPTS'
export const RECEIVE_CONCEPTS = 'RECEIVE_CONCEPTS'
export const ERROR_CONCEPTS = 'ERROR_CONCEPTS'

export function requestConcepts() {
    return {
        type: REQUEST_CONCEPTS
    }
}

export function receiveConcepts(payload) {
    return {
        type: RECEIVE_CONCEPTS,
        payload
    }
}

export function errorConcepts(message) {
    return {
        type: ERROR_CONCEPTS,
        message
    }
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
            dispatch(errorConcepts(json.message))
        }

    }
}