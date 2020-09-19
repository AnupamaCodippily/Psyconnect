import React from 'react'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'

export default function Landing() {
    return (
        <div className='landing-div'>
            <nav className="navbar navbar-expand-lg landing-navbar">
            <ul className="navbar-nav mr-auto">
                <li><Link to={'/patients'} className="nav-link"> Patient Login</Link></li>
                <li><Link to={'/signup'} className="nav-link">Sign Up as a Patient</Link></li>
                <li><Link to={'/research'} className="nav-link nav-link-white">Research</Link></li>
            </ul>
            <Button inline>
                <Link to='/doctor/login' className="nav-link">
                    Doctor Sign in
                </Link>
            </Button>
            </nav>
            <hr />

            <div className='slogan-holder'>
                <h1>
                    "We live in trying times..."
                </h1>
                <h1>
                    ... but a psychiatrist has never been more accessible
                </h1>
            </div>

        </div>
    )
}
