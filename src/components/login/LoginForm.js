import React from 'react';
import styled,{css} from 'styled-components'
import {Input,Button,Form} from "../style"

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleFormSubmit(event) {
        event.preventDefault();
        
    }

    render() {
        return (
            <Form onSubmit={this.handleFormSubmit}>
                
                    {/* <label htmlFor="username">Username</label> */}
                    <Input 
                        id="username"
                        name="username"
                        type="text" 
                        placeholder="Username"  
                        value={this.state.username}
                        onChange={this.handleInputChange}
                    />
                
    
                    {/* <label htmlFor="password">Password</label> */}
                    <Input 
                        id="password"
                        name="password"
                        type="password" 
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                    />
    
                
                    <Button type="submit">Login</Button>
        
            </Form>
        )
    }
}

export default LoginForm;