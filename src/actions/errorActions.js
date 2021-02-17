import axios from 'axios'
import {GET_ERRORS, CLEAR_ERRORS} from './types'
import http from '../../config/route'

export const returnErrors = (msg, status, id = null) => {
    return {
        type: GET_ERRORS,
        payload: {msg, status, id}
    }
}

export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    }
}