import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { clearAllBasket } from '../../../redux/cart/cart.actions.js';
import { selectCartItems, selectHidden } from '../../../redux/cart/cart.selector.js'; 

import CustomButtom from '../../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss';

const CartDropdown = ({ hidden, clearAllBasket, cartItems, history }) => (
        hidden ? null : 
        <div className='cart-dropdown'>
            <div className='cart-items'/>
            { cartItems.length  
            ? cartItems.map((item, index) => (
                <CartItem key={index} item={item} /> )) 
            : <span className='empty-message'>
                Your cart is empty
            </span> 
             }
            <CustomButtom onClick={ () => history.push('/checkout')}>
                GO TO CHECKOUT</CustomButtom>
            <p onClick={clearAllBasket} > Clear out basket </p>
        </div> 
)

const mapStateToProps = createStructuredSelector({
        hidden: selectHidden,
        cartItems: selectCartItems
})

const mapDispatchToProps = dispatch => ({
     clearAllBasket: () => dispatch(clearAllBasket())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));