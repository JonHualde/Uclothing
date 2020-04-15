import { cartActionsTypes } from './cart.types';

export const toggleCart = () => ({ 
    type: cartActionsTypes.TOGGLE_CART_HIDDEN
})

export const addItemCart = item => ({
    type: cartActionsTypes.ADD_ITEMS_CART,
    payload: item
})

export const clearAllBasket = () => ({ 
    type: cartActionsTypes.CLEAR_ALL_BASKET
})

 