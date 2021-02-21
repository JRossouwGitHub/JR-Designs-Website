import React from 'react'
import {useEffect} from 'react'
import {connect} from 'react-redux'
import {getContacts, deleteContact} from '../actions/contactActions'
import PropTypes from 'prop-types'

const ContactList = (props) => {
    useEffect(() => {
        props.getContacts()
    }, [])

    const {contacts} = props.contact

    const onDeleteClick = (_id) => {
        props.deleteContact(_id)
    }

    return (
        <div>
            {console.log(props)}
            {contacts.map(({_id, name, email, subject, message}) => (
                <div className="contact-display" key={_id}>
                    <div className="delete-contact" onClick={() => {onDeleteClick(_id)}}>&times;</div>
                    <div>
                        <p>
                            <label>Name: </label>
                            {name}
                        </p>
                    </div>
                    <div>
                        <p>
                            <label>Email: </label>
                            {email}
                        </p>
                    </div>
                    <div>
                        <p>
                            <label>Subject: </label>
                            {subject}
                        </p>
                    </div>
                    <div>
                        <p>
                            <label>Message: </label> <br />
                            {message}
                        </p>
                    </div>
                    <br />
                </div>
            ))}
        </div>
    )
}

ContactList.propTypes = {
    getContacts: PropTypes.func.isRequired,
    contact: PropTypes.object.isRequired,
    token: PropTypes.string
}

const mapStateToProps = (state) => ({
    contact: state.contact,
    token: state.auth.token
})

export default connect(mapStateToProps, {getContacts, deleteContact})(ContactList)
