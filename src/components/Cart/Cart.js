import React from 'react';

const Cart = ({ cart }) => {
    return (
        <div>
            <h2>this is shop container</h2>
            <p>Selected cart:{cart.length}</p>
        </div>
    );
};

export default Cart;