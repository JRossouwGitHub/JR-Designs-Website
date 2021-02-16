import React from 'react'
import {Link} from 'react-router-dom'
import '../style.css'
import Logo from '../img/Icon-DARK.png'

const Header = () => {
    return (
        <div className="header">
            <Link className="headerlink" to="/"><img src={Logo} className="icon"></img></Link>
        </div>
    )
}

export default Header