import React from 'react';
import "./Cart.css"
const Cart = (props) => {
    const { cart } = props
    // console.log(cart)
    let total = 0
    let shipping = 0
    let quantity = 0
    for (const product of cart) {
        total = total + product.price * product.quantity
        shipping = shipping + product.shipping
        quantity = quantity + product.quantity
    }
    let tax = total * 0.1;
    const grandtotal = total + shipping + parseFloat(tax)
    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <p>Selected cart:{quantity}</p>
            <p>Total Price:${total}</p>
            <p>Total Shipping Charge:${shipping}</p>
            <p>Tax:{tax.toFixed(2)}</p>
            <h5>Grand Total:{grandtotal.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;