import styled from 'styled-components';
import { CiSearch } from "react-icons/ci";
export const FilterSectionContainer = styled.div`
  display: flex;
  justify-content:center;
  margin-bottom: 20px;
  gap: 15px;

  /* Larger Screens (Desktop) */
  @media (min-width: 768px) {
  flex-wrap: wrap; 
    gap: 20px;
  }
`;

export const FilterLabel = styled.label`
  font-weight: bold;
  color: #555;
  margin-right: 10px; /* Adds space between label and select/input */
`;

export const FilterSelect = styled.select`
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 14px;
  outline: none;
  cursor: pointer;
  width: 200px; /* Set a fixed width for consistency */

  @media (max-width: 480px) {
    width: 100%;  /* Full width on small screens */
  }
`;

export const Searcher = styled.input`
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 14px;
  outline: none;
  width: 200px; /* Set a fixed width for consistency */

  @media (max-width: 480px) {
    width: 100%;  /* Full width on small screens */
  }
`;

export const SearcherDiv = styled.div`
  padding: 8px;
  background-color: #f5f5f5; /* Light background to highlight the search input */
  border-radius: 5px;
  font-size: 14px;
  outline: none;
  display: flex;
  align-items: center;
  gap: 10px; /* Space between the icon and input */
  width: 200px; /* Consistent width for search input */

  @media (max-width: 480px) {
    width: 100%; /* Full width on small screens */
  }
`;

/* Optional: Styling for the icon to ensure it's appropriately sized */
export const SearchIcon = styled(CiSearch)`
  font-size: 20px;
  color: #333;
`;
