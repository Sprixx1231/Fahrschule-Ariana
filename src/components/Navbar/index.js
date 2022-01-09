import React from 'react';
import {Nav, Bars, NavLink, NavMenu} from './NavbarElements'

const Navbar = () => {
    return(
        <>
            <Nav>
                <NavLink to="/">
                    <h1> Logo</h1>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/start" activeStyle>
                        Start
                    </NavLink>
                    <NavLink to="/fuehrerscheinklassen" activeStyle>
                        Führerscheinklassen
                    </NavLink>
                    <NavLink to="/praktischer-unterricht" activeStyle>
                        Praktischer Unterricht
                    </NavLink>
                    <NavLink to="/theoretischer-unterricht" activeStyle>
                        Theoretischer Unterricht
                    </NavLink>
                    <NavLink to="/begleitetes-fahren" activeStyle>
                        Begleitetes Fahren
                    </NavLink>
                    <NavLink to="/pruefung" activeStyle>
                        Prüfung
                    </NavLink>
                    <NavLink to="/impressum" activeStyle>
                        Impressum
                    </NavLink>
                    <NavLink to="/agbs" activeStyle>
                        AGBs
                    </NavLink>
                </NavMenu>

            </Nav>
        </>
    )
}



export default Navbar;