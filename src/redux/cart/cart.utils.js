export const addItemToCart = (cartItems, newItem) => {
    const oldCartItems = cartItems.find(
        cartItem => cartItem.id === newItem.id
    );

    if (oldCartItems) {
        return cartItems.map(cartItem =>
            cartItem.id === newItem.id
             ? { ...cartItem, quantity: cartItem.quantity + 1}
             : cartItem
        )
    }

    return [...cartItems, {...newItem, quantity: 1}]
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
const existingCartItem = cartItems.find(
  cartItem => cartItem.id === cartItemToRemove.id
)
    console.log("Old Cart: ",existingCartItem.quantity)
    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }
    
    return  cartItems.map(
      cartItem =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    )
}
