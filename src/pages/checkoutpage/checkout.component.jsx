import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartItemsPrice } from '../../redux/cart/cart.selector.js';

import CheckoutItem from '../../components/checkout-item/checkout-item.component.jsx';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component.jsx';
import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, totalPrice }) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span> Product </span>
            </div>
            <div className='header-block'>
                <span> Description </span>
            </div>
            <div className='header-block'>
                <span> Price </span>
            </div>
            <div className='header-block'>
                <span> Quantity </span>
            </div>
            <div className='header-block'>
                <span> Remove </span>
            </div>
        </div>
        {
            cartItems.map( cartItem => 
                <CheckoutItem cartItem={cartItem} key={cartItem.id} />
            )
        }
        <div className='total'>
            TOTAL: {totalPrice}£
        </div>
        <div className='warning-message'>
            <span>*Please use the following test credit card for payments*</span>
            <span>4242 4242 4242 4242 -- Exp: 01/20 -- CVV: 123</span>
        </div>
        <StripeCheckoutButton price={totalPrice} />
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    totalPrice: selectCartItemsPrice

})

export default connect(mapStateToProps)(CheckoutPage);
