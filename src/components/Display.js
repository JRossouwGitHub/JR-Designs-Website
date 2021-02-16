import React from 'react'
import {Link} from 'react-router-dom'

const Display = ({title, image, desc}) => {
    return (
        <div>
            <h4>{title}</h4>
            <Link className="headerlink" to="/"><img className="demo" src={image} alt="" width="" height=""></img></Link>
            <p>{desc}</p>
        </div>
    )
}

export default Display