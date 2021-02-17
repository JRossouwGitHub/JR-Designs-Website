import {combineReducers} from 'redux'
import contactReducer from './contactReducer'
import errorReducer from './errorReducer'
import authReducer from './authReducer'

export default combineReducers({
    contact: contactReducer,
    error: errorReducer,
    auth: authReducer,
})