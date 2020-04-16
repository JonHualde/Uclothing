import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { clearAllBasket, toggleCart } from '../../../redux/cart/cart.actions.js';
import { selectCartItems, selectHidden } from '../../../redux/cart/cart.selector.js'; 

import CustomButtom from '../../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component.jsx';
import './cart-dropdown.styles.scss';

const CartDropdown = ({ hidden, cartItems, history, dispatch }) => (
        hidden ? null : 
        <div className='cart-dropdown'>
            <div className='cart-items'/>
            {cartItems.length ? (
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} /> ))
                ) : (
                <span className='empty-message'>Your cart is empty</span>
            )}
            <CustomButtom 
                onClick={ () => {
                    history.push('/checkout');
                    dispatch(toggleCart()); 
                }}
            > GO TO CHECKOUT
            </CustomButtom>
        </div> 
)

const mapStateToProps = createStructuredSelector({
        hidden: selectHidden,
        cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));