import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchContacts } from "../redux/contacts/contacts-operations";
import ContactsList from "../components/contactList";
import ContactsForm from "../components/contactForm";
import Filter from "../components/filter";

import StyledWrapper from "../components/wrapper";

const ContactsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchContacts()), [dispatch]);
  return (
    <StyledWrapper>
      <ContactsForm />
      <Filter />
      <ContactsList />
    </StyledWrapper>
  );
};

export default ContactsPage;
