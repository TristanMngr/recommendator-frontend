import {combineReducers} from 'redux'

import concepts from './concept'
import auth from './login'

export default combineReducers({concepts, auth})