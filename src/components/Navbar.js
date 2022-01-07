import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click)

    const closeMobileMenu = () => setClick(false)
    return (
        <>
            <nav className="navbar">
                <div className= "navbar-container">
                    <Link to="/" classname ="navbar-logo">
                        Fahrschule Ariana <i className="fa-solid fa-car"/>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <ul className={click ? 'nav-menu-active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                                Start
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/Führerscheinklassen' className="nav-links" onClick={closeMobileMenu}>
                                Führerscheinklassen
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/praktischer-unterricht' className="nav-links" onClick={closeMobileMenu}>
                                Praktischer Unterricht
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/theoretischer-unterricht' className="nav-links" onClick={closeMobileMenu}>
                                Theoretischer Unterricht
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/begleitetes-fahren' className="nav-links" onClick={closeMobileMenu}>
                                Begleitetes Fahren
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/pruefung' className="nav-links" onClick={closeMobileMenu}>
                                Prüfung
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/impressum' className="nav-links" onClick={closeMobileMenu}>
                                Impressum
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/agbs' className="nav-links" onClick={closeMobileMenu}>
                                AGBs
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
