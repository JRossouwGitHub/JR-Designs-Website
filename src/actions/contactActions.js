import axios from 'axios'
import {GET_CONTACTS, ADD_CONTACT, DELETE_CONTACT, CONTACTS_LOADING} from './types'
import {tokenConfig} from './authActions'
import {returnErrors} from './errorActions'
import http from '../../config/route'

export const getContacts = () => (dispatch, getState) => {
    dispatch(setContactsLoading())
    axios
        .get(`${http.http}/api/contacts`, tokenConfig(getState))
        .then((res) => dispatch({type: GET_CONTACTS, payload: res.data}))
        .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)))
}

export const addContact = (contact) => dispatch => {
    axios
        .post(`${http.http}/api/contacts`, contact)
        .then((res) => dispatch({type: ADD_CONTACT, payload: res.data}))
        .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)))
}

export const deleteContact = (id) => (dispatch, getState) => {
    axios
        .delete(`${http.http}/api/contacts/${id}`, tokenConfig(getState))
        .then((res) => dispatch({type: DELETE_CONTACT, payload: id}))
        .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)))
}

export const setContactsLoading = () => {
    return {
        type: CONTACTS_LOADING
    }
}