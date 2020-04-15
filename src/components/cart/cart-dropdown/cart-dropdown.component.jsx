import React from 'react'
import { connect } from 'react-redux';
import { clearAllBasket } from '../../../redux/cart/cart.actions.js';

import CustomButtom from '../../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';

const CartDropdown = ({ hidden, clearAllBasket }) => (
        hidden ? null : 
        <div className='cart-dropdown'>
            <div className='cart-items'/>
            <CustomButtom>GO TO CHECKOUT</CustomButtom>
            <p onClick={clearAllBasket} > Clear all basket </p>
        </div> 
)

const mapStateToProps = ({ cart: { hidden } }) => ({
     hidden
})

const mapDispatchToProps = dispatch => ({
     clearAllBasket: () => dispatch(clearAllBasket())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);