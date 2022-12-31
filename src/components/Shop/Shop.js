import React, { useEffect, useState } from 'react'
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css"

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        console.log("product launch before fetch")
        fetch("products.json")
            .then(res => res.json())
            .then(data => {

                setProducts(data)
                console.log('products loaded')
            })
    }, [])
    useEffect(() => {
        console.log('first localstorage package', products)
        const storedCart = getStoredCart()
        const savedCart = []
        for (const id in storedCart) {
            const addProduct = products.find(product => product.id == id)
            // console.log(addProduct)
            if (addProduct) {
                const quantity = storedCart[id]
                addProduct.quantity = quantity
                console.log(addProduct)
                savedCart.push(addProduct)
            }
        }
        setCart(savedCart)
        console.log("finish local storage")
    }, [products])

    // const handleClick = (product) => {
    //     console.log(product)
    // }
    const handleClick = (product) => {
        // console.log(product)
        const newArray = [...cart, product]
        setCart(newArray)
        addToDb(product.id)
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product key={product.id} product={product} handleClick={handleClick}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;