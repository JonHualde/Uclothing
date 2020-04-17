import { cartActionsTypes } from './cart.types';
import { addItemToCart, 
         removeItemFromCart, 
         removeOneItemFromCart } from './cart.utils';

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

        case cartActionsTypes.REMOVE_ITEM_FROM_BASKET:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            };

        case cartActionsTypes.REMOVE_ONE_ITEM_FROM_CARD:
            return {
                ...state,
                cartItems: removeOneItemFromCart(state.cartItems, action.payload)
            };

        default:
            return state;
    }
}

export default cartReducer;