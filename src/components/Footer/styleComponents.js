import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #1a1a1a;
  color: #ffffff;
  padding: 20px 10px;
  text-align: center;
  border-top: 2px solid #4caf50;
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const FooterText = styled.p`
  margin: 5px 0;
  font-size: clamp(0.8rem, 1.3vw, 1rem);

  @media (min-width: 480px) {
    font-size: 16px;
  }

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export const FooterLinks = styled.div`
  margin: 10px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

export const FooterLink = styled.a`
  color: #4caf50;
  text-decoration: none;
  margin: 0 10px;
  font-size: 14px;
  transition: color 0.3s ease;

  &:hover {
    color: #81c784;
  }

  @media (min-width: 480px) {
    font-size: 16px;
  }
`;
