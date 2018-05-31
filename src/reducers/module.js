import {REQUEST_MODULE, RECEIVE_MODULE, ERROR_MODULE, REQUEST_MODULES, RECEIVE_MODULES, ERROR_MODULES,
    REQUEST_ADD_CONCEPT_TO_MODULE, RECEIVE_ADD_CONCEPT_TO_MODULE, ERROR_ADD_CONCEPT_TO_MODULE} from '../actions/module'

export default function module(state = {
    isFetching: false,
    data: null,
    error: null
    }, action) {
        switch(action.type) {
            case REQUEST_MODULE:
            case REQUEST_MODULES:
            case REQUEST_ADD_CONCEPT_TO_MODULE:
                return  {...state, isFetching: true};
            case RECEIVE_MODULE:
            case RECEIVE_MODULES:
            case RECEIVE_ADD_CONCEPT_TO_MODULE:
                return  {...state, isFetching: false, data: action.payload};
            case ERROR_MODULE:
            case ERROR_MODULES:
            case ERROR_ADD_CONCEPT_TO_MODULE:
                return {...state, isFetching: false, error: action.message};
            default:
                return state
        }
}
