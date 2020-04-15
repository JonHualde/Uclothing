import React from 'react'
import { connect } from 'react-redux';
import { toggleCart } from '../../../redux/cart/cart.actions.js';
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../../assets/shopping-bag.svg';


const CartIcon = ({ toggleCart, itemNumber }) => (
    <div className='cart-icon' onClick={toggleCart} >
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>
            {itemNumber}
        </span>
    </div>
)


const dispatchStateToProps = dispatch => ({
    toggleCart: () => dispatch(toggleCart())
})

const mapStateToProps = ({ cart: { itemNumber} }) => ({
    itemNumber
})


export default connect(mapStateToProps, dispatchStateToProps)(CartIcon);

