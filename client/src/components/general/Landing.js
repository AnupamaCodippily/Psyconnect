import React from 'react'
import logo from '../../images/logo.PNG'
import {Link} from 'react-router-dom'

export default function Landing() {
    return (
        <div>
            <img src={logo} alt="PsyconnectME Logo"/>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
                <li><Link to={'/patients'} className="nav-link"> Patient Login</Link></li>
                <li><Link to={'/doctor'} className="nav-link">Doctor Login</Link></li>
            </ul>
            </nav>
            <hr />
        </div>
    )
}
