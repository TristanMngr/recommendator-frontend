import {REQUEST_SPECIALITY, RECEIVE_SPECIALITY, ERROR_SPECIALITY} from '../actions/speciality'

export default function speciality(state = {
    isFetching: false,
    data: null,
    error: null
    }, action) {
        switch(action.type) {
            case REQUEST_SPECIALITY:
                return  {...state, isFetching: true}
            case RECEIVE_SPECIALITY:
                return  {...state, isFetching: false, data: action.payload}
            case ERROR_SPECIALITY:
                return {...state, isFetching: false, error: action.message}
            default:
                return state
        }
}
