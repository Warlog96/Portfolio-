import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-brand">
                    <h2>
                        <span className="brand-full">Avaneesh Parmaj</span>
                        <span className="brand-short">AP</span>
                    </h2>
                </div>
                <ul className="navbar-menu">
                    <li><a href="#hero">Home</a></li>
                    <li><a href="#resume">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
