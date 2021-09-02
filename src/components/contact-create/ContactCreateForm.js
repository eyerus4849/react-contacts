import React,{useState,useEffect,useContext} from "react";
import {Input,Button,Form} from "../style"
import styled,{css} from 'styled-components'
import PersonIcon from '@material-ui/icons/Person';
import { ContactContext } from "../../ContactContext";
const ProfilePic =styled.div`
width: 100px;
height: 100px;
background-color:white;
border-radius:200px;
margin:80px 50px;
vertical-align:middle;
text-align:center;
& img {
    width:100px;
    height: 100px;
    border-radius:100px;
    /* margin:10px; */
    vertical-align:middle;
text-align:center;
}
`
function ContactCreateForm () {
    const [contacts,setContacts]=useContext(ContactContext)
     const[formstate,setFormstate]= useState ({
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            address: '',
            profilePic: '',
        });

      const  handleFormSubmit=(event)=> {
          setContacts([...contacts ,formstate])
            event.preventDefault();
        }
    const handleInputChange=(event)=> {
const{name,value}=event.target;
setFormstate((prev)=>{
    return{
        ...prev,
        [name]:value,
    }
})
        event.preventDefault();
    }

    
        return (
            <Form gray flex onSubmit={handleFormSubmit} >
                <ProfilePic>
                    {formstate.profilePic ? <img src={formstate.profilePic} alt="Profile preview." />:<PersonIcon style={{ fontSize: 80 }}/>}
                    
                   
                </ProfilePic>
                <div>
                    <div>
                        <Input gray
                            type="text"
                            placeholder="First Name"
                            name="firstName"
                            value={formstate.firstName}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <Input gray
                            type="text"
                            placeholder="Last Name"
                            name="lastName"
                            value={formstate.lastName}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <Input gray
                            type="tel"
                            placeholder="Phone Number"
                            name="phoneNumber"
                            value={formstate.phoneNumber}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <Input gray
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={formstate.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <Input gray
                            type="text"
                            placeholder="Address"
                            name="address"
                            value={formstate.address}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <Input gray
                            type="text"
                            placeholder="Profile Picture Url"
                            name="profilePic"
                            value={formstate.profilePic}
                            onChange={handleInputChange}
                        />
                    </div>
                    {/* <div> */}
                        <Button type="submit">Add Contact</Button>
                    {/* </div> */}
                </div>
            </Form>
        )
    
}

export default ContactCreateForm;