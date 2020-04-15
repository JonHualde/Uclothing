import { cartActionsTypes } from './cart.types';
import { addItemToCart } from './cart.utils';
import { filterQuantity } from './cart.utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: [],
    itemNumber: 0
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
                cartItems: addItemToCart(state.cartItems, action.payload),
                itemNumber: filterQuantity(state.cartItems)
            };
        
        case cartActionsTypes.CLEAR_ALL_BASKET:
            return {
                ...state, 
                cartItems: [],
                itemNumber: 0
            }

        default:
            return state;
    }
}

export default cartReducer;