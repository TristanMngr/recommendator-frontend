import {REQUEST_CONCEPT, RECEIVE_CONCEPTS, ERROR_CONCEPT,
    REINIT_ERROR_CONCEPT, RECEIVE_DELETE_CONCEPT_FROM_LIST, RECEIVE_CONCEPT_IN_LIST, RECEIVE_CONCEPT
    } from '../actions/concept'

export default function concepts(state = {
    isFetching: false,
    data: null,
    error: null
    }, action) {
        switch(action.type) {
            case REQUEST_CONCEPT:
                return  {...state, isFetching: true}
            case RECEIVE_CONCEPT:
                return {...state, isFetching: false, current: action.payload}
            case RECEIVE_CONCEPTS:
                return  {...state, isFetching: false, list: action.payload}
            case ERROR_CONCEPT:
                return {...state, isFetching: false, error: action.message}
            case RECEIVE_CONCEPT_IN_LIST:
                return {
                    ...state,
                    isFetching: false,
                    list: [...state.list, action.payload]
                }
            case RECEIVE_DELETE_CONCEPT_FROM_LIST:
                return {
                    ...state,
                    isFetching: false,
                    list: state.list.filter(elem => elem.id !== action.id)
                }
            case REINIT_ERROR_CONCEPT:
                return {
                    ...state,
                    error: null
                }
            default:
                return state
        }
}
