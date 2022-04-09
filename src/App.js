import { Toaster } from "react-hot-toast";
import Container from "./components/container";
import ContactForm from "./components/contactForm";
import ContactList from "./components/contactList";
import Title from "./components/title";
import Filter from "./components/filter";

const App = () => {
  return (
    <Container title="Phonebook">
      <ContactForm />
      <Title title="Contacts" />
      <Filter />
      <ContactList />
      <Toaster position="top-right" />
    </Container>
  );
};

export default App;
