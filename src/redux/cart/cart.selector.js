import { createSelector } from 'reselect';


// --------------- CART STATE --------------- //
const selectCart = state => state.cart;

export const selectHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
);

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartItemsQuantity = createSelector(
    [selectCartItems],
    cartItems => 
        cartItems.reduce((accumulatedQuantity, cartItem) => 
            accumulatedQuantity + cartItem.quantity , 0)
);

export const selectCartItemsPrice = createSelector(
    [selectCartItems],
    cartItems => 
        cartItems.reduce((accumulatedPrice, cartItem) => 
            accumulatedPrice + ( cartItem.price * cartItem.quantity) , 0)
);
