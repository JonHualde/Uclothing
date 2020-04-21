import React, { Component } from 'react';
import { connect } from 'react-redux';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component.jsx';
import CustomButton from '../custom-button/custom-button.component.jsx';
import { auth } from '../../firebase/firebase.utils.js';
import { googleSignInStart } from '../../redux/user/user.actions.js';

class SignIn extends Component {
    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;

        try {
           await auth.signInWithEmailAndPassword(email, password)
           this.setState ({ email: '', password: ''})
        } catch(error) {
            console.log('An error occured when loggin in, please try again', error)
        }
    }

    handleChange = (event) => {
        const { value, name } = event.target
        this.setState ({ [name]: value })
    }

    render() {
    const { googleSignInStart } = this.props;
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
                    <CustomButton type='button' onClick={googleSignInStart} color='blue'> 
                        Sign in with Google 
                    </CustomButton>
                </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart())
})

export default connect(null, mapDispatchToProps)(SignIn);