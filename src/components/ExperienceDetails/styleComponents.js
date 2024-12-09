import styled from 'styled-components';

export const ExperienceDetailContainer = styled.div`
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
  color: #333333;
  line-height: 1.6;
  height: 50vh;

  @media (max-width: 768px) {
    padding: 15px;
    margin: 20px;
  }
`;

export const ExperienceTitle = styled.h1`
  font-size: 28px;
  color: #4caf50;
  margin-bottom: 10px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const ExperienceRole = styled.h3`
  font-size: 20px;
  color: #333333;
  margin-bottom: 15px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const ExperienceText = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
  text-align: justify;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Highlight = styled.strong`
  color: #555555;
`;
