import React from 'react';
import { connect } from 'react-redux';
import { clearItemFromCart, 
         removeOneItemFromCart, 
         addItemCart } from '../../redux/cart/cart.actions.js'

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, clearItemFromCart, removeOneItemFromCart, addItemCart }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img alt='item' src={imageUrl}/>
            </div>
            <span className='name'> {name} </span>
            <span className='price'> {price}£ </span>
            <span className='quantity'> 
                <div onClick={() => removeOneItemFromCart(cartItem)}
                     className='arrow'> &#10094; &ensp; </div>
                {quantity} 
                <div onClick={() => addItemCart(cartItem)}
                     className='arrow'> &ensp; &#10095; </div>
            </span>
            <div className='remove-button'
                 onClick={() => clearItemFromCart(cartItem)}> 
                 &#10005; 
            </div>
        </div>
)}

const mapDispatchToProps = dispatch => ({
    clearItemFromCart: item => dispatch(clearItemFromCart(item)),
    removeOneItemFromCart: item => dispatch(removeOneItemFromCart(item)),
    addItemCart: item => dispatch(addItemCart(item))
    
})

export default connect(null, mapDispatchToProps)(CheckoutItem);

