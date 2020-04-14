import React, { Component } from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component.jsx';
import CustomButton from '../custom-button/custom-button.component.jsx';
import { signInWithGoogle } from '../../firebase/firebase.utils.js';

class SignIn extends Component {
    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState ({ email: '', password: ''})
    }

    handleChange = (event) => {
        const { value, name } = event.target
        this.setState ({ [name]: value })
        console.log(this.state)
    }

    render() {
        return (
            <div className='sign-in'> SIGN IN
                <h2> I already have an account </h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' value={this.state.email} 
                    required handleChange={this.handleChange} label='email'
                    />
                    <FormInput name='password' type='password' value={this.state.password} 
                    required handleChange={this.handleChange} label='password'
                    />
                <div className='buttons'>
                    <CustomButton type='submit'> Sign In </CustomButton>
                    <CustomButton onClick={signInWithGoogle} color='blue'> Sign in with Google </CustomButton>
                </div>
                </form>
            </div>
        )
    }
}

export default SignIn;