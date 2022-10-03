import React from 'react';

import { NavLink } from 'react-router-dom';
import {Container} from 'react-bootstrap';

import logo from '../assets/img/logo.png';

import '../assets/scss/headerfooter.scss';

const Navbar = () => {
    return (
        <header>
            <NavLink to="/">
                <img src={logo} className="img-fluid logo" />
            </NavLink>

            <nav className="navbar">
                <ul>
                    <li>
                        <a href="#">
                            <NavLink to="/">Home</NavLink>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <NavLink to="/about">About</NavLink>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <NavLink to="/contact">Contact</NavLink>
                        </a>
                    </li>
                </ul>
                <i className="bi bi-list mobile-nav-toggle"></i>
            </nav>
        </header>
    )
}

export default Navbar;