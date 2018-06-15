import { REQUEST_JOB, RECEIVE_JOB, ERROR_JOB, REINIT_ERROR_JOB, RECEIVE_JOB_IN_LIST, RECEIVE_DELETE_JOB_FROM_LIST,
    RECEIVE_JOBS
} from '../actions/job'

export default function job(state = {
    isFetching: false,
    list: null,
    error: null,
    current: null
    }, action) {
        switch(action.type) {
            case REQUEST_JOB:
                return  {...state, isFetching: true}
            case RECEIVE_JOB:
                return {...state, isFetching: false, current: action.payload}
            case RECEIVE_JOBS:
                return {...state, isFetching: false, list: action.payload}
            case ERROR_JOB:
                return {...state, isFetching: false, error: action.message}
            case RECEIVE_JOB_IN_LIST:
                return {
                    ...state,
                    isFetching: false,
                    list: [...state.list, action.payload]
                }
            case RECEIVE_DELETE_JOB_FROM_LIST:
                return {
                    ...state,
                    isFetching: false,
                    list: state.list.filter(elem => elem.id !== action.id)
                }
            case REINIT_ERROR_JOB:
                return {
                    ...state,
                    error: null
                }
            default:
                return state
        }
}
