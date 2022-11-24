

import React from 'react';
import { deleteShoppingCart } from '../../utilities/fakedb';
import './Cart.css'
const Cart = (props) => {
    const { cart } = props;
    // console.log(cart)
    let total = 0;
    let shipping = 0;
    // console.log(cart);
    let quantity = 0;
    for (const product of cart) {
        total = total + product.price * product.quantity;
        quantity = quantity + product.quantity;
        shipping = shipping + product.shipping;
    }

    let tax = total * 0.1;
    tax = parseFloat(tax.toFixed(2));
    const GrandTotal = tax + total + shipping;
    return (
        <div className='cart'>
            <h2 className='cart-header'>Order Summary</h2>
            <p>Selected items : {quantity} </p>
            <p>Total Price : $ {total}</p>
            <p>Total Shipping Charge : $ {shipping} </p>
            <p>Tax : $  {tax}</p>
            <h5>Grand Total : $ {GrandTotal.toFixed(2)} </h5>

            <button  className='delete-cart'>
                <p>Delete Cart</p>
            </button>
            <button className='review-cart'>
                <p>Review Cart</p>
            </button>
        </div>
    );
};

export default Cart;