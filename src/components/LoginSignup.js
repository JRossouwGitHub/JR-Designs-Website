import React from 'react'
import Form from './Form'

const LoginSignup = (props) => {
    return(
        <div className="contact-content">
            <div className="contact-content-heading">
                <h3>Login/Signup</h3>
            </div>
            <div className="contact-content-description">
                <div className="form">
                    <h3>Login</h3>
                    <Form type="login" props={props} />
                </div>
                <hr />
                <div className="form">
                    <h3>Signup</h3>
                    <Form type="signup" props={props} />
                </div>
            </div>
            <br /><br /><br />
        </div>
    )
}
export default LoginSignup
