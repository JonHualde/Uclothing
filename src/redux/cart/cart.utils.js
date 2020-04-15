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


export const filterQuantity = (cartItems) => {
    let data = 0;

    if (cartItems) {
        cartItems.map( cartItem => {
            data = data + cartItem.quantity
            console.log("data", data)
        })
        return data;
    }
    return [...cartItems]
}