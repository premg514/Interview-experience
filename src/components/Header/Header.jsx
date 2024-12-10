import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Nav, Logo, OptionsNavLap, Option, Hamburger, OptionsNav,
  Searcher, SearcherDiv, SearchIcon, Button, Div, Profile,
  OptionDetails, Head
} from './styleComponents';

export default function Header({ handleSearch }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchBtn, setSearchBtn] = useState(false);
  const [hoveredOption, setHoveredOption] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSearchF = (e) => {
    handleSearch(e.target.value);
  };

  const optionDetails = {
    Learn: 'Explore learning paths and courses to boost your skills.',
    'Interview preparation': 'Get ready for your next interview with curated resources.',
    Practice: 'Practice coding challenges and hone your skills.',
    Resources: 'Access a library of guides, tools, and templates.',
  };

  return (
    <Head>
      <Nav>
        <Div>
          <Link to="/">
            <Logo>LOGO</Logo>
          </Link>
          <OptionsNavLap>
            {Object.keys(optionDetails).map((key) => (
              <Option
                key={key}
                onMouseEnter={() => setHoveredOption(key)}
                onMouseLeave={() => setHoveredOption(null)} 
              >
                {key}
                {hoveredOption === key && (
                  <OptionDetails>
                    {optionDetails[key]}
                  </OptionDetails>
                )}
              </Option>
            ))}
          </OptionsNavLap>
        </Div>

        <Div>
          <SearcherDiv>
            <Button onClick={() => setSearchBtn(!searchBtn)}>
              <SearchIcon />
            </Button>
            {searchBtn && (
              <Searcher
                type="search"
                placeholder="Search by company..."
                onChange={handleSearchF}
              />
            )}
          </SearcherDiv>

          <Profile>.</Profile>
          <Hamburger onClick={toggleMenu}>☰</Hamburger>
        </Div>
      </Nav>
      <OptionsNav className={menuOpen ? 'active' : ''}>
        <Option>Learn</Option>
        <Option>Interview preparation</Option>
        <Option>Practice</Option>
        <Option>Resources</Option>
      </OptionsNav>
    </Head>
  );
}
