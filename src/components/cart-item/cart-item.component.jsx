import React from "react";

import './cart-item.styles.scss'

// destructure the item field from props, and destructure those elements
const CartItem = ({ item: { imageUrl, price, name, quantity}}) => (
    <div className="cart-item">
        <img src={imageUrl} alt='item'/>
        <div className="item-details">
            <span className='name'>{name } </span>
            <span className='price'>{quantity} x ${price} </span>
        </div>
    </div>
)

export default CartItem