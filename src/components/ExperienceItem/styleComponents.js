// styleComponents.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ExperienceCard = styled.div`
  background-color: #ffffff;
  color: #333333;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 15px;
  width: 100%;
  max-width: 300px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  }
`;

export const Company = styled.h2`
  color: black;
  font-size: 20px;
  margin-bottom: 5px;
`;

export const Role = styled.h4`
  color: #333333;
  font-size: 16px;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  color: #555555;
  font-size: 14px;
  margin-bottom: 10px;
`;

export const Date = styled.p`
  color: #888888;
  font-size: 12px;
`;

export const ReadMoreLink = styled(Link)`
  text-decoration: none;
  color: blue;
  

  &:hover {
    text-decoration: underline;
  }
`;
export const Para = styled.p`
  color: ${props => props.color || '#555555'};
  font-size: 14px;
  margin-bottom: 8px;

  strong {
    color: #333333;
    font-weight: bold;
  }
`;
export const StatusIcon = styled.span`
  margin-left: 8px;
  font-size: 16px;
  vertical-align: middle;
`;

