import { useState, useEffect } from "react";
import Phonebook from "./phonebook/Phonebook";
import { nanoid } from 'nanoid'
import Contacts from "./contacts/Contacts";
import { Filter } from "./filter/Filter";

export default function App() {
  const [contacts, setContacts] = useState(()=>JSON.parse(localStorage.getItem('contacts'))??
    []);
  const [filter, setFilter] = useState('');
  
useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
}, [contacts]);
 

 const addContact = ({ name, number }) => {
        const newContact = { id: nanoid(), name, number };
        
   contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())
      ? alert(
          `user ${name} is already in the contact list`
              )
      : setContacts(contacts => [newContact, ...contacts]);
  };
    
 
  const changeFilter = e => {
    setFilter(e.currentTarget.value );
   console.log (filter)
  };
    
    const filteredContacts = () => {
    
     return contacts.filter(contact => 
         contact.name.toLowerCase().includes(filter.toLowerCase())
         
    );
  };

const deleteContact = contactId => {
    setContacts(
      contacts.filter(contact => {
        return contact.id !== contactId;
      })
    );
  };

    return (
      <div
        style={{
          display: 'flex',
          flexDirection:'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <Phonebook onSubmit={addContact}  />
        <Filter filter={filter} onFilter={changeFilter} />
        {contacts.length > 0 ? (
          <Contacts
            names={filteredContacts()}
            onDeleteContacts={deleteContact}
          />
        ) : (
          <span text="Contact list is empty."></span>
        )}
        
        </div>
    );
  }

