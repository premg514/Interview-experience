import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Nav, Logo, OptionsNavLap, Option, Hamburger, OptionsNav, Searcher,
    SearcherDiv,
    SearchIcon,
    Button,
    Div,
    Profile,

} from './styleComponents';

export default function Header({ handleSearch }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchBtn, setSearchBtn] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    const handleSearchF = (e) => {
        handleSearch(e.target.value);
    };

    return (
        <div>
            <Nav>
                <Div>
                    <Link to="/">
                        <Logo>LOGO</Logo>
                    </Link>
                    <OptionsNavLap>
                        <Option>Learn</Option>
                        <Option>Interview preparation</Option>
                        <Option>Practice</Option>
                        <Option>Resources</Option>
                    </OptionsNavLap>
                </Div>

                <Div>
                    <SearcherDiv>
                        <Button onClick={() => setSearchBtn(!searchBtn)} >
                            <SearchIcon />
                        </Button>
                        {searchBtn ? <Searcher
                            type='search'
                            placeholder="Search by company..."
                            onChange={handleSearchF}
                        /> : ''}
                    </SearcherDiv>

                    <Profile>
                        .
                    </Profile>
                    <Hamburger onClick={toggleMenu}>
                        ☰
                    </Hamburger>


                </Div>
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
