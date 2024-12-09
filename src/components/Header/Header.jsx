import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Logo, OptionsNavLap, Option, Hamburger, OptionsNav } from './styleComponents';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div>
            <Nav>
                <Link to="/">
                    <Logo>LOGO</Logo>
                </Link>

                <Hamburger onClick={toggleMenu}>
                    ☰
                </Hamburger>

                <OptionsNavLap>
                    <Option>Learn</Option>
                    <Option>Interview preparation</Option>
                    <Option>Practice</Option>
                    <Option>Resources</Option>
                </OptionsNavLap>
            </Nav>
            <OptionsNav className={menuOpen ? 'active' : ''}>
                <Option>Learn</Option>
                <Option>Interview preparation</Option>
                <Option>Practice</Option>
                <Option>Resources</Option>
            </OptionsNav>
        </div>
    );
}
