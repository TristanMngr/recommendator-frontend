import {REQUEST_SPECIALITY, RECEIVE_SPECIALITY, ERROR_SPECIALITY,
    REQUEST_ADD_MODULE_TO_SPECIALITY, RECEIVE_ADD_MODULE_TO_SPECIALITY, ERROR_ADD_MODULE_TO_SPECIALITY}
    from '../actions/speciality'

export default function speciality(state = {
    isFetching: false,
    data: null,
    error: null
    }, action) {
        switch(action.type) {
            case REQUEST_SPECIALITY:
            case REQUEST_ADD_MODULE_TO_SPECIALITY:
                return  {...state, isFetching: true}
            case RECEIVE_SPECIALITY:
            case RECEIVE_ADD_MODULE_TO_SPECIALITY:
                return  {...state, isFetching: false, data: action.payload}
            case ERROR_SPECIALITY:
            case ERROR_ADD_MODULE_TO_SPECIALITY:
                return {...state, isFetching: false, error: action.message}
            default:
                return state
        }
}
