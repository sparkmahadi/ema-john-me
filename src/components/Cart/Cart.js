import React from 'react';
import './Cart.css'

const Cart = ({product}) => {
    // console.log(product)
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const item of product){
        quantity = quantity + item.quantity;
        total = total + (item.price* item.quantity);
        shipping = shipping + (item.shipping* item.quantity);
    }
    const tax = parseFloat((total*0.1).toFixed(2));
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart-div'>
            <h2>Order Summary</h2>
            <div>
                <h4>Selected Items: {quantity}</h4>
                <p>Total Price: ${total}</p>
                <p>Total Shipping Charge: ${shipping}</p>
                <p>Tax: ${tax}</p>
                <h4>Grand Total: ${grandTotal}</h4>
            </div>
        </div>
    );
};

export default Cart;