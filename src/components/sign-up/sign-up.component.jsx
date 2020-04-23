import React, { Component } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component.jsx';
import CustomButton from '../custom-button/custom-button.component.jsx';
import { emailSignUpStart } from '../../redux/user/user.actions.js';

import './sign-up.styles.scss';

class SignUp extends Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        const { emailSignUpStart } = this.props;
        
        if(password !== confirmPassword) {
            alert('the passwords are not matching.')
            return;
        }
        emailSignUpStart(displayName, email, password);
    }

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className='sign-up'> SIGN UP
            <h2 className='title'>I do not have an account</h2>
            <span>Sign up with your email and password</span>
            
            <form className='sign-up-form' onSubmit={this.handleSubmit}>
                <FormInput type='text' name='displayName' value={displayName}
                handleChange={this.handleChange} label='display Name' required />
    
                <FormInput type='email' name='email' value={email}
                handleChange={this.handleChange} label='email' required />

                <FormInput type='password' name='password' value={password}
                handleChange={this.handleChange} label='password' required />

                <FormInput type='password' name='confirmPassword' value={confirmPassword}
                handleChange={this.handleChange} label='confirm Password' required />

                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
                
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    emailSignUpStart: (displayName, email, password, confirmPassword) => 
        dispatch(emailSignUpStart({ displayName, email, password, confirmPassword }))
})

export default connect(null, mapDispatchToProps)(SignUp);