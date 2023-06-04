import styled from '@emotion/styled';

export const MainFormContainer = styled.div`
  max-width: 335px;
  margin: 0 auto;
  padding: 30px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 12px;
  border: 3px solid #fdf5e6;
`;

export const LabelStyles = styled.label`
  margin-bottom: 10px;
  font-weight: bold;
`;

export const ButtonAdd = styled.button`
  font-size: 14px;
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 110px;
  margin: 0 auto;

  &:hover {
    background-color: #0056b3;
  }
`;
