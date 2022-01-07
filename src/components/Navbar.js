import React, {useState} from 'react';
import Link from 'react-router-dom'

function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className= "navbar-container">
                    <Link to="/" classname ="navbar-logo">
                        LOGO <i className="arianalogo"/>
                    </Link>
                </div>

            </nav>
        </>
    )
}

export default Navbar;
