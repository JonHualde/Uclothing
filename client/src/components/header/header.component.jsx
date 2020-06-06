import React from 'react';
import { connect } from 'react-redux';
import { selectCurrentUser } from '../../redux/user/user.selector.js';
import { signedOutStart } from '../../redux/user/user.actions.js';

import './header.styles.scss';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles';

import CartIcon from '../cart/cart-icon/cart-icon.component.jsx';
import CartDropdown from '../cart/cart-dropdown/cart-dropdown.component';
import { ReactComponent as Logo } from '../../assets/original.svg';

const Header = ({ currentUser, signedOutStart }) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo alt='logo' src={Logo} className='logo' />
            <p className='logo_text'>U-Clothing</p>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'> SHOP </OptionLink>
            <OptionLink to='/contact'> CONTACT </OptionLink>
            { currentUser ?
            <OptionLink as='div'
                onClick={signedOutStart} > SIGN OUT </OptionLink>
                :
            <OptionLink to='/sign-in'> SIGN IN </OptionLink> }
            <CartIcon/>
        </OptionsContainer>
        <CartDropdown/>
    </HeaderContainer>
)

// function SignedOut() {
//     console.log('hello')
//     userSignedOut();
// }

const mapStateToProps = state => ({
    currentUser: selectCurrentUser(state)
})

const mapDispatchToProps = dispatch => ({
    signedOutStart: () => dispatch(signedOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);

