export const getContacts = (state) => state.phonebook.contacts;
export const getFilter = (state) => state.phonebook.filter;
export const getFoundedContacts = (state) => {
  const contacts = getContacts(state);
  const filter = getFilter(state);
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};
