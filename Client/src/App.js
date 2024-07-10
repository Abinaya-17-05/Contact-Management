import React, { useState } from "react";
import ContactList from "./ContactList";
import ContactForm from "./ContactForm";
import './App.css';

const App = () => {
  const [contacts, setContacts] = useState([]);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  const deleteContact = (index) => {
    setContacts(contacts.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <h1>Contact Management</h1>
      <ContactForm addContact={addContact} />
      <ContactList contacts={contacts} deleteContact={deleteContact} />
    </div>
  );
};

export default App;
