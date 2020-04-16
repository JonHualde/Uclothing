import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartItemsPrice } from '../../redux/cart/cart.selector.js';

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
                <span> Quantity </span>
            </div>
            <div className='header-block'>
                <span> Price </span>
            </div>
            <div className='header-block'>
                <span> Remove </span>
            </div>
        </div>
        {
            cartItems.map(cartItem => 
                cartItem.name
            )
        }
            <div className='total'>
                TOTAL: ${totalPrice}
            </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    totalPrice: selectCartItemsPrice

})

export default connect(mapStateToProps)(CheckoutPage);
