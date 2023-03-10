import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./Product.css"
const Product = ({ product, handleClick }) => {
    // const { product, handleClick } = props
    const { name, img, seller, price, ratings } = product;
    // const handleClick = () => {
    //     console.log("clicked")
    // }
    return (
        <div className='product'>
            <img src={img} alt=""></img>
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p><small>Price:{price}$</small></p>
                <p><small>Seller:{seller}</small></p>
                <p><small>Ratings:{ratings}stars</small></p>
            </div>
            <button onClick={() => handleClick(product)} className="btn-info">
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button> 

        </div>
    );
};

export default Product;