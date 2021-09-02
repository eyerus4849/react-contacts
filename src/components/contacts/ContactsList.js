import ContactCard from "./ContactCard"
import styled,{css} from 'styled-components'
import {Div} from "../style"
const ContactList = ({ contacts=[] }) => {
    return (
        <Div>
            {contacts.map((contact) => 
                <ContactCard 
                    key={contact.id}
                    firstName={contact.firstName} 
                    lastName={contact.lastName} 
                    phoneNumber={contact.phoneNumber} 
                    profilePic={contact.profilePic}
                />
            )}
        </Div>
    )
}

export default ContactList;