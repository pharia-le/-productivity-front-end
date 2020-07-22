import React, { Component } from 'react';

class Registration extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            email: "",
            password: "",
            password_confirmation: "",
            registrationErrors: ""
        }
    }

    handleSubmit = event => {
        event.preventDefault();
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    required
                />
                <input
                    type="password"
                    name="password_confirmation"
                    placeholder="Password Confirmation"
                    value={this.state.password_confirmation}
                    onChange={this.handleChange}
                    required
                />
                <button type="submit">Register</button>
            </form>
        );
    }
}

export default Registration;