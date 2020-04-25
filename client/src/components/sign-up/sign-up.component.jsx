import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component.jsx';
import CustomButton from '../custom-button/custom-button.component.jsx';
import { emailSignUpStart } from '../../redux/user/user.actions.js';

import './sign-up.styles.scss';

const SignUp = ({ emailSignUpStart }) => {
    const [userCredentials, setUserCredentials] = useState({ 
        displayName: '', 
        email: '', 
        password: '', 
        confirmPassword: ''
    })
    const { displayName, email, password, confirmPassword } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();
        
        if(password !== confirmPassword) {
            alert('the passwords are not matching.')
            return;
        }
        emailSignUpStart(displayName, email, password);
    }

    const handleChange = (event) => {
        const { value, name } = event.target;
        setUserCredentials({ ...userCredentials, [name]: value })
    }

        
    return (
        <div className='sign-up'> SIGN UP
        <h2 className='title'>I do not have an account</h2>
        <span>Sign up with your email and password</span>
        
        <form className='sign-up-form' onSubmit={handleSubmit}>
            <FormInput type='text' name='displayName' value={displayName}
            handleChange={handleChange} label='display Name' required />

            <FormInput type='email' name='email' value={email}
            handleChange={handleChange} label='email' required />

            <FormInput type='password' name='password' value={password}
            handleChange={handleChange} label='password' required />

            <FormInput type='password' name='confirmPassword' value={confirmPassword}
            handleChange={handleChange} label='confirm Password' required />

            <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
            
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    emailSignUpStart: (displayName, email, password, confirmPassword) => 
        dispatch(emailSignUpStart({ displayName, email, password, confirmPassword }))
})

export default connect(null, mapDispatchToProps)(SignUp);