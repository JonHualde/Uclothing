import React from 'react'
import { connect } from 'react-redux';
import { toggleCart } from '../../../redux/cart/cart.actions.js';
import { selectCartItemsQuantity } from '../../../redux/cart/cart.selector.js';
import { createStructuredSelector } from 'reselect';

import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../../assets/shopping-bag.svg';


const CartIcon = ({ toggleCart, itemQuantity }) => (
    <div className='cart-icon' onClick={toggleCart} >
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>
            {itemQuantity}
        </span>
    </div>
)


const dispatchStateToProps = dispatch => ({
    toggleCart: () => dispatch(toggleCart())
})

const mapStateToProps = createStructuredSelector({
    itemQuantity: selectCartItemsQuantity
})


export default connect(mapStateToProps, dispatchStateToProps)(CartIcon);

