import config from '../config'
import {receiveSpecialities} from '../actions/speciality'
const form1_url = `${config.api_url}/forms/specialities/concepts?`


export const REQUEST_FORM = 'REQUEST_FORM'
export const ERROR_FORM = 'ERROR_FORM'


export function requestForm() {
    return {
        type: REQUEST_FORM
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
        dispatch(requestForm())
        const response = await fetch(form1_url + `concept_ids=${ids}`, config)
        const json = await response.json()
        if (response.ok) {
            let specialities_list = []
            json.map(result => specialities_list.push(result.speciality))
            dispatch(receiveSpecialities(specialities_list))
        }
        else {
            dispatch(errorForm(json.message))
        }
    }
}