import styled from 'styled-components';

export const ExperienceDetailContainer = styled.div`
  max-width: 800px;
  flex:1 1;
  padding: 20px;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
  color: #333333;
  line-height: 1.6;
  height: 50vh;
  overflow-y:scroll;

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
 color: ${props => props.color || '#555555'};
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Highlight = styled.strong`
  color: #555555;
`;


export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  max-width: 1200px;
  margin: 50px auto;
`;

export const SimilarExperiencesContainer = styled.div`

  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
  color: #333333;
  overflow-y: auto;
  height: 50vh;

  @media (max-width: 768px) {
    display: none; /* Hide for smaller screens */
  }
`;

export const SimilarExperienceItem = styled.div`
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #f0f0f0;
  }

  h4 {
    margin: 0 0 5px 0;
    font-size: 16px;
    color: #4caf50;
  }

  p {
    margin: 0;
    font-size: 14px;
    color: #555555;
  }
`;

export const ExperienceQn = styled.h3`
  font-size: 20px;
  color: #333333;
  margin-bottom: 15px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;
export const ExperienceTextLi = styled.li`
  font-size: 16px;
  margin-bottom: 10px;
  text-align: justify;
 color: ${props => props.color || '#555555'};
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
export const StatusIcon = styled.span`
  margin-left: 8px;
  font-size: 16px;
  vertical-align: middle;
`;
