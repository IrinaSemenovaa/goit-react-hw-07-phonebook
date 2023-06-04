import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import {
  selectorIsLoading,
  selectorError,
  selectContacts,
} from 'redux/selectors';
import SearchBar from './SearchBar/SearchBar';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import { AppContainer, SearchContainer, NoContactsMessage } from './AppStyles';

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectorIsLoading);
  const error = useSelector(selectorError);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <AppContainer>
      <ContactForm />
      <SearchContainer>
        <SearchBar />
        {isLoading && !error && <p>Loading...</p>}
        {contacts.length === 0 && !isLoading && !error && (
          <NoContactsMessage>No contacts yet</NoContactsMessage>
        )}
        <ContactList />
      </SearchContainer>
    </AppContainer>
  );
}
