import axios from 'axios'
import {GET_CONTACTS, ADD_CONTACT, DELETE_CONTACT, CONTACTS_LOADING} from './types'

export const getContacts = () => dispatch => {
    dispatch(setContactsLoading())
    axios
        .get('http://localhost:5000/api/contacts')
        .then((res) => dispatch({type: GET_CONTACTS, payload: res.data}))
}

export const addContact = (contact) => dispatch => {
    axios
        .post('http://localhost:5000/api/contacts', contact)
        .then((res) => dispatch({type: ADD_CONTACT, payload: res.data}))
}

export const deleteContact = (id) => dispatch => {
    axios
        .delete(`http://localhost:5000/api/contacts/${id}`)
        .then((res) => dispatch({type: DELETE_CONTACT, payload: id}))
}

export const setContactsLoading = () => {
    return {
        type: CONTACTS_LOADING
    }
}