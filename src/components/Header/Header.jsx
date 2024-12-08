import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div>
            <nav className="nav">
                <Link to="/">
                    <h4 className="logo">LOGO</h4>
                </Link>

                {/* Hamburger Menu */}
                <button className="hamburger" onClick={toggleMenu}>
                    ☰
                </button>

                {/* Navigation Links */}
                <div className='options-nav-lap'>
                <h6>Learn</h6>
                <h6>Interview preparation</h6>
                <h6>Practice</h6>
                <h6>Resources</h6>
            </div>
            </nav>
            <div className={`options-nav ${menuOpen ? 'active' : ''}`}>
                <h6>Learn</h6>
                <h6>Interview preparation</h6>
                <h6>Practice</h6>
                <h6>Resources</h6>
            </div>
        </div>
    );
}
