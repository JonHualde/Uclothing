import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectCurrentUser } from '../../redux/user/user.selector.js';

import './header.styles.scss';
import CartIcon from '../cart/cart-icon/cart-icon.component.jsx';
import CartDropdown from '../cart/cart-dropdown/cart-dropdown.component';
import { ReactComponent as Logo } from '../../assets/original.svg';
import { auth } from '../../firebase/firebase.utils.js';

const Header = ({ currentUser }) => (
    <div className='header'>
        <Link  className='logo-container' to='/'>
            <Logo alt='logo' src={Logo} className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/collections'> SHOP </Link>
            <Link className='option' to='/shop'> CONTACT </Link>
            { currentUser ?
                <div className='option'
                onClick={() => SignedOut()} > SIGN OUT </div>
                :
                <Link className='option' to='/sign-in'> SIGN IN </Link> 
            }
            <CartIcon/>
        </div>
        <CartDropdown/>
    </div>
)

function SignedOut() {
    alert('You have been successfully logged out.')
    auth.signOut()
}

const mapStateToProps = state => ({
    currentUser: selectCurrentUser(state)
})

export default connect(mapStateToProps)(Header);

