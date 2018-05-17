import {REQUEST_CONCEPTS, RECEIVE_CONCEPTS, ERROR_CONCEPTS} from '../actions/concept'

export default function concepts(state = {
    isFetching: false,
    data: null,
    error: null
    }, action) {
        switch(action.type) {
            case REQUEST_CONCEPTS:
                return  {...state, isFetching: true}
            case RECEIVE_CONCEPTS:
                return  {...state, isFetching: false, data: action.payload}
            case ERROR_CONCEPTS:
                return {...state, isFetching: false, error: action.message}
            default:
                return state
        }
}