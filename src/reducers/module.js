import {REQUEST_MODULE, RECEIVE_MODULE, ERROR_MODULE, RECEIVE_MODULES, RECEIVE_ADD_CONCEPT_TO_MODULE,
    RECEIVE_MODULE_IN_LIST, RECEIVE_DELETE_MODULE_FROM_LIST, RECEIVE_DELETE_CONCEPT_FROM_MODULE,
    REINIT_ERROR_MODULE } from '../actions/module'

export default function module(state = {
    isFetching: false,
    list: null,
    error: null,
    current: null
    }, action) {
        switch(action.type) {
            case REQUEST_MODULE:
                return  {...state, isFetching: true};
            case RECEIVE_MODULE:
                return  {...state, isFetching: false, current: action.payload};
            case RECEIVE_MODULES:
                return  {...state, isFetching: false, list: action.payload};
            case RECEIVE_ADD_CONCEPT_TO_MODULE:
                return  {...state, isFetching: false, current: action.payload};
            case ERROR_MODULE:
                return {...state, isFetching: false, error: action.message};
            case RECEIVE_MODULE_IN_LIST:
                return {
                    ...state,
                    isFetching: false,
                    list: [...state.list, action.payload]
                }
            case RECEIVE_DELETE_MODULE_FROM_LIST:
                return {
                    ...state,
                    isFetching: false,
                    list: state.list.filter(elem => elem.id !== action.id)
                }
            case RECEIVE_DELETE_CONCEPT_FROM_MODULE:
                return {
                    ...state,
                    isFetching: false,
                    current: action.payload
                }
            case REINIT_ERROR_MODULE:
                return {
                    ...state,
                    error: null
                }
            default:
                return state
        }
}
