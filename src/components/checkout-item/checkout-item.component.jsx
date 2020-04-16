import React from 'react';
import { connect } from 'react-redux';
import { removeItemCart } from '../../redux/cart/cart.actions.js'

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, removeItemCart }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img alt='item' src={imageUrl}/>
            </div>
            <span className='name'> {name} </span>
            <span className='price'> {price}£ </span>
            <span className='quantity'> {quantity} </span>
            <div className='remove-button'
                 onClick={() => removeItemCart(cartItem)}> 
                 &#10005; 
            </div>
        </div>
)}

const mapDispatchToProps = dispatch => ({
    removeItemCart: item => dispatch(removeItemCart(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);

