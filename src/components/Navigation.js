import React from 'react'
import {Link} from 'react-router-dom'
import '../style.css'

const Navigation = () => {
    return (
        <div className="navbar">
            <Link className="navlink" to="/">HOME</Link>
            <Link className="navlink" to="/plans">PLANS</Link>
            <Link className="navlink" to="/about">ABOUT</Link>
            <Link className="navlink" to="/contact">CONTACT</Link>
        </div>
    )
}

export default Navigation