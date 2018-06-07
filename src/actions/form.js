import config from '../config'

const form1_url = `${config.api_url}/forms/specialities/concepts`


export const REQUEST_FORM = 'REQUEST_FORM'

export function getForm1Response(ids) {
    let config = {
        method: 'PUT',
        headers: { 'Content-Type':'application/x-www-form-urlencoded',
        'Authorization': localStorage.getItem('id_token')
        },
        body: `concept_ids=${ids}`
    }
    return async dispatch => {
        dispatch(requestForm())
        const response = await fetch(form1_url)
        const json = await response.json()
        if (response.ok) {

        }
        else {
            dispatch(errorForm(json.message))
        }
    }
}