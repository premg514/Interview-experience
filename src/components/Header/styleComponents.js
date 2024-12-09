// styleComponents.js
import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #1a1a1a;
  color: #ffffff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const Logo = styled.h4`
  font-size: 24px;
  font-weight: bold;
  color: #4caf50;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #81c784;
  }
`;

export const OptionsNavLap = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Option = styled.h6`
  font-size: 16px;
  color: #ffffff;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #4caf50;
  }
`;

export const Hamburger = styled.button`
  display: none;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: #ffffff;
  outline: none;

  &:focus {
    outline: 2px solid #4caf50;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

export const OptionsNav = styled.div`
  display: none;
  flex-direction: column;
  width: 100%;
  gap: 10px;

  &.active {
    display: flex;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
