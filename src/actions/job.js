import config from '../config'

const job_url = `${config.api_url}/jobs/`

export const REQUEST_JOB = 'REQUEST_JOB'
export const ERROR_JOB = 'ERROR_JOB'

export const RECEIVE_JOB = 'RECEIVE_JOB'
export const RECEIVE_JOBS = 'RECEIVE_JOBS'
export const REINIT_ERROR_JOB = 'REINIT_ERROR_JOB'
export const RECEIVE_DELETE_JOB_FROM_LIST = 'RECEIVE_DELETE_JOB_FROM_LIST'
export const RECEIVE_JOB_IN_LIST = 'RECEIVE_JOB_IN_LIST'

export function requestJob() {
    return {
        type: REQUEST_JOB
    }
}

export function receiveJob(payload) {
    return {
        type: RECEIVE_JOB,
        payload
    }
}

export function receiveJobs(payload) {
    return {
        type: RECEIVE_JOBS,
        payload
    }
}

export function receiveJobInList(payload) {
    return {
        type: RECEIVE_JOB_IN_LIST,
        payload
    }
}

export function errorJob(message) {
    return {
        type: ERROR_JOB,
        message
    }
}

export function deleteJobFromList(id) {
    return {
        type: RECEIVE_DELETE_JOB_FROM_LIST,
        id
    }
}

export function reinitErrorJob() {
    return {
        type: REINIT_ERROR_JOB
    }
}

const handleError = (dispatch, message) => {
    dispatch(errorJob(message))
    setTimeout(() => {
        dispatch(reinitErrorJob())
    }, 5000)
}

export function getJob(concept_id) {
    return async dispatch => {
        dispatch(requestJob())
        const response = await fetch(job_url + concept_id)
        const json = await response.json()
        if (response.ok) {
            console.log(json)
            dispatch(receiveJob(json))
        }
        else {
            handleError(dispatch, json.message)
        }
    }
}

export function getJobs() {
    return async dispatch => {
        dispatch(requestJob())
        const response = await fetch(job_url)
        const json = await response.json()
        if (response.ok) {
            dispatch(receiveJobs(json))
        }
        else {
            handleError(dispatch, json.message)
        }
    }
}

export function updateJob(infos, id) {
    let config = {
        method: 'PUT',
        headers: { 'Content-Type':'application/x-www-form-urlencoded',
        'Authorization': localStorage.getItem('id_token')
        },
        body: `name=${infos.name}`
    }

    return async dispatch => {
        dispatch(requestJob())
        const response = await fetch(job_url + id, config)
        const json = await response.json()
        if (response.ok) {
            dispatch(receiveJob(json))
        }
        else {
            handleError(dispatch, json.message)
        }
        return false
    }
}

export function deleteJob(concept_id) {
    let config = {
        method: 'DELETE',
        headers: { 'Content-Type':'application/x-www-form-urlencoded',
        'Authorization': localStorage.getItem('id_token')
        }
    }

    return async dispatch => {
        dispatch(requestJob())
        const response = await fetch(job_url + concept_id, config)
        const json = await response.json()
        if (response.ok) {
            dispatch(deleteJobFromList(json.id))
        }
        else {
            handleError(dispatch, json.message)

        }
        return false
    }
}

export function addJobToList(infos) {
    let config = {
        method: 'POST',
        headers: { 'Content-Type':'application/x-www-form-urlencoded',
        'Authorization': localStorage.getItem('id_token')
        },
        body: `name=${infos.name}&description=${infos.description}`
    }

    return async dispatch => {
        dispatch(requestJob())
        const response = await fetch(job_url, config)
        const json = await response.json()
        if (response.ok) {
            dispatch(receiveJobInList(json))
        }
        else {
            handleError(dispatch, json.message)
        }
        return false
    }
}
