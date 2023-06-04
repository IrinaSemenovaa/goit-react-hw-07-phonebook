import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from 'redux/operations';
import { selectContacts, selectFilter } from 'redux/selectors';
import {
  ContactsList,
  ContactsItem,
  NameContainer,
  NameStyled,
  NumberContainer,
  ButtonDelete,
} from './ContactListStyles';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
      <ContactsList>
        {filteredContacts.map(({ id, name, number }) => (
          <ContactsItem key={id}>
            <NameContainer>
              <NameStyled>{name}:</NameStyled>
            </NameContainer>
            <NumberContainer>
              <span>{number}</span>
            </NumberContainer>
            <ButtonDelete
              onClick={() => dispatch(removeContact(id))}
              type="button"
            >
              Delete contact
            </ButtonDelete>
          </ContactsItem>
        ))}
      </ContactsList>
  );
}
