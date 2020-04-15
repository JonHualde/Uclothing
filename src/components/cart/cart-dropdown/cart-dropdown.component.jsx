import React from 'react'
import { connect } from 'react-redux';

import CustomButtom from '../../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';

const CartDropdown = ({ hidden }) => (
        hidden ? null : 
        <div className='cart-dropdown'>
            <div className='cart-items'/>
            <CustomButtom>GO TO CHECKOUT</CustomButtom>
        </div> 
)

const mapStateToProps = ({ cart: { hidden } }) => ({
     hidden
})

export default connect(mapStateToProps)(CartDropdown);