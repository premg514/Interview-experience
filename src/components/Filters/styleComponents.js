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
  color: #34495e;
  margin-bottom: 10px;
`;

export const FilterSelect = styled.select`
  padding: 8px;
  border: 1px solid #ddd;
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
`;
