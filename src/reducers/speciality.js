import {REQUEST_SPECIALITY, RECEIVE_SPECIALITY, ERROR_SPECIALITY,
    REQUEST_ADD_MODULE_TO_SPECIALITY, RECEIVE_ADD_MODULE_TO_SPECIALITY, ERROR_ADD_MODULE_TO_SPECIALITY,
    REQUEST_SPECIALITIES, RECEIVE_SPECIALITIES, ERROR_SPECIALITIES,
    RECEIVE_SPECIALITY_IN_LIST}
    from '../actions/speciality'

export default function speciality(state = {
    isFetching: false,
    data: null,
    error: null
    }, action) {
        switch(action.type) {
            case REQUEST_SPECIALITY:
            case REQUEST_SPECIALITIES:
            case REQUEST_ADD_MODULE_TO_SPECIALITY:
                return  {...state, isFetching: true}
            case RECEIVE_SPECIALITY:
            case RECEIVE_SPECIALITIES:
            case RECEIVE_ADD_MODULE_TO_SPECIALITY:
                return  {...state, isFetching: false, data: action.payload}
            case ERROR_SPECIALITY:
            case ERROR_SPECIALITIES:
            case ERROR_ADD_MODULE_TO_SPECIALITY:
                return {...state, isFetching: false, error: action.message}
            case RECEIVE_SPECIALITY_IN_LIST:
                return {
                    ...state,
                    isFetching: false,
                    data: [...state.data, action.payload]
                }
            default:
                return state
        }
}
