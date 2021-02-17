import React from 'react'
import {Link} from 'react-router-dom'
import {useState, useEffect, useRef} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Logout from '../components/auth/Logout'
import '../style.css'

const Navigation = (props) => {
    return (
        <div className="navbar">
            <Link className="navlink" to="/">HOME</Link>
            <Link className="navlink" to="/plans">PLANS</Link>
            <Link className="navlink" to="/about">ABOUT</Link>
            <Link className="navlink" to="/contact">CONTACT</Link>
            {!props.isAuthenticated ? <Link className="navlink login-signup" to="/login-signup">Login/Signup</Link> : <Logout name={props.user.name} />}
        </div>
    )
}

Navigation.propTypes = {
    isAuthenticated: PropTypes.bool,
    user: PropTypes.object
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
})

export default connect(mapStateToProps, {})(Navigation) 