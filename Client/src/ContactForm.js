import React, { useState } from "react";
import axios from 'axios';

const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handlePost = async () => {
    try {
      await axios.post("http://localhost:5000/contactform", { name, email, phone });
      alert("Data saved");
    } catch (e) {
      console.log(`Error: ${e}`);
      alert("Failed to save data");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact({ name, email, phone }); // Add contact to the parent state
    handlePost(); // Call handlePost to send data to backend
    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <div>
      <h2>Add Contact</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input 
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
};

export default ContactForm;
