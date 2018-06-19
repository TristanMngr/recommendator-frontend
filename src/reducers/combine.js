import {combineReducers} from 'redux'

import concepts from './concept'
import auth from './login'
import speciality from './speciality'
import modules from './module'
import jobs from './job'
import form from './form'

export default combineReducers({concepts, auth, speciality, modules, jobs, form})
