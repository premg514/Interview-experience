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
  color: #4caf50;
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

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

export const PageNumber = styled.h4`
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