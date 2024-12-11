// styleComponents.js
import styled from 'styled-components';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

export const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  padding: 20px;
`;

export const Title = styled.h1`
  text-align: center;
  color: black;
  margin-bottom: 20px;
`;

export const ExperienceList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 20px;
  justify-items: center;
  margin: 0 auto;
  max-width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

export const ExperienceItem = styled.div`
  width: 100%;
  max-width: 400px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
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
  transition: background-color 0.3s ease, transform 0.3s ease;
  position: relative;
  overflow: hidden;

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background-color: #0056b3;
    transform: scale(1.1); /* Slightly increase size on hover */
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  }

  &:hover:not(:disabled)::after {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 200%;
    height: 100%;
    background: rgba(255, 255, 255, 0.2);
    transform: skewX(-30deg);
    animation: shine 0.5s ease-out forwards;
  }

  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 14px;
  }

  @keyframes shine {
    0% {
      left: -100%;
    }
    100% {
      left: 100%;
    }
  }
`;


export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

export const PageNumber = styled.h4`
  color:black;
  font-size: 18px;
  font-weight: bold;
  margin: 0 10px;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;
export const LeftArrow = styled(FaArrowLeft)`
font-size:15px;`
export const RightArrow = styled(FaArrowRight)`
font-size:15px;`
export const Container = styled.div`
  padding: 20px;
  background-color: #fff;
`;

export const Heading = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: #0056d2;
  margin-bottom: 16px;
`;
export const CompaniesList = styled.div`
  display: flex;
  gap: 16px;
  overflow: hidden; /* Prevent scrollbars from showing */
  position: relative;
  padding-bottom: 10px;

  /* Keyframe Animation */
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  /* Wrap content and duplicate for seamless scrolling */
  width: 200%; /* Double the width to accommodate duplicate list */
  animation: scroll 20s linear infinite;
  will-change: transform;

  ::-webkit-scrollbar {
    display: none; /* Hide scrollbar */
  }
`;

export const CompaniesWrapper = styled.div`
  display: flex;
  gap:8px;

`;

export const CompanyCard = styled.div`
  flex: 0 0 auto;
  width: 120px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  }
`;



export const Logo = styled.img`
  max-width: 80%;
  max-height: 80%;
  object-fit: contain;
`;



export const ScrollToTopButton = styled.button`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #3bb6eb;
  color: white;
  border: none;
  padding: 15px 20px;
  font-size: 18px;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s;

  &:hover {
    background-color: #055d82;
    
  }
`;