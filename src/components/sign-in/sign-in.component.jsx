import React, { Component } from 'react';
import { connect } from 'react-redux';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component.jsx';
import CustomButton from '../custom-button/custom-button.component.jsx';
import { 
    googleSignInStart, 
    emailSignInStart,
} from '../../redux/user/user.actions.js';

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
        const { emailSignInStart } = this.props;

        emailSignInStart(email, password);
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
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);