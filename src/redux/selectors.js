export const selectFilter = state => state.filter;
export const selectContacts = state => state.contacts.items;
export const selectorIsLoading = state => state.contacts.isLoading;
export const selectorError = state => state.contacts.error;

// export const selectFilterValue = createSelector(selectFilter, filter => filter);

// export const selectContactsList = createSelector(
//   selectContacts,
//   contacts => contacts
// );

// export const selectIsLoadingStatus = createSelector(
//   selectIsLoading,
//   isLoading => isLoading
// );

// export const selectErrorStatus = createSelector(selectError, error => error);
