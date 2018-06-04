import {REQUEST_SPECIALITY, RECEIVE_SPECIALITY, ERROR_SPECIALITY, RECEIVE_ADD_MODULE_TO_SPECIALITY,
    RECEIVE_SPECIALITIES, RECEIVE_SPECIALITY_IN_LIST, RECEIVE_DELETE_SPECIALITY_FROM_LIST,
    RECEIVE_DELETE_MODULE_FROM_SPECIALITY } from '../actions/speciality'

export default function speciality(state = {
    isFetching: false,
    list: null,
    error: null,
    current: null
    }, action) {
        switch(action.type) {
            case REQUEST_SPECIALITY:
                return  {...state, isFetching: true}
            case RECEIVE_SPECIALITY:
                return  {...state, isFetching: false, current: action.payload}
            case RECEIVE_SPECIALITIES:
                return  {...state, isFetching: false, list: action.payload}
            case RECEIVE_ADD_MODULE_TO_SPECIALITY:
                return  {...state, isFetching: false, current: action.payload}
            case ERROR_SPECIALITY:
                return {...state, isFetching: false, error: action.message}
            case RECEIVE_SPECIALITY_IN_LIST:
                return {
                    ...state,
                    isFetching: false,
                    list: [...state.list, action.payload]
                }
            case RECEIVE_DELETE_SPECIALITY_FROM_LIST:
                return {
                    ...state,
                    isFetching: false,
                    list: state.list.filter(elem => elem.id !== action.id)
                }
            case RECEIVE_DELETE_MODULE_FROM_SPECIALITY:
                return {
                    ...state,
                    isFetching: false,
                    current: action.payload
                }
            default:
                return state
        }
}
