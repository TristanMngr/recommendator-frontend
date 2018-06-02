import {REQUEST_SPECIALITY, RECEIVE_SPECIALITY, ERROR_SPECIALITY,
    REQUEST_ADD_MODULE_TO_SPECIALITY, RECEIVE_ADD_MODULE_TO_SPECIALITY, ERROR_ADD_MODULE_TO_SPECIALITY,
    REQUEST_SPECIALITIES, RECEIVE_SPECIALITIES, ERROR_SPECIALITIES,
    RECEIVE_SPECIALITY_IN_LIST}
    from '../actions/speciality'

export default function speciality(state = {
    isFetching: false,
    list: null,
    error: null,
    current: null
    }, action) {
        switch(action.type) {
            case REQUEST_SPECIALITY:
            case REQUEST_SPECIALITIES:
            case REQUEST_ADD_MODULE_TO_SPECIALITY:
                return  {...state, isFetching: true}
            case RECEIVE_SPECIALITY:
                return  {...state, isFetching: false, current: action.payload}
            case RECEIVE_SPECIALITIES:
                return  {...state, isFetching: false, list: action.payload}
            case RECEIVE_ADD_MODULE_TO_SPECIALITY:
                return  {...state, isFetching: false, current: action.payload}
            case ERROR_SPECIALITY:
            case ERROR_SPECIALITIES:
            case ERROR_ADD_MODULE_TO_SPECIALITY:
                return {...state, isFetching: false, error: action.message}
            case RECEIVE_SPECIALITY_IN_LIST:
                return {
                    ...state,
                    isFetching: false,
                    list: [...state.list, action.payload]
                }
            default:
                return state
        }
}
