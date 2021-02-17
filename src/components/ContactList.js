import React from 'react'
import {useEffect, useState, useRef} from 'react'
import {connect} from 'react-redux'
import {getContacts, deleteContact} from '../actions/contactActions'
import PropTypes from 'prop-types'

const ContactList = (props) => {
    const [auth, setAuth] = useState(true)

    useEffect(() => {
        props.getContacts()
    }, [])

    const mounted = useRef();
    useEffect(() => {
        if (!mounted.current) {
            // do componentDidMount logic
            mounted.current = true;
        } else {
            if(props.error){
                setAuth(false)
            }
            if(props.isAuthenticated){
                setAuth(true)
            }
        }
    });

    const {contacts} = props.contact

    const onDeleteClick = (_id) => {
        props.deleteContact(_id)
    }

    return (
        <div>
            {auth ? null : props.history.push('/')}
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
    isAuthenticated: PropTypes.bool,
    error: PropTypes.string
}

const mapStateToProps = (state) => ({
    contact: state.contact,
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error.msg.msg
})

export default connect(mapStateToProps, {getContacts, deleteContact})(ContactList)
