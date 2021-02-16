import React from 'react'
import {Link} from 'react-router-dom'
import Display from './Display'
import A from '../img/Business-Layout.png'
import B from '../img/Portfolio-Layout.png'
import C from '../img/Personal-Layout.png'

const Home = () => {
    return (
        <div className="index-content">
            <div className="index-content-heading">
                <h3>WELCOME</h3>
            </div>
            <div className="index-content-description">
                <p>Here are some examples of the types of website we provide (click a layout for demo).</p>
            </div>
            <div>
                <Display title="Business/Brochure" image={A} desc="Perfect for a business that offers different skills and services!" />
            </div>
            <div></div>
            <div>
                <Display title="Portfolio" image={B} desc="Want to post your Art/Photography somwhere other than Instagram?" />
            </div>
            <div></div>
            <div>
                <Display title="Personal" image={C} desc="If you would like to put your name on the map, then this is the plan for you!" />
            </div>
            <div className="index-content-description">
                <p>From sole trader to large businesses, JR Designs will build the perfect website for you!</p>
                <p>If you would like you find out more, visit our <Link className="more" to="/about">About</Link> page or <Link className="more" to="/contact">Contact</Link> us.</p>
            </div>
        </div>
    )
}

export default Home