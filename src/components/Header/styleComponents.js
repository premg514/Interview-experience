import styled from 'styled-components';
import { CiSearch } from "react-icons/ci";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 16px; /* Reduced vertical padding */
  background-color: #1a1a1a;
  color: #ffffff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  flex: 1 1;

  @media (max-width: 480px) {
    padding: 4px; /* Adjusted for smaller screens */
  }
`;

export const Head = styled.div`
  position: sticky;
  top: 0;
  z-index: 1000;
  background: linear-gradient(135deg, #232526, #414345);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
  padding: 0;
  transition: background 0.3s ease-in-out;

  &:hover {
    background: linear-gradient(135deg, #1f1f1f, #333);
  }
`;


export const Logo = styled.h4`
  font-size: 18px; /* Reduced size */
  line-height: 1.2; /* Adjusted line-height for compact spacing */
  color: #ffffff;
  background: linear-gradient(135deg, #4caf50, #66bb6a);
  padding: 4px 8px;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.3s ease, background 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #66bb6a, #81c784);
    transform: scale(1.1);
  }

  @media (max-width: 480px) {
    font-size: 16px;
    padding: 3px 6px;
  }
`;

export const OptionsNavLap = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  @media (max-width: 1024px) {
    gap: 16px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Option = styled.h6`
  font-size: 16px;
  color: #ffffff;
  cursor: pointer;
  position: relative;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #4caf50;
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const OptionDetails = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background: #333;
  color: #ffffff;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  margin-top: 8px;
  width: 220px;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, transform 0.3s ease;

  ${Option}:hover & {
    opacity: 1;
    visibility: visible;
    transform: translateY(5px);
  }

  @media (max-width: 480px) {
    font-size: 12px;
    width: 180px;
  }
`;

export const Hamburger = styled.button`
  display: none;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: #ffffff;
  transition: transform 0.3s ease;

  &:hover {
    transform: rotate(90deg);
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
  padding: 8px;
  border: 1px solid #555;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
  width: 160px;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #4caf50;
  }

  @media (max-width: 768px) {
    width: 120px;
  }

  @media (max-width: 480px) {
    width: 80%;
  }
`;

export const SearcherDiv = styled.div`
  padding: 4px;
  background-color: #1a1a1a;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 8px;
  width: 200px;

  @media (max-width: 768px) {
    width: 150px;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const SearchIcon = styled(CiSearch)`
  font-size: 20px;
  color: white;
  transition: transform 0.3s ease, color 0.3s ease;

  &:hover {
    color: #4caf50;
    transform: scale(1.2);
  }
`;

export const Button = styled.button`
  background: linear-gradient(135deg, #007bff, #0056b3);
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s ease, transform 0.3s ease;

  &:hover:not(:disabled) {
    background: linear-gradient(135deg, #0056b3, #003d80);
    transform: scale(1.1);
  }

  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 14px;
  }
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6px; /* Ensure smaller gaps */
  margin: 0; /* Remove margins if present */

  @media (max-width: 768px) {
    gap: 4px;
  }
`;


export const Profile = styled.div`
  background-image: linear-gradient(red, yellow);
  border: none;
  border-radius: 5px;
  padding: 6px 12px;
  height: 12px;
  margin: 0 5px;
  cursor: pointer;

  @media (max-width: 480px) {
    padding: 4px 8px;
    font-size: 12px;
  }
`;
