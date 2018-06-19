import config from '../config'
import {receiveSpecialities} from '../actions/speciality'
import {clearCurrentSpecialities} from '../actions/speciality'
const form1_url = `${config.api_url}/forms/specialities/concepts?`
const form2_url = `${config.api_url}/forms/specialities/jobs?`

export const REQUEST_FORM_1 = 'REQUEST_FORM_1'
export const REQUEST_FORM_2 = 'REQUEST_FORM_2'
export const RECEIVE_FORM_1 = 'RECEIVE_FORM_1'
export const RECEIVE_FORM_2 = 'RECEIVE_FORM_2'
export const ERROR_FORM = 'ERROR_FORM'


export function requestForm1() {
    return {
        type: REQUEST_FORM_1
    }
}

export function requestForm2() {
    return {
        type: REQUEST_FORM_2
    }
}
export function receiveForm1() {
    return {
        type: RECEIVE_FORM_1
    }
}
export function receiveForm2() {
    return {
        type: RECEIVE_FORM_2
    }
}
export function errorForm() {
    return {
        type: ERROR_FORM
    }
}

export function getForm1Responses(ids) {
    let config = {
        method: 'GET',
        headers: { 'Content-Type':'application/x-www-form-urlencoded',
        'Authorization': localStorage.getItem('id_token')
        }
    }
    return async dispatch => {
        dispatch(clearCurrentSpecialities())
        dispatch(requestForm1())
        const response = await fetch(form1_url + `concept_ids=${ids}`, config)
        const json = await response.json()
        if (response.ok) {
            dispatch(receiveForm1())
            dispatch(receiveSpecialities(json))
        }
        else {
            dispatch(errorForm(json.message))
        }
    }
}

export function getForm2Responses(ids) {
    let config = {
        method: 'GET',
        headers: { 'Content-Type':'application/x-www-form-urlencoded',
        'Authorization': localStorage.getItem('id_token')
        }
    }
    return async dispatch => {
        dispatch(clearCurrentSpecialities())
        dispatch(requestForm2())
        const response = await fetch(form2_url + `job_ids=${ids}`, config)
        const json = await response.json()
        if (response.ok) {
            dispatch(receiveForm2())
            dispatch(receiveSpecialities(json))
        }
        else {
            dispatch(errorForm(json.message))
        }
    }
}