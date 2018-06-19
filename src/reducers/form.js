import {REQUEST_FORM_1,REQUEST_FORM_2, RECEIVE_FORM_1, RECEIVE_FORM_2} from '../actions/form'

export default function form(state = {
    form1: {isFetching: false},
    form2: {isFetching: false}
}, action ) {
    switch (action.type) {
        case REQUEST_FORM_1: 
            return {...state, form1: {isFetching: true}}
        case REQUEST_FORM_2: 
            return {...state, form2: {isFetching: true}}
        case RECEIVE_FORM_1: 
            return {...state, form1: {isFetching: false}}
        case RECEIVE_FORM_2: 
            return {...state, form2: {isFetching: false}}
        default: 
            return state
    }
}