export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem 
        )
    } 

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}


export const removeItemFromCart = (cartItems, cartItemToBeRemoved) => {
    const filtered = cartItems.filter(
        cartItem => 
            (cartItem.id !== cartItemToBeRemoved.id))

    return [...filtered]
}


export const removeOneItemFromCart = (cartItems, oneItemToRemove) => {
    const existingItem = cartItems.find(
        cartItem => cartItem.id === oneItemToRemove.id
    );

    if (existingItem.quantity === 1) {
        return cartItems.filter(cartItem => 
            (cartItem.id !== oneItemToRemove.id))
    } 

    return cartItems.map(cartItem => 
            cartItem.id === oneItemToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem 
        )
} 
    
