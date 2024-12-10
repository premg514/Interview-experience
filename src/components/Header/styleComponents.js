import styled from 'styled-components';
import { CiSearch } from "react-icons/ci";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 8px;
  background-color: #1a1a1a;
  color: #ffffff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
 

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const Head = styled.div`
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: blue;
    padding: 0;
`;

export const Logo = styled.h4`
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
  background-color: #4caf50;
  padding: 4px 8px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #81c784;
    color: #ffffff;
  }
`;


export const OptionsNavLap = styled.div`
  display: flex;
  gap: 12px;
  align-items:center;

  @media (max-width: 768px) {
    display: none; /* Hidden on small screens */
  }
`;


export const Option = styled.h6`
  font-size: 14px;
  color: #ffffff;
  cursor: pointer;
  position: relative;
  transition: color 0.3s ease;

  &:hover {
    color: #4caf50;
  }
`;

export const OptionDetails = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #1a1a1a;
  color: #ffffff;
  padding: 8px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  margin-top: 5px;
  width: 200px;
`;

export const Hamburger = styled.button`
  display: none;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 20px;
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
  gap: 8px;

  &.active {
    display: flex;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Searcher = styled.input`
  padding: 6px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 14px;
  outline: none;
  width: 145px;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const SearcherDiv = styled.div`
  padding: 4px;
  background-color: #1a1a1a;
  border-radius: 5px;
  font-size: 12px;
  outline: none;
  display: flex;
  align-items: center;
  gap: 8px;
  width: 200px;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const SearchIcon = styled(CiSearch)`
  font-size: 18px;
  color: white;
`;

export const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 6px 12px;
  margin: 0 5px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background-color: #0056b3;
    transform: scale(1.1);
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  }
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;

export const Profile = styled.div`
  background-image: linear-gradient(red, yellow);
  border: none;
  border-radius: 5px;
  padding: 6px 12px;
  height: 12px;
  margin: 0 5px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;

  @media (max-width: 480px) {
    padding: 4px 10px;
    font-size: 12px;
  }
`;
