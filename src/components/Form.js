import React from 'react'
import {useState, useEffect, useRef} from 'react'
import {connect} from 'react-redux'
import {addContact} from '../actions/contactActions'
import {signup, login} from '../actions/authActions'
import {clearErrors} from '../actions/errorActions'
import PropTypes from 'prop-types'

const Form = (props) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [password, setPassword] = useState('')

    const [errorL, setErrorL] = useState('')
    const [errorS, setErrorS] = useState('')

    const [sent, setSent] = useState(false)

    const sendSetTrue = () => {
        setSent(true)
    } 

    const mounted = useRef();
    useEffect(() => {
        if (!mounted.current) {
            // do componentDidMount logic
            mounted.current = true;
        } else {
            if(props.error.id === 'REGISTER_FAIL'){
                const _error = props.error.msg.msg
                setErrorS(_error)
            } else {
                setErrorS(null)
            }
            if(props.error.id === 'LOGIN_FAIL'){
                const _error = props.error.msg.msg
                setErrorL(_error)
            } else {
                setErrorL(null)
            }
        }
    });

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
    const _login = (e) => {
        e.preventDefault()

        const details = {
            email: email,
            password: password
        }

        props.login(details)

        setPassword('')

        if(errorL){
            return null
        }
        props.props.history.push('/')
    } 

    const _signup = (e) => {
        e.preventDefault()

        const newUser = {
            name: name,
            email: email,
            password: password
        }

        props.signup(newUser)

        setName('')
        setEmail('')
        setPassword('')

        if(errorS){
            return null
        }
        props.props.history.push('/')
    } 

    return (
        <div>
            {props.type ? (<>
                {props.type == "login" ? (<>
                    <form onSubmit={_login}>
                        {errorL ? (<>
                            <span className="errMsg" onClick={() => props.clearErrors()}><span className="right">&times;</span>{props.error.msg.msg}.</span>
                            <br /> <br />
                        </>) : (<></>)}
                        <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} /> 
                        <br /> <br />
                        <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} /> 
                        <br /> <br />
                        <button type="submit" value="Submit">Login</button>
                    </form>
                </>) : (<></>)}
                {props.type == "signup" ? (<>
                    <form onSubmit={_signup}>
                        {errorS ? (<>
                            <span className="errMsg" onClick={() => props.clearErrors()}><span className="right">&times;</span>{props.error.msg.msg}.</span>
                            <br /> <br />
                        </>) : (<></>)}
                        <input type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} /> 
                        <br /> <br />
                        <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} /> 
                        <br /> <br />
                        <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} /> 
                        <br /> <br />
                        <button type="submit" value="Submit">Signup</button>
                    </form>
                </>) : (<></>)}
            </>) : (<>
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
            </>)}
        </div>
    )
}

Form.propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    clearErrors: PropTypes.func.isRequired,
    signup: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    contact: state.contact,
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
})

export default connect(mapStateToProps, {addContact, signup, clearErrors, login})(Form)
