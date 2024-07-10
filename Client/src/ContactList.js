import React from 'react';

const ContactList = ({ contacts, deleteContact }) => {
  const lastContact = contacts[contacts.length - 1];

  return (
    <div>
      <h2>Contact List</h2>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            {contact.name} - {contact.email} - {contact.phone}
            <button onClick={() => deleteContact(index)}>Delete</button>
          </li>
        ))}
      </ul>

      {lastContact && (
        <div className="last-contact">
          <h2>Last Added Contact</h2>
          <p>
            <strong>Name:</strong> {lastContact.name} <br />
            <strong>Email:</strong> {lastContact.email} <br />
            <strong>Phone:</strong> {lastContact.phone}
          </p>
        </div>
      )}
    </div>
  );
};

export default ContactList;
