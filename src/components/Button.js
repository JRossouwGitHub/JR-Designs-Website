import React from 'react'
import {Link} from 'react-router-dom'

const Button = ({contact, plan, text, onClick, onClick2, active, active2}) => {
    return (
        <div className="plans-mobile-button-inline">
            {contact ? (<>
                <Link to="/contact"><button>{text}</button></Link>
            </>) : null}
            {plan ? (<>
                <button onClick={() => onClick(text)} className={`plans-mobile-button ${active ? "active" : ""}`}>{text}</button>
            </>) : (<>
                <button onClick={() => onClick2(text)} className={`plans-mobile-button ${active2 ? "active" : ""}`}>{text}</button>
            </>)}
        </div>
    )
}

export default Button