import styled from '@emotion/styled';

export const ContactsList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ContactsItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const NameContainer = styled.div`
  flex: 1;
  margin-right: 10px;
`;

export const NameStyled = styled.span`
  font-weight: bold;
`;

export const NumberContainer = styled.div`
  flex: 1;
  margin-right: 10px;
`;

export const ButtonDelete = styled.button`
  padding: 6px 10px;
  background-color: #dc3545;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover,
  &:focus {
    background-color: #c82333;
  }
`;
