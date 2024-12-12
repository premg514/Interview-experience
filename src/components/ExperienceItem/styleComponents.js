// styleComponents.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ExperienceCard = styled.div`
 
  color: #333333;
  
  padding: 15px;
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
border-radius: 33px;
background: linear-gradient(145deg, #cacaca, #f0f0f0);
box-shadow:  27px 27px 54px #848484,
             -27px -27px 54px #ffffff;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  }
    
`;

export const Company = styled.h2`
  font-size: clamp(1.2rem, 2vw, 2.5rem); 
  margin-bottom: 5px;
  color: #2c3e50;
`;

export const Role = styled.h4`
  font-size: clamp(1rem, 1.8vw, 2rem); 
  color: #333333;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  font-size: clamp(0.9rem, 1.5vw, 1.2rem); 
  line-height: 1.6;
  color: #555555;
  margin-bottom: 20px;
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

