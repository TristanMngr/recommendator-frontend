import {combineReducers} from 'redux'

import concepts from './concept'
import auth from './login'
import speciality from './speciality'

export default combineReducers({concepts, auth, speciality})
