import styled from 'styled-components';

export const FilterSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  gap: 15px;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
  }
`;

export const FilterLabel = styled.label`
  font-size: clamp(1rem, 1.8vw, 1.5rem); /* Responsive scaling */
  color: #2c3e50; /* Complementary to gradient background */
  margin-bottom: 10px;
`;

export const FilterSelect = styled.select`
  padding: 8px;
  border: 1px solid #a3c9f3; 
  background-color: rgba(230, 245, 255, 1); 
  color: #34495e;
  border-radius: 5px;
  font-size: clamp(0.9rem, 1.5vw, 1.2rem);
  outline: none;
  cursor: pointer;
  width: 100%; 

  @media (min-width: 480px) {
    width: 250px;
  }

  @media (min-width: 768px) {
    font-size: 16px;
  }

  &:hover {
    background-color: rgba(200, 230, 250, 1); /* Slightly darker shade on hover */
    border-color: #7fb3e6; /* Slightly darker border on hover */
  }

  &:focus {
    border-color: #5cacee; /* Highlighted border on focus */
    box-shadow: 0 0 4px rgba(92, 172, 238, 0.8);
  }
`;
