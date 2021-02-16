import React from 'react'
import {useState} from 'react'
import Form from './Form'

const Contact = () => {
    return (
        <div className="contact-content">
            <div className="contact-content-heading">
                <h3>CONTACT</h3>
            </div>
            <div className="contact-content-description">
                <div className="form">
                    <h3>Send A Message</h3>
                    <Form />
                </div>
                <hr />
                <div>
                    <div className="details">
                        <h3>Details</h3>
                        <div>
                            <p><strong>Name:</strong> Jacques Rossouw</p>
                            <p><strong>Email:</strong> jrdesigns.work@gmail.com</p>
                            <p><strong>Mobile:</strong><a href="tel: 022 306 2988" className="call"> 022-306-2988</a><span className="mobile"> 022-306-2988</span></p>
                        </div>
                    </div>
                    <br />
                    <div>
                        <h3>Location</h3>
                        <div>
                            <p><strong>Address:</strong> 12A Rothwell Street, Hamilton, Waikato</p>
                            <p><strong>Hours:</strong> 8am-5pm</p>
                            <p><strong>Days:</strong> Monday-Saturday</p>
                        </div>
                    </div>
                    <br />
                    <div className="maps">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.9051833038684!2d175.24356981566095!3d-37.79226177975629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6d22241b32435d%3A0x18c44867db48fc3f!2s12A%20Rothwell%20Street%2C%20Dinsdale%2C%20Hamilton%203204!5e0!3m2!1sen!2snz!4v1599467365506!5m2!1sen!2snz" width="100%" height="100%" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                    </div>
                </div>
            </div>
            <br /><br /><br />
        </div>
    )
}

export default Contact