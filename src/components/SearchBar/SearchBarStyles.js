import styled from '@emotion/styled';

export const SearchContainer = styled.div`
  max-width: 335px;
  margin: 0 auto;
  padding: 30px;
`;

export const SearchInputStyles = styled.input`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 315px;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }
`;
