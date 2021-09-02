import React, { useState,useEffect,useContext} from "react";
import LoginPage from "./login"
import RegisterPage from "./register";
import ContactsPage from "./contacts";
import ContactDetailsPage from "./contact-details";
import ContactCreatePage from "./contact-create";
import { getContacts } from "../utils/contacts";
import { ContactProvider,ContactContext } from '../ContactContext';


function App (props) {
// console.log(ContactContext)
  const [contacts,setContacts]=useContext(ContactContext)
  // useEffect(() => {
  //   const storedContacts = getContacts();
  //   setContact(storedContacts.length ? storedContacts : mockContacts)
  // }, [contact]);
  console.log(contacts)
    return (
      <>
      
        <LoginPage />
        <RegisterPage />
        <ContactsPage contacts={contacts} />
        <ContactDetailsPage contact={contacts[0]} />
        <ContactCreatePage />
      
      
      </>
    );
  
}

export default App;
