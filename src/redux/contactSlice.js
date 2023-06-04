import { createSlice } from '@reduxjs/toolkit';
import * as api from './operations';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: builder => {
    builder
      .addCase(api.fetchContacts.pending, handlePending)
      .addCase(api.fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(api.fetchContacts.rejected, handleRejected)
      .addCase(api.addContact.pending, handlePending)
      .addCase(api.addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(api.addContact.rejected, handleRejected)
      .addCase(api.removeContact.pending, handlePending)
      .addCase(api.removeContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const contactId = action.payload;
        state.items = state.items.filter(contact => contact.id !== contactId);
      })
      .addCase(api.removeContact.rejected, handleRejected);
  },
});
