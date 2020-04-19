import React from 'react';
import { connect } from 'react-redux';
import { selectCurrentUser } from '../../redux/user/user.selector.js';

import './header.styles.scss';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles';

import CartIcon from '../cart/cart-icon/cart-icon.component.jsx';
import CartDropdown from '../cart/cart-dropdown/cart-dropdown.component';
import { ReactComponent as Logo } from '../../assets/original.svg';
import { auth } from '../../firebase/firebase.utils.js';

const Header = ({ currentUser }) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo alt='logo' src={Logo} className='logo' />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'> SHOP </OptionLink>
            <OptionLink to='/contact'> CONTACT </OptionLink>
            { currentUser ?
            <OptionLink as='div'
                onClick={() => SignedOut()} > SIGN OUT </OptionLink>
                :
            <OptionLink to='/sign-in'> SIGN IN </OptionLink> }
            <CartIcon/>
        </OptionsContainer>
        <CartDropdown/>
    </HeaderContainer>
)

function SignedOut() {
    alert('You have been successfully logged out.')
    auth.signOut()
}

const mapStateToProps = state => ({
    currentUser: selectCurrentUser(state)
})

export default connect(mapStateToProps)(Header);

