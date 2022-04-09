import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { List, ListItem, Button } from "./contactList.styles";
import { filterContacts } from "../../redux/selectors";
import {
  useFetchContactsQuery,
  useDeleteContactMutation,
} from "../../redux/phonebookSlice";

const ContactList = () => {
  const { data: contacts } = useFetchContactsQuery();
  const [deleteContact] = useDeleteContactMutation();
  const filter = useSelector(filterContacts);
  const normalizedFilter = filter.toLowerCase();
  let filteredContacts = [];

  if (contacts) {
    filteredContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }
  return (
    <>
      {contacts && (
        <List>
          {filteredContacts.map(({ id, name, tel }) => (
            <ListItem key={id}>
              {name} {tel}{" "}
              <Button type="button" onClick={() => deleteContact(id)}>
                Delete
              </Button>
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
};
ContactList.propTypes = {
  contactsFilter: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      tel: PropTypes.string,
    })
  ),
};
export default ContactList;
