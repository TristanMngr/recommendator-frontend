import {REQUEST_MODULE, RECEIVE_MODULE, ERROR_MODULE, REQUEST_MODULES, RECEIVE_MODULES, ERROR_MODULES,
    REQUEST_ADD_CONCEPT_TO_MODULE, RECEIVE_ADD_CONCEPT_TO_MODULE, ERROR_ADD_CONCEPT_TO_MODULE,
    RECEIVE_MODULE_IN_LIST} from '../actions/module'

export default function module(state = {
    isFetching: false,
    list: null,
    error: null,
    current: null
    }, action) {
        switch(action.type) {
            case REQUEST_MODULE:
            case REQUEST_MODULES:
            case REQUEST_ADD_CONCEPT_TO_MODULE:
                return  {...state, isFetching: true};
            case RECEIVE_MODULE:
                return  {...state, isFetching: false, current: action.payload};
            case RECEIVE_MODULES:
                return  {...state, isFetching: false, list: action.payload};
            case RECEIVE_ADD_CONCEPT_TO_MODULE:
                return  {...state, isFetching: false, current: action.payload};
            case ERROR_MODULE:
            case ERROR_MODULES:
            case ERROR_ADD_CONCEPT_TO_MODULE:
                return {...state, isFetching: false, error: action.message};
            case RECEIVE_MODULE_IN_LIST:
            return {
                ...state,
                isFetching: false,
                list: [...state.list, action.payload]
            }
            default:
                return state
        }
}
