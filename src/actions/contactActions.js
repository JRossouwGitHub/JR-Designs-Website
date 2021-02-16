import axios from 'axios'
import {GET_CONTACTS, ADD_CONTACT, DELETE_CONTACT, CONTACTS_LOADING} from './types'
import http from '../../config/route'

export const getContacts = () => dispatch => {
    dispatch(setContactsLoading())
    axios
        .get(`${http.http}/api/contacts`)
        .then((res) => dispatch({type: GET_CONTACTS, payload: res.data}))
}

export const addContact = (contact) => dispatch => {
    axios
        .post(`${http.http}/api/contacts`, contact)
        .then((res) => dispatch({type: ADD_CONTACT, payload: res.data}))
}

export const deleteContact = (id) => dispatch => {
    axios
        .delete(`${http.http}/api/contacts/${id}`)
        .then((res) => dispatch({type: DELETE_CONTACT, payload: id}))
}

export const setContactsLoading = () => {
    return {
        type: CONTACTS_LOADING
    }
}