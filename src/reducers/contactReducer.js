import {GET_CONTACTS, ADD_CONTACT, DELETE_CONTACT, CONTACTS_LOADING} from '../actions/types'

const initialState = {
    contacts: [],
    loading: false
}

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_CONTACTS:
            return {
                ...state,
                contacts: action.payload,
                loading: false
            }
        case DELETE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter((contact) => contact._id !== action.payload)
            }
        case ADD_CONTACT:
            return {
                ...state,
                contacts: [action.payload, ...state.contacts]
            }
        case CONTACTS_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
}