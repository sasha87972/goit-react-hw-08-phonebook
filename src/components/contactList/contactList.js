import PropTypes from "prop-types";
import { useEffect } from "react";
import { List, ListItem, Button } from "./contactList.styles";
import {
  deleteContact,
  fetchContacts,
} from "../../redux/contacts/contacts-operations";
import { useSelector, useDispatch } from "react-redux";

import { getFoundedContacts } from "../../redux/contacts/contacts-selectors";

const ContactList = () => {
  const contacts = useSelector((state) => getFoundedContacts(state));
  const dispatch = useDispatch();
  const onDeleteContact = (id) => dispatch(deleteContact(id));
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {contacts && (
        <List>
          {contacts.map(({ id, name, tel }) => (
            <ListItem key={id}>
              {name} {tel}{" "}
              <Button type="button" onClick={() => onDeleteContact(id)}>
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
