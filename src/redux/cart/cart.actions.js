import { cartActionsTypes } from './cart.types';

export const toggleCart = () => ({ 
    type: cartActionsTypes.TOGGLE_CART_HIDDEN
})

export const addItemCart = item => ({
    type: cartActionsTypes.ADD_ITEMS_CART,
    payload: item
})

export const clearItemFromCart = item => ({
    type: cartActionsTypes.REMOVE_ITEM_FROM_BASKET,
    payload: item
})

export const removeOneItemFromCart = item => ({
    type: cartActionsTypes.REMOVE_ONE_ITEM_FROM_CARD,
    payload: item
})

export const addOneItemFromCart = item => ({
    type: cartActionsTypes.ADD_ONE_ITEM_FROM_CARD,
    payload: item
})


 