import { cartActionsTypes } from './cart.types';
import { addItemToCart } from './cart.utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartActionsTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state, 
                hidden: !state.hidden
            };
            
        case cartActionsTypes.ADD_ITEMS_CART:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            };
        
        case cartActionsTypes.CLEAR_ALL_BASKET:
            return {
                ...state, 
                cartItems: []
            }

        default:
            return state;
    }
}

export default cartReducer;