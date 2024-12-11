import styled from 'styled-components';
import { FaVideo, FaVideoSlash } from "react-icons/fa6";
export const ExperienceDetailContainer = styled.div`
  max-width: 900px;
  flex: 1 1;
  padding: 30px;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  font-family: 'Roboto', Arial, sans-serif;
  color: #333333;
  line-height: 1.8;
  height: auto;
  overflow-y: auto;
  margin: 0 auto;
  background: linear-gradient(to top left, #ffffff, #f7f7f7);
  
  @media (max-width: 768px) {
    padding: 20px;
    margin: 20px;
  }
`;

export const ExperienceTitle = styled.h1`
  font-size: 32px;
  color: #4caf50;
  margin-bottom: 15px;
  text-align: center;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const ExperienceRole = styled.h3`
  font-size: 22px;
  color: #333333;
  margin-bottom: 15px;
  text-align: center;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const ExperienceText = styled.p`
  font-size: 18px;
  margin-bottom: 15px;
  text-align: justify;

  color: ${(props) => props.color || '#555555'};
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Highlight = styled.strong`
  color: #4caf50;
  font-weight: 500;
`;

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  max-width: 1200px;
  margin: 50px auto;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SimilarExperiencesContainer = styled.div`
  padding: 25px;
  background-color: #f9f9f9;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  font-family: 'Roboto', Arial, sans-serif;
  color: #333333;
  overflow-y: auto;
  height: auto;
  flex: 0.4;
  max-height: 80vh;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const SimilarExperienceItem = styled.div`
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, background-color 0.3s;

  &:hover {
    background-color: #f0f0f0;
    transform: translateY(-5px);
  }

  h4 {
    margin: 0 0 10px 0;
    font-size: 18px;
    color: #4caf50;
    font-weight: 600;
  }

  p {
    margin: 5px 0;
    font-size: 16px;
    color: #555555;
  }

  a {
    font-size: 16px;
    color: #4caf50;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: #45a049;
    }
  }
`;

export const ExperienceQn = styled.h3`
  font-size: 22px;
  color: #333333;
  margin-bottom: 15px;
  text-align: center;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const ExperienceTextLi = styled.li`
  font-size: 18px;
  margin-bottom: 12px;
  text-align: justify;
  color: ${(props) => props.color || '#555555'};

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const StatusIcon = styled.span`
  margin-left: 8px;
  font-size: 18px;
  vertical-align: middle;
`;
export const StyledVideoIcon = styled(FaVideo)`
  color: green;
  margin-left: 8px;
  border: solid 2px black  ;
  border-radius:5px;
  padding:2px;
`;

export const StyledVideoSlashIcon = styled(FaVideoSlash)`
  color: red;
  margin-left: 8px;
  border: solid 2px black  ;
  border-radius:5px;
  padding:2px;
`;