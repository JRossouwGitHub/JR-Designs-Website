import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {logout} from '../../actions/authActions'

const Logout = (props) => {
    return (
        <Fragment>
            <Link className="navlink login-signup" to="/login-signup" onClick={props.logout}>{props.name}, Logout?</Link>
        </Fragment>
    )
}

Logout.propTypes = {
    logout: PropTypes.func.isRequired
}

export default connect (null, {logout})(Logout)
