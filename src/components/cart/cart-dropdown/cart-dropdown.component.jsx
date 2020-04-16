import React from 'react'
import { connect } from 'react-redux';
import { clearAllBasket } from '../../../redux/cart/cart.actions.js';
import { selectCartItems, selectHidden } from '../../../redux/cart/cart.selector.js'; 

import CustomButtom from '../../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss';

const CartDropdown = ({ hidden, clearAllBasket, cartItems }) => (
        hidden ? null : 
        <div className='cart-dropdown'>
            <div className='cart-items'/>
            { cartItems  
            ? cartItems.map((item, index) => (
                <CartItem key={index} item={item} /> )) 
            : null }
            <CustomButtom>GO TO CHECKOUT</CustomButtom>
            <p onClick={clearAllBasket} > Clear all basket </p>
        </div> 
)

const mapStateToProps = ( state ) => ({
        hidden: selectHidden(state),
        cartItems: selectCartItems(state)
})

const mapDispatchToProps = dispatch => ({
     clearAllBasket: () => dispatch(clearAllBasket())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);