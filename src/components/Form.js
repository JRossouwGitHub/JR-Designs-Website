import React from 'react'
import {useState} from 'react'
import {connect} from 'react-redux'
import {addContact} from '../actions/contactActions'

const Form = (props) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const [sent, setSent] = useState(false)

    const sendSetTrue = () => {
        setSent(true)
    } 

    const onSubmit = (e) => {
        e.preventDefault()

        const newContact = {
            name: name,
            email: email,
            subject: subject,
            message: message
        }

        console.log(newContact)

        props.addContact(newContact)

        setName('')
        setEmail('')
        setSubject('')
        setMessage('')

        sendSetTrue()
    } 

    return (
        <div>
            {sent ? (<>
                <h2>Your message has been sent!</h2>
            </>) : (<>
                <form onSubmit={onSubmit}>
                    <input type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} required /> 
                    <br /> <br />
                    <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required /> 
                    <br /> <br />
                    <input type='text' placeholder='Subject' value={subject} onChange={(e) => setSubject(e.target.value)} required /> 
                    <br /> <br />
                    <textarea type='message' placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)} required ></textarea> <br /> <br />
                    <button type="submit" value="Submit">Submit</button>
                </form>
            </>)}
            
        </div>
    )
}

const mapStateToProps = (state) => ({
    contact: state.contact
})

export default connect(mapStateToProps, {addContact})(Form)
