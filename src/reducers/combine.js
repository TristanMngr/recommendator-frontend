import {combineReducers} from 'redux'

import concepts from './concept'
import auth from './login'
import speciality from './speciality'
import modules from './module'
import jobs from './job'

export default combineReducers({concepts, auth, speciality, modules, jobs})
