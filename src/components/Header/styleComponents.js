// styleComponents.js
import styled from 'styled-components';
import { CiSearch } from "react-icons/ci";
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
  color: gray;
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
export const Searcher = styled.input`
  padding: 8px;
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
  padding: 8px;
  background-color: #1a1a1a;
  border-radius: 5px;
  font-size: 14px;
  outline: none;
  display: flex;
  align-items: center;
  gap: 10px; 
  width: 200px; 

  @media (max-width: 480px) {
    width: 100%; 
  }
`;

export const SearchIcon = styled(CiSearch)`
  font-size: 20px;
  color: white;
`;
export const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 8px 16px;
  margin: 0 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background-color: #0056b3;
  }

  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 14px;
  }
`;
export const Div = styled.div`
display:flex;
 justify-content: space-between;
 align-items:center;
 gap:10px;
 `

export const Profile = styled.div`
background-image: linear-gradient(red, yellow);
 border: none;
  border-radius: 5px;
  padding: 8px 16px;
  height:15px;
  margin: 0 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 14px;
  }
`
